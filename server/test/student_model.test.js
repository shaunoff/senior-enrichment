'use strict';

var expect = require('chai').expect;
const Student = require('../db/models/student');
const Campus = require('../db/models/campus');
const db = require('../db/models');

describe('The `student` model', () => {

	beforeEach(function() {
		db.sync({force: true})
			.then(() => {
				return Campus.create({
					name: 'Shaun',
					imageUrl: 'www.testy.com',
					description: 'shaundavidhutch@gmail.com',
				})
		});

	});
  describe('The `student` fields', () => {
		let newStudent;

		it('includes `firstName` and `lastName` `email` and `gpa` fields', () => {
			newStudent = Student.build({
				firstName: 'Shaun',
				lastName: 'Hutch',
				email: 'shaundavidhutch@gmail.com',
				gpa: 3
			});

			return newStudent.save().then(savedStudent => {
				expect(savedStudent.firstName).to.equal('Shaun');
				expect(savedStudent.lastName).to.equal('Hutch');
				expect(savedStudent.email).to.equal('shaundavidhutch@gmail.com');
				expect(savedStudent.gpa).to.equal(3);
				expect(savedStudent.campusId).to.equal(1);
			});
		});
		it('email to be a valid email address', () => {
			newStudent = Student.build({
				firstName: 'Shaun',
				lastName: 'Hutch',
				email: 'hhhh',
				gpa: 3
			});
			return newStudent.validate()
      .then(() => {
        throw new Error('validation should fail when content is null');
      },
      (result) => {
        expect(result).to.be.an.instanceOf(Error);
      });
		});
		it('gpa needs to be between `0` and `4`', () => {
			newStudent = Student.build({
				firstName: 'Shaun',
				lastName: 'Hutch',
				email: 'shaundavidHutch@gmail.com',
				gpa: 6
			});
			return newStudent.validate()
      .then(() => {
        throw new Error('validation should gpa is out of range');
      },
      (result) => {
        expect(result).to.be.an.instanceOf(Error);
      });
		});
		it('must have a virtual name field which is the concatenation of firstName and lastName', () => {
			newStudent = Student.build({
				firstName: 'Shaun',
				lastName: 'Hutch',
				email: 'shaundavidHutch@gmail.com',
				gpa: 4
			});
			return newStudent.save().then(savedStudent => {
				expect(savedStudent.name).to.equal('Shaun Hutch');
			});
		});



	});
});
