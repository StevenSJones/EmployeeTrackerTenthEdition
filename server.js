//importing my node modules
const mysql = require("mysql");
const inquirer = require("inquirer");
//setting up to connect to server (like dialing the phone)
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
//actual connection to the mysql db(pressing send)
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
        "View All Roles",
        "View All departments",
        "Add An Employee",
        "Add A Department",
        "Add A Role",
        "Update An Employee Role",
        "Quit",
      ],
      //.then to handle the response
    }) //switch
    .then(function (response) {
      switch (response.prompt) {
        case "View All Employees":
          viewAllEmployees(); //calling the viewAllEmployees()
          break;

        case "View All departments":
          viewAllDepartments(); //calling the viewAllDepartments()
          break;

        case "View All Roles":
          viewAllRoles(); //calling the viewAllRoles()
          break;

        case "Add An Employee":
          addEmployee(); //calling the addEmployee()
          break;

        case "Add A Department":
          addDepartment(); //calling the addDepartment()
          break;

        case "Add A Role":
          addRole(); //calling the addRole()
          break;

        case "Update An Employee Role":
          updateEmployeeRole(); //calling the updateEmployeeRole()
          break;

        default:
          process.exit();
      }
    });
}
//View departments, View roles, View employees
//View All Employees function definition
const viewAllEmployees = function () {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
  runSearch();
};
//viewAllDepartments function definition
const viewAllDepartments = function () {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
  runSearch();
};
//viewAllRoles function definition
const viewAllRoles = function () {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.log("---------------------------------");
    console.table(res);
  });
  runSearch();
};
//----------------------------------------------------------------------
//Add departments, * Add roles, * Add employees
//addEmployee function definition
const addEmployee = function () {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "Enter the first name of the new employee",
      },
      {
        name: "last_name",
        type: "input",
        message: "Enter the last name of the new employee",
      },
      {
        name: "role_id",
        type: "input",
        message: "Enter the role ID of the employee",
        // choices: pull in roles data
      },
      {
        name: "manager_id",
        type: "input",
        message: "Enter the id (number) of the manager (if applicable)",
        // choices: pull in manager names
      },
    ])
    .then(function (response) {
      //create sql statement as a string template literal
      var sqlQuery = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES ('${response.first_name}', '${response.last_name}', ${response.role_id}, ${response.manager_id})`; //this is the sql that is sent to the database
      connection.query(sqlQuery, function (err, res) {
        //connect to database and pass through the query made above
        if (err) throw err;
        viewAllEmployees();
      });
    });
};
//add department
const addDepartment = function () {
  inquirer
    .prompt([
      {
        name: "departmentName",
        type: "input",
        message: "Enter the department name",
      },
    ])
    .then(function (response) {
      //create sql statement as a string template literal
      var sqlQuery = `INSERT INTO department (departmentName)
        VALUES ('${response.departmentName}')`;
      connection.query(sqlQuery, function (err, res) {
        if (err) throw err;
        viewAllDepartments();
      });
    });
};
//add role
const addRole = function () {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "Enter the title of the new role",
      },
      {
        name: "salary",
        type: "input",
        message: "Enter the salary of the new role",
      },
      {
        name: "department_id",
        type: "input",
        message: "Enter the department Id of the new role.",
      },
    ])
    .then(function (response) {
      //create sql statement as a string template literal
      var sqlQuery = `INSERT INTO role (title, salary, department_id)
        VALUES ('${response.title}', '${response.salary}', ${response.department_id})`;
      connection.query(sqlQuery, function (err, res) {
        if (err) throw err;
        viewAllRoles();
      });
    });
};
//------------------------------------------------------------
//update
//* Update employee roles
const updateEmployeeRole = function () {
  let employeeName;
  let employees;
  let employeeNames;
  connection.query(
    `SELECT e.id, e.first_name, e.last_name, CONCAT(e.first_name, ' ', e.last_name) as full_name, e.role_id, r.title
    FROM employee e 
    INNER JOIN role r 
      ON e.role_id = r.id`,
    function (err, res) {
      if (err) throw err;
      console.log("res: ", res);
      employees = res;
      employeeNames = res.map((employee) => employee.full_name);
      inquirer
        .prompt([
          {
            name: "employee",
            type: "list",
            message: "Which employee would you like to update?",
            choices: employeeNames,
          },
        ])
        .then(function (response) {
          let roles = [
            ...new Set(employees.map((employee) => employee.title)),
          ].sort();
          employeeName = response.employee;
          console.log("employeeName: ", employeeName);
          inquirer
            .prompt([
              {
                name: "role",
                type: "list",
                message: `What role would you like to assign to ${employeeName}?`,
                choices: roles,
              },
            ])
            .then(function (response) {
              let employeeRole = employees.find(
                (employee) => employee.title === response.role
              );
              let employeeId = employees.find(employee => employee.full_name === employeeName);
              console.log("response.role: ", response.role);
              // create sql statement as a string template literal
              var sqlQuery = `UPDATE employee SET role_id = ${employeeRole.role_id} WHERE id = ${employeeId.id}`; //this is the sql that is sent to the database
              console.log("sqlQuery: ", sqlQuery);
              connection.query(sqlQuery, function (err, res) {
                //connect to database and pass through the query made above
                if (err) throw err;
                viewAllEmployees();
              });
            });
        });
    }
  );
};

//------------------------------------------------------------
