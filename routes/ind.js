"use strict";

const db = (req, res) => {
  const mysql = require('./db')();
  const connection = mysql.init();

  mysql.db_open(connection);

  // const info = ;

  const sql = 'INSERT INTO Youtube(name, title, link) VALUES(?,?,?)';
  const params = [info['name'], info['title'], info['link']];
  for (let i = 0; i < info.length; i++)
    con.query(sql, params, function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        console.log(rows.name);
      }
    });

  con.end();
};

