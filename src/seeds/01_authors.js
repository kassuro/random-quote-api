const quotes = require('./quotes.json');

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('authors').del()
        .then(function () {
            // build up array for inserting
            let cleaned = [];
            quotes.map(ele => {
                if( !cleaned.includes(ele.quoteAuthor) && ele.quoteAuthor) {
                    cleaned.push(ele.quoteAuthor);
                }
            });
            let authors = [];
            cleaned.forEach(ele => {
                authors.push({name: ele});
            });
            authors.push({name: 'Unkown'});

            // Inserts seed entries
            return knex('authors').insert(authors);
        });
};