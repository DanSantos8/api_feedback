const Knex = require('knex');

const config = {
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	host: process.env.DB_HOST
}

const connection = Knex({
	client: 'mysql',
	connection: config,
	pool: { min: 0, max: 10 },
});

module.exports = connection;