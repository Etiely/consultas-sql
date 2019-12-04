const pg = require('pg')

const cliente = new pg.Client({
    user: 'dodo',
    host: '69.171.4.30',
    database: 'talentos7',
    password: 'talentos2019',
    port: 5432
}) ;

module.exports = cliente