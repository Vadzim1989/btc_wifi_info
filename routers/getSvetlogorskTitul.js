const express = require('express');
const db = require('odbc');
const cs = require('config').get('informixURL');
const name = require('config').get('tableName');

const router = express.Router();

async function querySelect() {
    const connection = await db.connect(cs);
    const statement = await connection.createStatement();
    await statement.prepare(`select * from gomel:${name} where zues = "СВЕТЛОГОРСКИЙ" order by id_adr`);
    const result = await statement.execute();
    await statement.close();
    await connection.close();
    return result;
}

async function getResult() {
    let queryResult = await querySelect();
    return queryResult;
}


router.get('/svetlogorsk', async (req, res) => {
    const result = await getResult();
    res.json(result);
})

module.exports = router;