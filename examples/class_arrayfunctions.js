class Employee {
    id;
    name;
    doj;
    salary;
    constructor(id, name, doj, salary) {
        this.id = id;
        this.name = name;
        this.doj = doj;
        this.salary = salary;
    }
    get name() {
        return this.name;
    }
    get id() {
        return this.id;
    }
    get doj() {
        return this.doj;
    }
    get salary() {
        return this.salary;
    }

    set name(name) {
        this.name = name;
    }

    set doj(doj) {
        this.doj = doj;
    }
    set salary(salary) {
        this.salary = salary;
    }

    getExperience() {
        var mydate = new Date(this.doj);
        var experience = DateUtil.getDateDifferenceInMonths(mydate);
        var years = Math.floor(experience / 12);
        var months = experience % 12;
        return years + " Years and " + (months) + " Months";
    }
}

class Manager extends Employee {

    role;
    subordinates = [];
    constructor(id, name, doj, salary, role) {
        super(id, name, doj, salary);
        this.role = role;
    }

    set role(role) {
        this.role = role;
    }
    get role() {
        return this.role;
    }

    addSubordinates(employee) {
        this.subordinates.push(employee);
    }
    getdSubordinates() {
        return this.subordinates;
    }
}


class DateUtil {
    static getDateDifferenceInMonths(olddate) {
        var diff = (Date.now() - olddate.getTime()) / 1000;
        diff /= (60 * 60 * 24 * 7 * 4);
        return Math.abs(Math.round(diff));
    }
}


function addemployees() {
    let employees = [];

    let emp1 = new Employee(110, 'Sam', '2014-04-03', 20);
    emp1.salary = 10;
    let emp2 = new Employee(114, 'ram', '2021-03-03', 10);
    let emp3 = new Employee(100, 'Shiva', '2012-04-01', 24);

    let emp4 = new Manager(002, 'GR', '2010-02-02', 35, "Product Manager");
    emp4.addSubordinates(emp1.id);

    let emp5 = new Manager(006, 'Nirav', '2020-01-02', 25, "Hiring Manager");
    emp5.addSubordinates(emp2.id);
    emp5.addSubordinates(emp3.id);

    console.log(emp4.name + "  :: " + emp4.getExperience());
    console.log(emp4.getdSubordinates());


    employees.push(emp1);
    employees.push(emp2);
    employees.push(emp3);
    employees.push(emp4);
    employees.push(emp5);
    return employees;
}

function getAllEmployeeNames(employees) {
    let all_employees = employees.map(employee => employee.name);
    return all_employees;
}

function getEmployeesExperienceMorethanGivenNumber(employees, yoExp) {
    let get_employees_exp_morethan = employees.filter(function(employee) {
        var mydate = new Date(employee.doj);
        return DateUtil.getDateDifferenceInMonths(mydate) > (yoExp * 12);
    });
    return get_employees_exp_morethan;
}



function getAllEmployeesTotalSalary(employees) {
    let employees_total_sal = employees.reduce(function empTotalSal(total, employee) {
        return total + employee.salary
    }, 0);
    return employees_total_sal;
}

let employees = addemployees();

console.log("All employees Names :" + getAllEmployeeNames(employees));
console.log("Employees Total Salary :: " + getAllEmployeesTotalSalary(employees));
console.log("Employees experience > 5 :: ");
console.log(getEmployeesExperienceMorethanGivenNumber(employees, 5));

//list out managers and subordinate Names
function listManagersAndSubordinatelist(employees) {
    let managers = employees.filter(function(employee) {
        if (employee.subordinates != undefined && employee.subordinates != null) return employee;
    });
    return managers;

}
console.log("Managers :: ");
console.log(listManagersAndSubordinatelist(employees));

var Asset = function() {
    this.allot=true;
  };
  Asset.prototype.checkAllotment = function() {
   return this.allot ? "Allotted" : "Not allotted"; 
  }
  
  
  AssetMonitor = function(id, allot) {
    Asset.call(this);
    this.id= id;
    this.allot= allot;
    console.log("Alloting AssetMonitor for Emp ID:: "+id )
  };
  
  AssetMonitor.prototype = Object.create(Asset.prototype);
  //if we call AssetMonitor.prototype.constructor, it would point to Asset instead of AssetMonitor
  //now changing that into 
  AssetMonitor.prototype.constructor = AssetMonitor;  
  
  employees.forEach(function(employee) {
  
    if(employee.hasOwnProperty("role") && employee.role.indexOf('Manager') != -1){
      var monitor_allocate1 = new AssetMonitor(employee.id,true);
      console.log(monitor_allocate1.checkAllotment());
  
    }  
  });
  