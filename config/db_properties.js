module.exports = {
  host: "sql.freedb.tech",
  user: "freedb_omega",
  password: "Qa5H9r@qzc*pkNR",  // Updated password
  dbName: "freedb_digihal",   // This was already correct
  dialect: "mysql",
  port: 3306,  // Added the port based on your credentials
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// module.exports = {
//   host:"digihal-db.cydpvtg1mc9v.ap-south-1.rds.amazonaws.com",
//   user:"admin",
//   password:"Omega7809",
//   dbName:"digihal",
//     dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };
// module.exports = {
//   host:"127.0.0.1",
//   port:"3306",
//   user:"root",
//   password:"Omega@7809",
//   dbName:"digihal",
//     dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };