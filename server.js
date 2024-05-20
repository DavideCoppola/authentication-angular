const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();
const router = jsonServer.router("./db.json");

server.use(middleware);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  next();
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON server listening on port 3000');
});

