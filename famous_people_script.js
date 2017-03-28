const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const famous_people = (callback) => {
  client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
    client.query("SELECT * FROM famous_people WHERE first_name = $1", [process.argv[2]], (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      callback(result.rows[0]);
      client.end();
    });
  });
};

famous_people(function(arg){
  console.log(arg);
});