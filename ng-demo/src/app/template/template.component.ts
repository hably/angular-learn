import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  users = ['Jack', 'John', 'Jim', 'Jane'];

  constructor() { }

  getName(){
    return "Habib"
  }

  getContent(){
    return "No quote quote needed";
  }

  condition(){
    return this.users.length > 4;
  }

  getImpressiveStyle(){
    return 'impressive';
  }

  clearUsers(){
    this.users = [];
  }

  ngOnInit() {
  }

}
