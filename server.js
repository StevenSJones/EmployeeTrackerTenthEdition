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
        ViewAllEmployees();
        start();
      } else if (response.prompt === "View All Departments") {
        ViewAllDepartments();
        start();
      } else if (response.prompt === "View All Employees By manager") {
        ViewByManager();
        start();
      } else if (response.prompt === "Add An Employee") {
        AddEmployee();
        start();
      } else if (response.prompt === "Remove An Employee") {
        RemoveEmployee();
        start();
      } else if (response.prompt === "Update An Employee Role") {
        UpdateRole();
        start();
      } else if (response.prompt === "Update An Employee Manager") {
        UpdateManager();
        start();
      } else if (response.prompt === "View All Roles") {
        ViewRoles();
        start();
      } else if (response.prompt === "Add A Role") {
        AddRole();
        start();
      } else if (response.prompt === "Remove A Role") {
        RemoveRole();
        start();
      } else if (response.prompt === "View All departments") {
        Viewdepartments();
        start();
      } else if (response.prompt === "Add A Department") {
        AddDepartment();
        start();
      } else if (response.prompt === "Remove A Department") {
        RemoveDepartment();
        start();
      } else {
        Quit();
      }
    });
}
//View All Employees function definition
const ViewAllEmployees = function () {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//View All Departments function definition
const ViewAllDepartments = function () {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//View All Roles function definition
const ViewByManager = function () {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
