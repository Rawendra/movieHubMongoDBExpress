const mongoDB = require("mongodb");
const { MongoClient } = mongoDB;
const [username, password] = [];
const url = `mongodb+srv://${username}:${password}@sandbox.daqr5.mongodb.net/sample_mflix?retryWrites=true&w=majority`;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then((client) => {
      _db = client.db();
      callback();
    })
    .catch((err) => console.log(err));
};

const getDB = () => {
  if (!_db) {
    throw "no database found";
  }
  return _db;
};

exports.mongoConnect =  mongoConnect
exports.getDB  =  getDB  
