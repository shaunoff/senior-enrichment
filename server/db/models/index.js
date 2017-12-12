'use strict';

const db = require('../index');
const Student = require('./student');
const Campus = require('./campus');

Student.belongsTo(Campus, {
	foreignKey: {
		allowNull: false
	},
	onDelete: 'CASCADE'
});

Campus.hasMany(Student);

module.exports = db;
