const Model = require('objection').Model;

class Quote extends Model {
    static get tableName() {
        return 'quotes';
    }

    static get relationMappings() {
        return {
            author: {
                relation: Model.BelongsToOneRelation,
                // to not create a require loop
                modelClass: __dirname + '/Author',
                join: {
                    from: 'quotes.authorId',
                    to: 'authors.id'
                }
            }
        };
    }
}

module.exports = Quote;