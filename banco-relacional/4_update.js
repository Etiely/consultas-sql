
const db = require('./_dataBase.js')

async function updateData (nome, id_empresa) {
    await db.connect()

    const queryEmpresas = "UPDATE empresas SET nome = ($1) WHERE id_empresa = ($2)";

    await db.query(queryEmpresas, ['Kbase5', 1])
    await db.end()
    console.log("Atualizado!")
    }

updateData()