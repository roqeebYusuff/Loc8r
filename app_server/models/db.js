const mongoose = require('mongoose');
const readLine = require ('readline');

// if (process.platform === 'win32'){
//     const rl = readLine.createInterface ({
//         input: process.stdin,
//         output: process.stdout
//     });

//     rl.on ('SIGINT', () => {
//         process.emit ("SIGINT");
//     });
// }
// MLAB_URI ----- mongodb://roqeeb:roqeebyusuff@ds059957.mlab.com:59957/loc8r
// const dbURI = process.env.MONGO_DB_URI || 'mongodb+srv://roqeeb:roqeebyusuff@cluster0.fokuz.mongodb.net/Loc8r?retryWrites=true&w=majority';
const dbURI = 'mongodb://localhost/Loc8r';
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