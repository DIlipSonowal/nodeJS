//+++++++++++++++++++++++++++++++++
//Create a new MongoClient Instance
//+++++++++++++++++++++++++++++++++
const MongoClient = require("mongodb").MongoClient;
//+++++++++++++++++++++++++++++++++
//Create a new ObjectId Instance
//+++++++++++++++++++++++++++++++++
const ObjectId = require("mongodb").ObjectID;
//+++++++++++++++++++++++++++++++++
//Database name
//+++++++++++++++++++++++++++++++++
const dbname = "curd_db";
const url = "mongodb://localhost:27017";
//+++++++++++++++++++++++++++++++++
//Mongo options
//+++++++++++++++++++++++++++++++++
const mongoOptions = {useNewUrlParser : true, useUnifiedTopology: true};

const state = {
    db: null
};

const connect = (cb) => {
    if(state.db){
      cb();
    }else{
        MongoClient.connect(url, mongoOptions, (err, client)=>{
            if(err){
                cb(err);
            }else {
                state.db = client.db(dbname);
                cb();
            }
        })
    }  
}

const getPrimaryKey = (_id) =>{
    return ObjectId(_id);
}

const getDB = ()=>{
    return state.db;
}

module.exports = {getDB, connect, getPrimaryKey};

