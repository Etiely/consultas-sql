const db = require('./_dataBase.js')

async function insertData () {
    await db.connect()

    const queryEmpresas = "INSERT INTO empresas (nome, cnpj) VALUES ($1, $2)"
    await db.query(queryEmpresas, ['Kbase', 23232323])
    await db.query(queryEmpresas, ['Kbase2', 98989898])
    await db.end()
    console.log('Dados inseridos')
}

async function insertData2 () {
    await db.connect()

    const queryCidades = "INSERT INTO cidades (nome) VALUES ($1)"
    await db.query(queryCidades, ['Cuiaba'])
    await db.query(queryCidades, ['Canoas'])
    await db.query(queryCidades, ['São Paulo'])

    await db.end()
    console.log('Dados inseridos')
}


    async function insertData3 () {
    await db.connect()

    const queryEmpresasUnidades = "INSERT INTO empresas_unidades (id_empresa, id_cidade, sede) VALUES ($1, $2, $3)"
    await db.query(queryEmpresasUnidades, [1, 2, 34])
    await db.query(queryEmpresasUnidades, [2, 3, 45])
    await db.query(queryEmpresasUnidades, [2, 1, 42])
    
    await db.end()
    console.log('Dados inseridos')
    }

insertData3()