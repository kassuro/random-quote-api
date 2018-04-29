const Model = require('objection').Model;
const Quote = require('./Quote');

class Author extends Model {
    static get tableName() {
        return 'authors';
    }

    static get relationMappings() {
        return {
            quotes: {
                relation: Model.HasManyRelation,
                modelClass: Quote,
                join: {
                    from: 'authors.id',
                    to: 'quotes.authorId'
                }
            }
        };
    }
}

module.exports = Author;