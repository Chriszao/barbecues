const jsonServer = require('json-server');
const auth = require('json-server-auth');

const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  static: './build',
});

app.db = router.db;

app.use(middlewares);
app.use(auth);
app.use(router);
app.listen(3333, () => console.log('App listening on port 3333'));