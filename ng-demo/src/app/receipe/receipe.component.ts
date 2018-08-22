import { Component, OnInit } from '@angular/core';

type Ingredient = {
  name: string,
  done: boolean
}

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {

  ingredients = [
    {name:'flour', done:false},
    {name:'eggs', done:false},
    {name:'milk', done:false},
    {name:'sugar', done:false},
    {name:'salt', done:false},
    {name:'rum', done:false},
    {name:'butter', done:false},
    ];

  constructor() { }

  ngOnInit() { }

  toggle(i:Ingredient){
    i.done = !i.done;
  }

  isDone(i:Ingredient){
    return i.done;
  }

}
