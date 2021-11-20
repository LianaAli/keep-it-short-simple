import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
import KissDAO from './dao/kissDAO.js';

dotenv.config();

const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 5000;

MongoClient
.connect(
    process.env.KISS_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
)
.catch(err => {
    console.error(err.stack);
    process.exit(1);
})
.then(async client => {
    await KissDAO.injectDB(client);

    app.listen(port, () => {
        console.log(process.env.KISS_APPNAME + ' is listening on port ' + port);
    })
})