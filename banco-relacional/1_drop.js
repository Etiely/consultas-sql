const db = require('_dataBase')

async function dropTables () {
    await db.connect()
    await query('DROP TABLE estados CASCADE')
    await query('DROP TABLE cidades CASCADE')
    await query('DROP TABLE empresas CASCADE')
    await query('DROP TABLE empresas_unidades CASCADE')
    await query('DROP TABLE prefeitos CASCADE')

    await end()

    console.log('Tabelas removidas')   
}

dropTables()