// Update with your config settings.

module.exports = {

    development: {
        client: 'mariasql',
        connection: {
            host : '172.17.0.2',
            user : 'root',
            password : 'test',
            db : 'test'
        },
        useNullAsDefault: true
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};