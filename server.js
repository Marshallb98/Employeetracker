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
    console.log("connected!")
    start()
})

function start() {
    inquirer
        .prompt([{
            name: "start",
            type: "list",
            message: "What would you like to do?",
            choices: ["View All Employees",
                "View all Departments",
                "View all Roles",
                "Add Employee",
                "Add Department",
                "Add Role",
                "Update Employee Role",
                "Done"
            ]

        }])
        .then(function (answer) {
            switch (answer.start) {
                case "View All Employees":
                    employeeData();
                    break;

                case "View all Departments":
                    employeeDep();
                    break;

                case "View all Roles":
                    employeeRole();
                    break;

                case "Add Employee":
                    employeeAdd();
                    break;

                case "Add Department":
                    employeeAddDep();
                    break;

                case "Add Role":
                    employeeAddRole();
                    break;

                case "Update Employee Role":
                    employeeUpdateRole();
                    break;


                case "Done":
                    connection.end();
                    break;
            }
        })
}

function employeeData() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title, department.name, role.salary FROM employee INNER JOIN role ON (employee.role_id = role.id) LEFT JOIN department ON (role.department_id = department.id)", function (err, res) {
        if (err) throw err;
        console.log("employee data!")
        console.table(res);
        start();
    })
}

function employeeDep() {
    connection.query("SELECT * FROM employee_db.department", function (err, res) {
        if (err) throw err;
        console.log("employee departments!")
        console.table(res);
        start();
    })
}

function employeeRole() {
    connection.query("SELECT * FROM employee_db.role", function (err, res) {
        if (err) throw err;
        console.log("employee roles!")
        console.table(res);
        start();
    })
}

function employeeAdd() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your employees first name?',
            name: "first_name"
        },
        {
            type: 'input',
            message: 'What is your employees last name?',
            name: "last_name"
        },
        {
            type: 'input',
            message: 'What role does your employee belong to? Enter role ID',
            name: "role"
        }
    ])
    .then(function(answer) {
        console.log(answer)
        connection.query("INSERT INTO employee SET ?", {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role,
        }, function(err) {
            if (err) throw (err)
            console.log("Employee Added!")
            start();
        })
    })
}

