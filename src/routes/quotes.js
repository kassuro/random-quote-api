const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

/*
*   route '/quotes/
*   return all quotes
*/
router.get('/', async (req, res) => {
    let quotes = await Quote.query();
    res.json(quotes);
});

/*
*   route '/quotes/:id'
*   return a specific quote
*/
router.get('/:id', async (req, res) => {
    let quote = await Quote.query().where('id', '=', req.params.id).eager('author');
    res.json(quote);
});

module.exports = router;