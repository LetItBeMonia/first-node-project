require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    databaseURL: process.env.DATABASE || 'mongodb://localhost:27017/node-kurs',
    email: 'mojemail@kontakt.pl',
    sessionKeySecret: process.env.SESSION_KEY_SECRET
};