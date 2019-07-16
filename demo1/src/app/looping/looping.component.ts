import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-looping',
  templateUrl: './looping.component.html',
  styleUrls: ['./looping.component.css']
})
export class LoopingComponent implements OnInit {
  people=
  [{'name':'rahul','location':'pune','city':'Mumbai'},
  {"name":"vikas","location":"Mahad","city":"Raigad"}
];

  constructor() { }

  ngOnInit() {
  
  }
}
