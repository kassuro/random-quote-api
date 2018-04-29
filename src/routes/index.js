const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

/*
*   route '/'
*   return a random quote
*/
router.get('/', async (req, res) => {
    let quote = await Quote.query().select().orderByRaw('RAND()').limit(1).first();
    res.json(quote);
});

module.exports = router;