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
    start()
})

function start() {
    inquirer
        .prompt([{
            name: "start",
            type: "list",
            message: "What would you like to do?",
            choices: ["View All Employees",
                "View All Employees By Department",
                "View All Employees By Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "Done"
            ]

        }])
        .then(function(answer) {
            switch (answer.action) {
                case "View All Employees":
                    employeeData();
                    break;

                case "View All Employees By Department":
                    employeeDep();
                    break;

                case "View All Employees By Manager":
                    employeeMgr();
                    break;

                case "Add Employee":
                    employeeAdd();
                    break;

                case "Remove Employee":
                    employeeRemove();
                    break;

                case "Update Employee Role":
                    employeeUpdateRole();
                    break;

                case "Update Employee Manager":
                    employeeUpdateMgr();
                    break;

                case "Done":
                    connection.end();
                    break;
            }
        })
}