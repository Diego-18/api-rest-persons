const { Router } =  require('express');
const {  getPersons, createPerson, updatePerson, deletePerson } = require('../models/Persons');

const router = Router();
const _ = require('underscore');

// path: /api/persons
// GET: returns all persons
router.get('/', (req, res) => {
    getPersons()
    .then(persons => {
        res.json(persons);
    })
    .catch(error => {
        res.json(error);
    });
});

// path: /api/persons
// POST: creates a new person
router.post('/', (req, res) => {
    const { name, lastname, document, email, phone, file, birthdate } = req.body;
    if(name && lastname && document && email && phone && birthdate) {
        createPerson({ name, lastname, document, email, phone, file, birthdate })
        .then(person => {
            res.json(person);
        })
        .catch(error => {
            res.json(error);
        });
    }
    else{
        res.status(500).json({error:'Wrong Request'});
    }
});


// path: /api/persons/:id
// PUT: returns a person by id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, lastname, document, email, phone, file, birthdate } = req.body;
    if(name || lastname || document || email || phone || file || birthdate){
        updatePerson({ id, name, lastname, document, email, phone, file, birthdate })
        .then(person => {
            res.json(person);
        })
        .catch(error => {
            res.json(error);
        });
    }
    else{
        res.status(500).json({error:'Wrong Request'});
    }
});

// path: /api/persons/:id
// DELETE: deletes a person by id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    deletePerson(id)
    .then(person => {
        res.json(person);
    })
    .catch(error => {
        res.json(error);
    });
});

module.exports = router;