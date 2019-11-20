import { Person } from "./person";
import { IStudent } from "./iStudent";

export class Student extends Person implements IStudent {
  grade: string;
  constructor(fn: string, ln: string, age: number, grade: string) {
    super(fn, ln, age);
    this.grade = grade;
  }
  getDetails(): string {
    var str1: string =
      this.firstName +
      " " +
      this.lastName +
      " is age of " +
      this.age +
      " having grade " +
      this.grade;
    return str1;
  }

  doStudy = (): string => {
    return "Hello ";
  };
}
