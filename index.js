const app = require('./app')
const hostname = '127.0.0.1';
const port = 8000;
app.listen(port, hostname);
console.log('Serveur running at http://' + hostname + ':' + port);