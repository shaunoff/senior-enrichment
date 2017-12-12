'use strict';
const expect = require('chai').expect;
//onst Campus = require('../db/models/campus');
const Student = require('../db/models/student');
const Campus = require('../db/models/campus');
const db = require('../db/models');

describe('The `campus` model', (done) => {

	before(() => {
		return db.sync({force: true})
	});

	describe('The `campus` fields', (done) => {
		let newCampus;

		it('includes `name` and `imageUrl` `description` fields', () => {
			newCampus = Campus.build({
				name: 'Shaun',
				imageUrl: 'Hutch',
				description: 'shaundavidhutch@gmail.com',
			});
			return newCampus.save().then(savedCampus => {
				expect(savedCampus.name).to.equal('Shaun');
				expect(savedCampus.imageUrl).to.equal('Hutch');
				expect(savedCampus.description).to.equal('shaundavidhutch@gmail.com');
			});
		});

		it('name is not allowed to be balnk', () => {
			newCampus = Campus.build({
				imageUrl: 'Hutch',
				description: "fgjhfjkhgjkfjgkjfgkjfhgjhfkjgh"
			});
			return newCampus.validate()
      .then(() => {
        throw new Error('validation should fail when content is null');
      },
      (result) => {
        expect(result).to.be.an.instanceOf(Error);
      });
		});

		it('imageUrl returns a deualt value if empty', () => {
			newCampus = Campus.build({
				name: 'Shaun',
				description: 'shaundavidhutch@gmail.com',
			});
			return newCampus.save().then(savedCampus => {
				expect(savedCampus.name).to.equal('Shaun');
				expect(savedCampus.imageUrl).to.equal('www.bbc.co.uk');
				expect(savedCampus.description).to.equal('shaundavidhutch@gmail.com');
			});
		});
	});
});
