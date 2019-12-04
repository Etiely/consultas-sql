const db = require('./_dataBase.js')

async function listData () {
    await db.connect()
    var result

    // LISTA DE CIDADES
    result = await db.query("SELECT * FROM cidades")
    console.log("Cidades: ")
    console.log(result.rows)

    // LISTA DE EMPRESAS
    result = await db.query("SELECT * FROM empresas")
    console.log("Empresas: ")
    console.log(result.rows)

    // LISTA DAS UNIDADES DAS EMPRESAS
    result = await db.query("SELECT e.nome as empresa, c.nome as cidade, ue.sede FROM empresas e inner join empresas_unidades ue on e.id_empresa=ue.id_empresa inner join cidades c on ue.id_cidade=c.id_cidade ")
    console.log("Unidades das empresas: ")
    console.log(result.rows)

    await db.end()
}

listData()