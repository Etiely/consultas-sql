const db = require('./_dataBase.js')

async function deleteData () {
    await db.connect()

    const queryEmpresasUnidades = "DELETE FROM empresas_unidades ue WHERE ue.id_cidade IN (SELECT c.id_cidade FROM cidades c WHERE c.nome ILIKE 'c%');"
    await db.query(queryEmpresasUnidades);
    await db.end()
    console.log("Deletado!")
    }

deleteData()