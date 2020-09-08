//importing my node modules
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

//connection for my server
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employees",
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch(); //the init function being CALLED
});

//my function definition for my init function

function runSearch() {
  inquirer
    .prompt({
      name: "prompt",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By department",
        "View All Employees By manager",
        "Add An Employee",
        "Remove An Employee",
        "Update An Employee Role",
        "Update An Employee Manager",
        "View All Roles",
        "Add A Role",
        "Remove A Role",
        "View All departments",
        "Add A Department",
        "Remove A Department",
        "Quit",
      ],
      //.then to handle the response
    })
    .then(function (response) {
      console.log(response);
      if (response.prompt === "View All Employees") {
        viewAllEmployees(); //calling the ViewAllEmployees()
        start();
      } else if (response.prompt === "View Employees By Department") {
        viewEmployeeByDepartment();
        start();
      } else if (response.prompt === "View All Employees By manager") {
        viewEmployeeByManager();
        start();
      } else if (response.prompt === "Add An Employee") {
        addEmployee(); //calling the AddEmployee()
        start();
      } else if (response.prompt === "Remove An Employee") {
        removeEmployee(); //calling the removeEmployee()
        start();
      } else if (response.prompt === "Update An Employee Role") {
        updateEmployeeRole();
        start();
      } else if (response.prompt === "Update An Employee Manager") {
        updateEmployeeManager();
        start();
      } else if (response.prompt === "View All Roles") {
        viewAllRoles(); //calling the ViewAllRoles()
        start();
      } else if (response.prompt === "Add A Role") {
        addRole(); //calling the AddRole()
        start();
      } else if (response.prompt === "Remove A Role") {
        removeRole();
        start();
      } else if (response.prompt === "View All departments") {
        viewAllDepartments(); //calling the ViewAllDepartments()
        start();
      } else if (response.prompt === "Add A Department") {
        addDepartment(); //calling the AddDepartment()
        start();
      } else if (response.prompt === "Remove A Department") {
        removeDepartment();
        start();
      } else {
        Quit();
      }
    });
}
//view
//View All Employees function definition
const viewAllEmployees = function () {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//View All Departments function definition
const viewAllDepartments = function () {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//View All Roles function definition
const viewAllRoles = function () {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};

//add
//addEmployee function definition
const addEmployee = function () {
  connection.query("     ", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//addRole function definition
const addRole = function () {
  connection.query("     ", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//addDepartment function definition
const addDepartment = function () {
  connection.query("     ", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//delete
//removeEmployee function definition
const removeEmployee = function () {
  connection.query("     ", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
