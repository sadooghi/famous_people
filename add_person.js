const settings = require("./settings"); // settings.json
const knex = require('knex')({
  client:'pg',
  connection: {
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
  }
});

const add_famous_people = (callback) => {

  knex('famous_people')
    .insert({first_name: process.argv[2], last_name: process.argv[3], birthdate: process.argv[4]} )
    .then(function(result) {
      callback(result);
      knex.destroy();
    });

};

add_famous_people(function(arg){
  console.log(arg);
});