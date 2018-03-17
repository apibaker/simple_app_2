
const apibaker = require('apibaker');
const dbAdapter = apibaker.pg_adapter;
const execaction = apibaker.execaction;
const prepareInput = execaction.prepareInput;
const execAction = execaction.execAction;

module.exports = function(param, conn, succ, err) {
  var actionName = "main_CreateEnt";
  var actionType = "Create";
  var entName = "main_Ent";
  
  var input = prepareInput(param, actionType, entName);
  
  var dbObj = [
 {
  "cmd": "SET SEARCH_PATH TO  simple_app ,public ;\n",
  "inFrom": true,
  "inSize": true,
  "inParam": [],
  "outResult": [],
  "outMultiple": true,
  "outQuery": true
 },
 {
  "cmd": "INSERT INTO main_Ent (Prop1) VALUES  ($1)  RETURNING main_EntId ",
  "inParam": [
   [
    1,
    "String",
    "Prop1",
    "",
    -1
   ]
  ],
  "outResult": [
   [
    1,
    "Id",
    "main_EntId",
    "main_EntId",
    null
   ]
  ],
  "outInsertId": true
 }
];
  execAction(input, dbObj, succ, err, dbAdapter, conn);
}
