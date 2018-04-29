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
        });
};

exports.down = knex => {
    return knex.schema
        .dropTableIfExits('authors')
        .dropTableIfExits('quotes');
};