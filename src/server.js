const express = require('express');
const mysql = require('mysql');
var cors = require('cors');
const bodyParser = require("body-parser");

const connection = mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'huscii'
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.options('*', cors())

app.get('/', cors(), function (req, res) {
  connection.getConnection(function(error, connection) {
    connection.query('SELECT * FROM inventory', function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
  });
});

app.post('/add', cors(), function (req, res) {
  var sql = `INSERT INTO Inventory (product_name, stock, description, img)
             Values ("${req.body.product_name}", ${req.body.stock}, "${req.body.description}", "${req.body.img}");`;
  connection.getConnection(function(error, connection) {
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
  });
});

app.post('/delete', cors(), function (req, res) {
  var sql = `DELETE FROM inventory WHERE ProductID = ${req.body.productID};`;
  connection.getConnection(function(error, connection) {
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
  });
});

app.post('/edit', cors(), function (req, res) {
  var sql = `UPDATE inventory SET stock = ${req.body.stock} WHERE ProductID = ${req.body.productID};`;
  connection.getConnection(function(error, connection) {
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
  });
});

app.listen(3001, () => {
  console.log('localhost is running');
})
