const mongoose = require('mongoose');
const readLine = require ('readline');

let dbURI = process.env.LOCAL_URI;
if(process.env.NODE_ENV === 'production')
{
    dbURI = process.env.MONGODB_URI
}

// console.log(`The path`, dbURI);

mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', () =>{
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err =>{
    console.log('Mongoose Connection error:', err);
});

mongoose.connection.on('disconnected', () =>{
    console.log(`Mongoose disconnected`);
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

// For nodemon restarts
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
    });
});

// For app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

// For Heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

require('./locations');