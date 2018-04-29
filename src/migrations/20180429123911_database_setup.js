exports.up = knex => {
    return knex.schema
        .createTable('authors', table => {
            table.increments('id').primary();
            table.string('name');
        })
        .createTable('quotes', table => {
            table.increments('id').primary();
            table
                .integer('authorId')
                .unsigned()
                .references('id')
                .inTable('authors');
            table.string('text');
        });
};

exports.down = knex => {
    return knex.schema
        .dropTableIfExists('quotes')
        .dropTableIfExists('authors');
};