const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table")

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

function employeeAddDep() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your new department name?',
            name: "department"
        }
    ])
    .then(function(answer) {
        console.log(answer)
        connection.query("INSERT INTO department SET ?", {
            name: answer.department
        }, function(err) {
            if (err) throw (err)
            console.log("Department Added!")
            start();
        })
    })
}

function employeeAddRole() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your new role name?',
            name: "role"
        },
        {
            type: 'input',
            message: 'What is the roles salary?',
            name: "salary"
        },
        {
            type: 'input',
            message: 'What is the department ID of this role?',
            name: "department_id"
        }
        
    ])
    .then(function(answer) {
        console.log(answer)
        connection.query("INSERT INTO role SET ?", {
            title: answer.role,
            salary: answer.salary,
            department_id: answer.department_id
        }, function(err) {
            if (err) throw (err)
            console.log("Role Added!")
            start();
        })
    })
}

function employeeUpdateRole() {
        inquirer
            .prompt([
                {
                    name: "id",
                    type: "input",
                    message: "Please enter ID of employee whose role you would like to change",
                },
                {
                    name: 'roleID',
                    type: 'input',
                    message: "Please enter the ID of the Role you would like to assign to employee",
                },
            ])
            .then(function (answer) {
                connection.query(
                    "UPDATE employee SET role_id = ? WHERE id = ? ",
                    [answer.roleID, answer.id],

                    function (err) {
                        if (err) throw err;

                        console.log("Updated Employees Role!");
                        start();
                    }
                );
            })
    }

