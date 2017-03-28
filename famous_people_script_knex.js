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


const famous_people = (callback) => {

knex.select().from('famous_people').where('first_name', process.argv[2]).then(function(result) {
  callback(result);
  knex.destroy();
});

};

famous_people(function(arg){
  console.log(arg);
});