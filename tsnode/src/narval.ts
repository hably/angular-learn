import {double} from "./hello";

class Animal{

    constructor(public name: string, public weigth: number){

    }
}

const lulu = new Animal('Cat',7);

class Narval extends Animal{

    constructor(public length: number){
        super('Gerard', 400);
    }

    detect(object:any){
        console.log(object);

    }
}

const gerard = new Narval(30);

gerard.name = 'Toto';

console.log(gerard);

gerard.detect(lulu);

// Observable pattern
class Viewer<T>{ // T = generic: we make a parameter T for the type: the type T can change

    viewable:T;

    view(thing:T){
        this.viewable = thing;
    }
}

let viewer = new Viewer();
viewer.view(lulu);
viewer.view(gerard);
console.log(viewer);

gerard.length = double(40);
console.log(gerard);

// backticks
const lorem = `This 
is
on multiline
<html>
    <div>${gerard.name}</div>
</html>
`;

console.log(lorem);

// quick shortcut for interface
// we define a new Type which is a function
type Operation = (x:number, y:number)=>number;

// add is a function of type operation
let add:Operation = (x, y) => x+y;

console.log(add(12, 15));

let div = (x:number, y:number) => x / y;

// Duck typing works for any Type, including functions
let myOperation:Operation = div;

// Splat operator
const people = ['Jim', 'John', 'Jack'];
// const morePeople =  people.push('Jules'); //push is MUTATIVE
const morePeople =  people.concat('Jules'); //concat is not MUTATIVE
console.log('People:', people);
console.log(morePeople);
const morePeopleSexy = [...people, 'Jacky', 'Joseph'];
console.log(morePeopleSexy); // Work teh same in ES 2015

// With objects: Only ES 2017
const house = {
    size: 50,
    price: 500000
};
let palace = {
    ...house,
    employees: 5
};

// let samePalace = Object.assign({employees: 5, house})

console.log(palace);

let rental = {
    people, // shortcut for people:people;
    palace,
    price: 10000,
    days: 7
};

console.log(rental);




