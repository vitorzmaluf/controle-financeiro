const app = require('express')();
const port = 3000;
const bodyParser = require('body-parser');

app.listen(port, (req, res) => {
    console.log('Servidor Rodando');
});

app.use(bodyParser.json());

app.use('/api', require('./router/index'));