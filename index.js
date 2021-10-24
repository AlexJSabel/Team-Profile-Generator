const inquirer = require('inquirer');


class Employee {
    constructor() {
       this.name
       this.id
       this.email
       this.getName()
       this.getId()
       this.getEmail()
       this.getRole() 
       this.Manager()
    };

      promptUser = () => {
        return inquirer.prompt([
          {
            type: 'input',
            name: 'Manager Name',
            message: 'Manager Name? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter a name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'Employee ID',
            message: 'Enter their Employee ID (Required)',
            validate: employeeID => {
              if (employeeID) {
                return true;
              } else {
                console.log('Please enter their Employee ID username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'Email',
            message: 'Enter their Email (Required)',
            validate: email => {
              if (email) {
                return true;
              } else {
                console.log('Please enter their Email Address!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'OfficeNumber',
            message: 'Enter their Office Number (Required)',
            validate: officeNumb => {
              if (officeNumb) {
                return true;
              } else {
                console.log('Please enter their Office Number!');
                return false;
              }
            }
          },
          {
            type: 'list',
            message: 'Would you like to add an Engineer, a Intern, or finish your team?',
            name: 'menu',
            choices: ['Engineer', 'Intern', 'Finish Team']
          }
        ]);
        


      };

}



console.log('Connected')