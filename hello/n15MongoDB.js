var MongoClient = require('mongodb').MongoClient
    , assert = require('assert')
    , url = 'mongodb://localhost:27017/test'
    , async = require('async');

async.waterfall(
    [
        // Connect DB
        function (callback) {
            MongoClient.connect(url, function (err, db) {
                callback(null, db);
            });
        },
        // Insert a document to 'mytable'
        function (db, callback) {
            db.collection('mytable').insertOne({
                "abc": 123
            }, function (err, result) {
                callback(null, db);
            });
        },
        // Find the documents from 'mytable'
        function (db, callback) {
            var cursor = db.collection('mytable').find();
            cursor.each(function (err, doc) {
                if (doc != null) {
                    console.dir(doc);
                } else {
                    db.close();
                    callback(null);
                }
            });
        }
    ], function (err) {
       console.log('Done!');
    });

console.log('running...');
