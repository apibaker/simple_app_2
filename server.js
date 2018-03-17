
  
const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = express.Router();

const apibaker = require('apibaker');
const dbAdapter = apibaker.pg_adapter;
const database = require('./database.js');
const dbconn = dbAdapter.connect("simple_app", database);


var main_CreateEnt = require("./action/act_main_CreateEnt.js");

var main_ReadEnt = require("./action/act_main_ReadEnt.js");



router.put('/main/ent', function(req, resp) {
    var param = {};
    param.id = req.params.id;
    param.obj = req.body.obj;
    main_CreateEnt (param, dbconn, function(res){
      resp.json(res);
    }, function(error){
      resp.status(500);
      resp.json(error);
    })
});

router.get('/main/ent/:id', function(req, resp) {
    var param = {};
    param.id = req.params.id;
    param.obj = req.body.obj;
    main_ReadEnt (param, dbconn, function(res){
      resp.json(res);
    }, function(error){
      resp.status(500);
      resp.json(error);
    })
});


app.use('/api', router);

app.listen(port);

