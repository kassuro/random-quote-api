const quoteFile = require('./quotes.json');

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('quotes').del()
        .then(() => {
            let promises = [];
            quoteFile.forEach(ele => {
                let quote = ele.quoteText;
                let author = ele.quoteAuthor;
                if(!author) {
                    author = 'Unkown';
                }
                promises.push(inserQuote(knex, quote, author));
            });

            return Promise.all(promises);
        });
};

function inserQuote(knex, quote, author) {
    return knex('authors').where('name', '=', author).first()
        .then(author => {
            return knex('quotes').insert({
                text: quote,
                authorId: author.id
            });
        });
}