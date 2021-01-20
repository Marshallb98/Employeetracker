const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table")
const cfonts = require("cfonts")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Iammarshall$70",
    database: "employee_db"
})

connection.connect(function (err) {
    if (err) throw err;
})