const express = require('express')
const app = express();
const path = require('path');
const config = require('config');
const cors = require('cors');


app.use(cors())

app.use('/api/wifiinfo', require('./routers/getAllTituls')); // all
app.use('/api/wifiinfo', require('./routers/getBraginTituls')); // bragin
app.use('/api/wifiinfo', require('./routers/getBudaTituls')); // buda
app.use('/api/wifiinfo', require('./routers/getChecherskTituls')); // chechersk
app.use('/api/wifiinfo', require('./routers/getDobrushTituls')); // dobrush
app.use('/api/wifiinfo', require('./routers/getElskTituls')); // elsk
app.use('/api/wifiinfo', require('./routers/getGomelTituls')); // gomel
app.use('/api/wifiinfo', require('./routers/getGomelZuesTituls')); //gomelzues
app.use('/api/wifiinfo', require('./routers/getHoinikiTituls')); // hoiniki
app.use('/api/wifiinfo', require('./routers/getJitkovichiTituls')); // jitkovichi
app.use('/api/wifiinfo', require('./routers/getJlobinTituls')); // jlobin
app.use('/api/wifiinfo', require('./routers/getKalinkovichiTituls')); // kalinkovichi
app.use('/api/wifiinfo', require('./routers/getKormaTituls')); // korma
app.use('/api/wifiinfo', require('./routers/getLelchiciTituls')); // lelchici
app.use('/api/wifiinfo', require('./routers/getLoevTituls')); // loev
app.use('/api/wifiinfo', require('./routers/getMozirTituls')); // mozir
app.use('/api/wifiinfo', require('./routers/getNarovlyaTituls')); // narovlya
app.use('/api/wifiinfo', require('./routers/getOctoberTituls')); // october
app.use('/api/wifiinfo', require('./routers/getPetrikovTituls')); // petrikov
app.use('/api/wifiinfo', require('./routers/getRechicaTituls')); // rechica
app.use('/api/wifiinfo', require('./routers/getRogachevTituls')); // rogachev
app.use('/api/wifiinfo', require('./routers/getSvetlogorskTitul')); // svetlogorsk
app.use('/api/wifiinfo', require('./routers/getVetkaTituls')); // vetka



app.use('/', express.static(path.join(__dirname, 'client', 'dist')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
})


const PORT = config.get('port') || 4000

app.listen(PORT);

