const { Pool } = require("pg");

const config = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
};

const pool = new Pool(config);
pool.connect();

// GET ALL
async function getPersons() {
	try {
		const res = await pool.query("select * from persons order by id");
		return res.rows;
	} catch (error) {
		return error;
	}
}

// INSERT
async function createPerson(person) {
	try {
		const text =
			"INSERT INTO persons (name, lastname, documenttype, document, email, phone, file, birthdate ) VALUES (trim($1), trim($2), trim($3), $4, trim($5), trim($6), trim($7), trim($8))";
		const values = [
			person.name,
			person.lastname,
			person.documenttype,
			person.document,
			person.email,
			person.phone,
			person.file,
			person.birthdate,
		];
		const res = await pool.query(text, values);
		return res.rows;
	} catch (error) {
		return error;
	}
}

// UPDATE
async function updatePerson(person) {
	try {
		const text =
			"UPDATE persons SET name = trim($1), lastname = trim($2), document = $3, email = trim($4), phone = trim($5), file=trim($6), birthdate = trim($7), documenttype = trim($8) WHERE id = " +
			person.id;
		const values = [
			person.name,
			person.lastname,
			person.document,
			person.email,
			person.phone,
			person.file,
			person.birthdate,
			person.documenttype,
		];
		const res = await pool.query(text, values);
		return res.rows;
	} catch (error) {
		return error;
	}
}

// DELETE
async function deletePerson(id) {
	try {
		const text = "DELETE FROM persons WHERE id =" + id;
		const res = await pool.query(text);
		return res.rows;
	} catch (error) {
		return error;
		S;
	}
}

module.exports = { getPersons, createPerson, updatePerson, deletePerson };
