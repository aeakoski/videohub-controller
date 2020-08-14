const express = require('express');

const BLACKMAGIC_IP = "192.168.1.90";
const BLACKMAGIC_PORT = "9990";

const Router = require('./router')

// TODO
// - Add reconnect button to client
// - Refactor router
// - Remove router package
// - Add dist folder servng

var _router = new Router({host: BLACKMAGIC_IP, port: BLACKMAGIC_PORT});

const app = express(),
      bodyParser = require("body-parser");
      port = 4808;

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/client/dist/blackmagic-videohub/"));


app.get('/api/set', (req, res) => {
  _router.route(req.query.dst, req.query.src);

  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
  res.status(200);
  res.json({status:"ok"});
});

app.get('/api/reconnect', (req, res) => {
  _router.connect(BLACKMAGIC_IP, BLACKMAGIC_PORT);

  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
  res.status(200);
  res.json({status:"ok"});
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/client/dist/blackmagic-videohub/index.html")
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
