const express = require('express');
const router = express.Router();
const Campus = require('../db/models/campus');
const Student = require('../db/models/student');


router.get('/', (req, res) => {
	Student.findAll({}).then(data => {
		res.json(data);
	});
});

router.post('/', (req, res) => {
	console.log(req.body);
	//const { firstName, imageUrl, description } = req.body;
	Student.create(req.body)
		.then(student => res.json(student));
});

router.get('/:id', (req, res) => {
	Student.findOne({
		where: {
			id: req.params.id
		}
	}).then(data => {
		res.json(data);
	});
});

router.put('/:studentId', (req, res) => {
	const {studentId} = req.params;
	Student.update(req.body, {where: {id: studentId}, returning: true})
	.then(data => res.json(data[1]));
});

router.put('/assessment/:studentId', (req, res) => {
	const {studentId} = req.params;
	Student.findOne({
		where: {
			id: req.params.studentId
		}
	})
	.then((student) => {
		console.log("before", student.assessments)
		student.assessments.push(req.body.assessment);
		console.log("after", student.assessments)
		return student.update({
			assessments: student.assessments
		}, {
			where: {
	      id: studentId
	    }
		});
	})
	.then(user => res.json(user));

});


// Student.update(
// 	{assessments: Student.fn('array_append', Student.col('assessments'), req.body.assessment)},
// 	{where: {id: studentId}, returning: true}
// )
// .then(data => res.json(data[1]));


router.delete('/:studentId', (req, res) => {
	const {studentId} = req.params;
	Student.destroy({where: {id: studentId}})
	.then(data => res.json(data));
});

module.exports = router;
