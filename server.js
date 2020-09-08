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
        "View All Employees", "View All Employees By department", "View All Employees By manager",
        "Add An Employee", "Remove An Employee", "Update An Employee Role", "Update An Employee Manager",
        "View All Roles", "Add A Role", "Remove A Role", "View All departments", "Add A Department",
        "Remove A Department", "Quit",
      ],
      //.then to handle the response
    })
    .then(function (response) {
      console.log(response);
      if (response.prompt === "View All Employees") {
        viewAllEmployees(); //calling the viewAllEmployees()
        start();
      } else if (response.prompt === "View Employees By Department") {
        viewEmployeeByDepartment(); //calling the viewEmployeeByDepartment()
        start();
      } else if (response.prompt === "View All Employees By manager") {
        viewEmployeeByManager(); //calling the viewEmployeeByManager()
        start();
      } else if (response.prompt === "Add An Employee") {
        addEmployee(); //calling the addEmployee()
        start();
      } else if (response.prompt === "Remove An Employee") {
        removeEmployee(); //calling the removeEmployee()
        start();
      } else if (response.prompt === "Update An Employee Role") {
        updateEmployeeRole(); //calling the updateEmployeeRole()
        start();
      } else if (response.prompt === "Update An Employee Manager") {
        updateEmployeeManager(); //calling the updateEmployeeManager()
        start();
      } else if (response.prompt === "View All Roles") {
        viewAllRoles(); //calling the viewAllRoles()
        start();
      } else if (response.prompt === "Add A Role") {
        addRole(); //calling the addRole()
        start();
      } else if (response.prompt === "Remove A Role") {
        removeRole(); //calling the removeRole()
        start();
      } else if (response.prompt === "View All departments") {
        viewAllDepartments(); //calling the viewAllDepartments()
        start();
      } else if (response.prompt === "Add A Department") {
        addDepartment(); //calling the addDepartment()
        start();
      } else if (response.prompt === "Remove A Department") {
        removeDepartment(); //calling the removeDepartment()
        start();
      } else {
        quit(); //calling the quit()
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
//viewAllDepartments function definition
const viewAllDepartments = function () {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//viewAllRoles function definition
const viewAllRoles = function () {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//viewEmployeeByDepartment function definition
const viewEmployeeByDepartment = function () {
  connection.query("     ", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//viewEmployeeByManager function definition
const viewEmployeeByManager = function () {
  connection.query("    ", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//----------------------------------------------------------------------
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
//----------------------------------------------------------------------
//delete
//removeEmployee function definition
const removeEmployee = function () {
  connection.query("     ", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//removeRole function definition
const removeRole = function () {
  connection.query("     ", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//removeDepartment function definition
const removeDepartment = function () {
  connection.query("     ", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//----------------------------------------------------------------------
//update
//updateEmployeeRole function definition
const updateEmployeeRole = function () {
  connection.query("     ", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//updateEmployeeRole function definition
const updateEmployeeRole = function () {
  connection.query("     ", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//updateEmployeeManager function definition
const updateEmployeeManager = function () {
  connection.query("     ", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//----------------------------------------------------------------------
//QUIT
//quit function definition
const quit = function () {
  connection.query("     ", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
};
//next steps: make funcitons functional and test as you go 
