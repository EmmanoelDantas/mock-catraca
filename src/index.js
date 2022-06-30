const express = require('express');
const {ENV_CONFIG} = require('./config');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(router);

const PORT = ENV_CONFIG.PORT;

app.listen(PORT, () => {
    console.log(`Servidor Mock da catraca na porta: ${PORT}`);
})