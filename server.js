//importing my node modules
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

var connection = mysql.createConnection({
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
  runSearch();
});

function runSearch() {
  function runSearch() {
    inquirer.prompt({
      name: "action",
      type: "rawlist",
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
        "Quit"
      ],
    });
  }
}
