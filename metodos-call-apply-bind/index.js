// Establece this usando "call"
function greet() {
  console.log(`Hello, I am ${this.name} ${this.lastname}`);
}

const juan = {
  name: "Juan",
  lastname: "Gonzalez",
};

greet.call(juan);

// Establece this usando "call" pasando argumentos a la funcion
function walk(meters, adress) {
  console.log(`${this.name} walk ${meters} meters to ${adress}`);
}

walk.call(juan, 400, "norte");

// establecer this usando "apply" y pasar argumentos a la funcion
walk.apply(juan, [700, "sur"]);

// Establecer this en una nueva funcion usando "bind"
const daniel = {
  name: "Daniel",
  lastname: "Sanchez",
};
const danielGreet = greet.bind(daniel);
danielGreet();

const danielWalk = walk.bind(daniel, 2000);
danielWalk("este");

// Cuando es util usar uno de estos metodos
const buttons = document.getElementsByClassName("call-to-action");
// Nodelist
Array.prototype.forEach.apply(buttons, [
  (button) => {
    button.onclick = () => alert("Never stop learning");
  },
]);
