const orm = require("../config/orm");

var burger = {
  all: function() {
    return new Promise(async (resolve,reject) => {
      try {
        const results = await orm.selectAll("burgers");
        resolve(results);
      }
      catch (e) {
        reject(e);
      }
    });
  },
  create: function(burger) {
    return new Promise(async (resolve,reject) => {
      try {
        const outcome = await orm.insertOne("burgers",burger);
        resolve(outcome);
      }
      catch (e) {
        reject(e);
      }
    });
  },
  update: function(id) {
    return new Promise(async (resolve,reject) => {
      try {
        const outcome = await orm.updateOne("burgers","devoured","1","id",id);
        resolve(outcome);
      }
      catch (e) {
        reject(e);
      }
    });
  }
};

module.exports = burger;