exports.queryWord= function(word, res){
  const mysql = require('mysql');
  
  var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'entries'
  });
    
  con.connect(function (err) {
    if (err) throw err;
  });
  
    var sql = `SELECT wordtype, definition FROM entries where word= '${word}'`;
    con.query(sql, function (err, data) {
      if (err) throw err;
      res.json(data);
    });
}