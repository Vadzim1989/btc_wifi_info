const express = require('express');
const db = require('odbc');
const cs = require('config').get('informixURL');
const services = require('config').get('services');

const router = express.Router();

async function querySelect() {
    const connection = await db.connect(cs);
    const result = await connection.query(`select   d.nam zues,
                                                    a.ab_code, 
                                                    wastup:getabfullname(a.ab_code) firm_name, 
                                                    b.pay_num unp, 
                                                    a.amount count,
                                                    c.serv_id_code,
                                                    c.serv_name,
                                                    a.phone
                                            from    ratsg:a14 a,
                                                    ratsg:a2 b,
                                                    ratsg:a10 c,
                                                    ratsg:s01 d
                                            where   a.ab_code = b.ab_code
                                            and     a.serv_id_code = c.serv_id_code
                                            and     a.amount > 0
                                            and     a.ext_rek = 5
                                            and     substr(a.ab_code,1,2) = 39
                                            and     substr(a.ab_code,1,2) = d.kod
                                            and     d.kodi = "S112"
                                            and     c.serv_id_code in (${services})
                                            group by 1,2,3,4,5,6,7,8
                                            order by 1,2,3,4,5,6,7,8`);
    await connection.close();
    return result;
}

async function getResult() {
    let queryResult = await querySelect();
    return queryResult;
}


router.get('/rogachev', async (req, res) => {
    const result = await getResult();
    res.json(result);
})

module.exports = router;