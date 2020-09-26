class Rectangle {
    set param(height) {
      this.height = height;
    };
    
    set param(width) {
      this.width = width;
    };
    
    get area() {
      return this.height * this.width;
    };
    
    get perimeter() {
      return this.height + this.width;
    };
};
  
Rectangle.prototype.toString = function description(){
    return `Your rectangle's height is ${this.height} and width is ${this.width}, its area is ${this.area} and perimeter is ${this.perimeter}`;
};

class Employee {
    set data(firstName) {
      this.firstName = firstName;
    };
    
    set data(lastName) {
      this.lastName = lastName;
    };
    
    set data(id) {
      this.id = id;
    };
    
    set data(salary) {
      this.salary = salary;
    };
    
    set raiseSalary(percent) {
      this.salary += parseInt(this.salary * percent / 100);
    };
    
    get fullName() {
      return this.firstName + " " + this.lastName;
    };
    
    get annularSalary(){
      return this.salary * 12;
    };
  };
  
Employee.prototype.toString = function description(){
    return `Your employee ${this.fullName} with id ${this.id} is getting $${this.salary} per month, thus $${this.annularSalary} per year`
};





