import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  backedField = "";

  user = "Nicolas"

  checked = false;

  options = [2, 50, 56, 75];

  selectedOption = 50;
  
  ingredients = [
    {name:""},
    {name:'flour', good:false},
    {name:'eggs', good:true},
    {name:'milk', good:true},
    {name:'sugar', good:false},
    {name:'salt', good:true},
    {name:'rum', good:false},
    {name:'butter', good:false},
  ];

  selectedIngredient = undefined;

  isNicolas(){
    return this.user == "Nicolas" ? "checked" : "";
  }

  getTypeOf(){
    return typeof this.selectedOption;
  }

  onChange(){
    alert('You have change the ingredient: '
    +this.selectedIngredient.name)
  }

  formData = {
    age: 12,
    email: "jo@patate.com"
  }

  onSubmit(){
    console.log(this.formData);
    console.log('Sending super REST request');
  }

  isValid(){
    return this.formData.age>0
    && this.formData.age <=18
    && this.formData.email.includes('@')
  }

  constructor() { }

  ngOnInit() {
  }

}
