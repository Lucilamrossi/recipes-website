require('dotenv').config();

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, PORT, API_KEY_NUMBER} = process.env;

module.exports = {
    dbUser: DB_USER,
    dbPassword: DB_PASSWORD,
    dbHost: DB_HOST,
    dbName: DB_NAME,
    port: PORT,
    apiKeyNumber: API_KEY_NUMBER
}