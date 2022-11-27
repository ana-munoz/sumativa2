const mongoose = require('mongoose');

const {

const MONGO_USERNAME,
const MONGO_PASSWORD,
const MONGO_HOSTNAME,
const MONGO_PORT,
const MONGO_DB
} = process.env;

const optiones = {
 userNewUrlParser: true,
 reconnectTries: Number.MAX_VALUE,
 reconnectInterval: 500,
 connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, options).then(function(){
 console.log('MongoDB ir connected');

})
 .catch( function(err) {
 console.log(err);
}
