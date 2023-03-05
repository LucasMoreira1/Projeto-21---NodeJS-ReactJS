const sql = require("mysql")
const dotenv = require("dotenv").config();
const db = sql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

const pool = sql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
  });
  
  // ... later
  pool.query('select 1 + 1', (err, rows) => { /* */ });

module.exports = db;

// var db_config = {
//     host: '108.167.132.199',
//     user: 'soluc963_AGILITY_ADM',
//     password: 'd6o4aVt~%4$}',
//     database: 'soluc963_IMPOSTO_DE_RENDA'
//   };
  
//   var connection;
  
//   function handleDisconnect() {
//     connection = mysql.createConnection(db_config); // Recreate the connection, since
//                                                     // the old one cannot be reused.
  
//     connection.connect(function(err) {              // The server is either down
//       if(err) {                                     // or restarting (takes a while sometimes).
//         console.log('error when connecting to db:', err);
//         setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//       }                                     // to avoid a hot loop, and to allow our node script to
//     });                                     // process asynchronous requests in the meantime.
//                                             // If you're also serving http, display a 503 error.
//     connection.on('error', function(err) {
//       console.log('db error', err);
//       if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//         handleDisconnect();                         // lost due to either server restart, or a
//       } else {                                      // connnection idle timeout (the wait_timeout
//         throw err;                                  // server variable configures this)
//       }
//     });
//   }
  
//   handleDisconnect();