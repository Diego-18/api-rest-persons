const { Pool } = require('pg');

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
};

const pool = new Pool(config);
pool.connect();


// GET ALL
async function getPersons(){
    try {
        const res = await pool.query("select * from persons order by id");
        return res.rows;
    } catch (error) {
        return error;
    }
};

// INSERT
async function createPerson(person){
    try {
        const text = "INSERT INTO persons (name, lastname, document, email, phone, file, birthdate ) VALUES ($1, $2, $3, $4, $5, $6, $7)";
        const values = [person.name, person.lastname, person.document, person.email, person.phone, person.file, person.birthdate];
        const res = await pool.query(text, values);
        return res.rows;
    } catch (error) {
        return error;
    }
};

// UPDATE
async function updatePerson(person){
    try {
        const text = "UPDATE persons SET name = $1, lastname = $2, document = $3, email = $4, phone = $5, file=$6, birthdate = $7 WHERE id = " + person.id;
        const values = [person.name, person.lastname, person.document, person.email, person.phone, person.file, person.birthdate];
        const res = await pool.query(text, values);
        return res.rows;
    } catch (error) {
        return error;
    }
}

// DELETE
async function deletePerson(id){
    try {
        const text = "DELETE FROM persons WHERE id =" + id;
        const res = await pool.query(text);
        return res.rows;
    } catch (error) {
        return error;S
    }
}

module.exports =  { getPersons, createPerson, updatePerson, deletePerson };
