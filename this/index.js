// this en el scope global
console.log(`this: ${this}`);

// this en el scope de una funcion
const whoIsThis = () => {
  return this;
};

console.log(whoIsThis());

// this en el scope de una funcion en strict mode
const whoIsThisStrictMode = () => {
  "use strict";
  return this;
};

console.log(whoIsThisStrictMode());

// this en el contexto de un objeto
const person = {
  name: "Gabriel",
  greep: function () {
    console.log(`Hello I am: ${this.name}`);
  },
};

person.greep();

// this cuando sacamos una funcion de un objeto
const action = person.greep;

action();

// this en el contexto de un "clase"
class Person {
  constructor(name) {
    // this = {}
    this.name = name;
  }
  greep() {
    console.log(`I am called: ${this.name}`);
  }
}

const player = new Person("Juan");
player.greep();
