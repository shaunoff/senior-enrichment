const Sequelize = require('sequelize');
const db = require('../index');

const Student = db.define('student', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		validate: {
			isEmail: true
		}
	},
	gpa: {
		type: Sequelize.VIRTUAL,
		get () {
			let scores = this.getDataValue('assessments');
			const sum = scores.reduce((a,b)=> a+b,0)
			return (sum / scores.length).toFixed(1)
		}
	},
	assessments: {
		type: Sequelize.ARRAY(Sequelize.INTEGER),
		defaultValue: []
	},
	name: {
		type: Sequelize.VIRTUAL,
		get () {
      let first = this.getDataValue('firstName');
			let last = this.getDataValue('lastName');
      return `${first} ${last}`
    }
	}
});

module.exports = Student;
