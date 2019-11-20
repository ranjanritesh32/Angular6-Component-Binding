export class Person {
  constructor(fn: string, ln: string, age: number) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = age;
  }
  firstName: string;
  lastName: string;
  age: number;
  getDetails(): string {
    var str1: string =
      this.firstName + " " + this.lastName + " is age of " + this.age;
    return str1;
  }
}
