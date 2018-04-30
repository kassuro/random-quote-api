const express = require('express');
const router = express.Router();
const Author = require('../models/Author');

/*
*   route '/authors/'
*   returns all authors
*/
router.get('/', async (req, res) => {
    let authors = await Author.query().eager('quotes');
    res.json(authors);
});

/*
*   route '/authors/:id'
*   returns 
*/
router.get('/:id', async (req, res) => {
    let author = await Author.query()
        .where('id', '=', req.params.id)
        .eager('quotes');
    res.json(author);
});

module.exports = router;