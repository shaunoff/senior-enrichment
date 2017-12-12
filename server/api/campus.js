const express = require('express');
const router = express.Router();
const Campus = require('../db/models/campus');
const Student = require('../db/models/student');


router.get('/', (req, res) => {
	Campus.findAll({include: [Student]}).then(data => {
		res.json(data);
	});
});


router.get('/:id', (req, res) => {
	Campus.findAll({
		where: {
			id: req.params.id
		},
		include: [Student]
	}).then(data => {
		res.json(data);
	});
});

router.post('/', (req, res) => {
	const { name, imageUrl, description } = req.body;
	Campus.create({ name, imageUrl, description })
		.then(campus => res.json(campus));
});

router.put('/:id', (req, res) => {
	const campusId = req.params.id;
	Campus.update(req.body, {where: {id: campusId}, returning: true})
	.then(data => {
		return Campus.findAll({
			where: {
				id: campusId
			},
			include: [Student]
		})
	})
	.then(data => res.json(data));
});

router.delete('/:id', (req, res) => {
	const campusId = req.params.id;
	Campus.destroy({where: {id: campusId}})
	.then(data => res.json(data));
});


module.exports = router;
