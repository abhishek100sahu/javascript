function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
Person.prototype.updateAge = function (newAge) {
    this.age = newAge;
    console.log(`My age is now updated to ${this.age}.`);
}
Person.prototype.updateName = function (newName) {
    this.name = newName;
    console.log(`My name is now updated to ${this.name}.`);
}
Person.prototype.printThis = function () {
    console.log(this);
}

p1 = new Person("John", 30);
p2 = new Person("Jane", 25);

console.log(p1.printThis()); // false