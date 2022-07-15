"use strict";
const hashtags = [];
const img = [];

const snip = (req, res) => {
  const snippets = JSON.parse(JSON.stringify(req.body));
  for (let i = 0; i < snippets.length; i++) {
    let idx = snippets[i].description.indexOf('\n');
    let substr = snippets[i].description.slice(0, idx);
    let hashtag = substr.split('#');
    let image = snippets[i].thumbnails.default.url;
    img.push(image);
    hashtag.splice(0, 1);

    for (let i = 0; i < hashtag.length; i++) {
      hashtag[i] = hashtag[i].trim();
    }

    // console.log(hashtag); // 왜 빈문자열이 추가 되는거지?
    hashtags.push(hashtag);
  }
};

const vid = (req, res) => {
  const Star_Names = ["손흥민", "김하성", "최지만", "박효준", "이강인", "황의조", "류현진", "권순우"];
  const videos = JSON.parse(JSON.stringify(req.body));
  const Star_Obj = [];

  for (let i = 0; i < Object.keys(videos).length; i++) {
    for (let j = 0; j < Star_Names.length; j++) {

      if (hashtags[i].includes(Star_Names[j])) {
        let obj = {};
        obj["Name"] = Star_Names[j];
        obj["Title"] = Object.keys(videos)[i];
        obj["Link"] = Object.values(videos)[i];
        obj["Image"] = img[i];
        // console.log("name : " + Star_Names[j]);
        // console.log("Title : " + Object.keys(videos)[i]);
        // console.log("Link : " + Object.values(videos)[i]);

        Star_Obj.push(obj);
        break;
      }
    }
  }
  Db(Star_Obj);

};

const Db = (Star_Obj) => {
  const mysql = require('./db');
  const con = mysql.init();

  mysql.db_open;

  const info = Star_Obj;

  const sql = 'INSERT INTO Youtube_Test(Name, Title, Link, Image) VALUES(?,?,?,?)';

  for (let i = 0; i < info.length; i++) {
    let params = [info[i]['Name'], info[i]['Title'], info[i]['Link'], info[i]['Image']];
    con.query(sql, params, function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        console.log(rows);
      }
    });
  };

  con.end();

};

module.exports = { snip, vid };