const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

const dbName = "to-do-db";
const client = new MongoClient(url, { useUnifieldTopology: true });

client.connect(function (err) {
  assert.equal(null, err);
  console.log("conected sucessfully to server");

  const db = client.db(dbName);

  client.close();
});
