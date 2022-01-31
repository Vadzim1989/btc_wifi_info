const express = require('express');
const db = require('odbc');
const cs = require('config').get('informixURL');
const name = require('config').get('tableName');

const router = express.Router();

async function querySelect() {
    const connection = await db.connect(cs);
    const statement = await connection.createStatement();
    await statement.prepare(`select * from gomel:${name} where zues = "БУДА-КОШЕЛЕВСКИ" order by id_adr`);
    const result = await statement.execute();
    return result;
}

async function getResult() {
    let queryResult = await querySelect();
    return queryResult;
}


router.get('/buda', async (req, res) => {
    const result = await getResult();
    res.json(result);
})

module.exports = router;