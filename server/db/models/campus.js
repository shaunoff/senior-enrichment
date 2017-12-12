const Sequelize = require('sequelize');
const db = require('../index');

const Campus = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: "www.bbc.co.uk"
	},
	description: {
		type: Sequelize.TEXT,
		allowNull: false
	}
});

module.exports = Campus;
