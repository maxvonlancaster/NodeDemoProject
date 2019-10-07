const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true });

class Repository {
    create(collectionName, doc) {
        mongoClient.connect(function (err, client) {
            if (err) {
                return console.log(err);
            }
            const db = client.db();

            client.close();
        });
    }

    readCollection(name){
        mongoClient.connect(function (err, client) {
            if (err) {
                return console.log(err);
            }

            client.close();
        });
    }
    
    readCollections(){
        let res = null;

        mongoClient.connect(function (err, client) {
            if (err) {
                return console.log(err);
            }
            const db = client.db("tests");
            const collection = db.collection("tests");
            res = collection.find({}).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                    res = result;
                }
            });
        });

        console.log("RESULTS: " + res);

    }

    update(collectionName, doc){
        mongoClient.connect(function (err, client) {
            if (err) {
                return console.log(err);
            }

            client.close();
        });
    }

    delete(collectionName, doc){
        mongoClient.connect(function (err, client) {
            if (err) {
                return console.log(err);
            }

            client.close();
        });
    }
}

module.exports = Repository;