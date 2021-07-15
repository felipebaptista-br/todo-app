const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";
const dbName = "to-do-db";
const client = new MongoClient(url, { useUnifieldTopology: true });

var _db;
function connectToDB(callback) {
  client.connect(function (err) {
    console.log("conected sucessfully to server");
    _db = client.db(dbName);
    callback(err);
  });
}

const findDocuments = async () => {
  const collection = _db.collection("to-do-collection");
  try {
    const results = await collection.find({}).toArray();
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

const insertDocuments = async (document) => {
  const collection = _db.collection("to-do-collection");
  try {
    const results = await collection.insertOne(document);
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

const updateDocuments = async (document) => {
  const collection = _db.collection("to-do-collection");
  try {
    const results = await collection.updateOne(
      { _id: document._id },
      { $set: document }
    );
  } catch (error) {
    throw new Error(error);
  }
};

const removeDocuments = async (document) => {
  const collection = _db.collection("to-do-collection");
  try {
    const results = await collection.deleteOnde({ _id: document._id });
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  connectToDB,
  findDocuments,
  insertDocuments,
  updateDocuments,
  removeDocuments,
};
