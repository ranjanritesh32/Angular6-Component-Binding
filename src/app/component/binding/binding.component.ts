import { Component, OnInit } from "@angular/core";

import { Employee } from "../../module/employee";

@Component({
  selector: "app-binding",
  templateUrl: "./binding.component.html",
  styleUrls: ["./binding.component.css"]
})
export class BindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  val: string = "Intial Value";
  title = "CodeSandbox";
  obj: Employee = {
    firstName: "Ritesh",
    lastName: "Ranjan",
    salary: 20000,
    designation: "Sr Con"
  };

  useStyle: boolean = true;
  displayMsg: string = "Apply Style";
  displayMsg2: string = "Remove Style";

  buttonClicked() {
    if (this.useStyle) {
      this.useStyle = false;
    } else {
      this.useStyle = true;
    }
  }
}
