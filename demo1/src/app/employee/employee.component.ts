import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  my="Rahul";
  color;

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    alert("welcome");
  }
  }


