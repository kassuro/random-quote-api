# random-quote-api

This is my take on a random quote api.
The whole idea came from the fact that I didn't find any good API for the random quotes project from FreeCodeCamp.
Most of the APIs are a pain to use, so I hope this one may help with this!

## Quotes
The project ships with a JSON file containg 1500+ quotes.

This file is used for seeding the database.

Big thanks for collecting the quotes to [4skinSkywalker - Github Project](https://github.com/4skinSkywalker/Database-Quotes-JSON).


## Setup

For setting everything up:

```
npm install
```

Running migrations for database setup
```
npm run migrate
```

Seeding the database afterwards
```
npm run seed
```
And you're ready to go!


## Furthor plans

* making the API public usable 
* adding docker file for easy deployment
* who knows!