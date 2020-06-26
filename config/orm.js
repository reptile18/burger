const connection = require("./connection");

const orm = {
  selectAll: function(table) {
    return new Promise((resolve,reject) => {
      connection.query("SELECT * FROM ??",[table],(error,result) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  },
  insertOne: function(table,burger) {
    return new Promise((resolve,reject) => {
      connection.query("INSERT INTO ?? SET ?",[table,burger],(error,result) => {
        if (error) reject(error);
        console.log(result);
        resolve(result);
      });
    });
  },
  updateOne: function(table,column,value,identifier_column,identifier_value) {
    console.log("table", table);
    console.log("column",column);
    console.log("value",value);
    console.log("identifier_column",identifier_column);
    console.log("identifier_value", identifier_value);
    return new Promise((resolve,reject) => {
      connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?",[table,column,value,identifier_column,identifier_value],(error,result) => {
        if (error) reject(error);
        console.log(result);
        resolve(result);
      });
    });
  }
}

module.exports = orm;