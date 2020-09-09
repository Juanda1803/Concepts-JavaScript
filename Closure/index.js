// IIFE
(function () {
  let color = "green";

  const printColor = () => {
    console.log(color);
  };

  printColor();
})();

// Funciones que regresan funciones
const makeColorPrinter = (color) => {
  let colorMessage = `The color is ${color}`;

  return function () {
    console.log(colorMessage);
  };
};

let greenColorPrinter = makeColorPrinter("green");

console.log(greenColorPrinter());
// const counter = {
//   count: 3,
// };

// console.log(counter.count);
// counter.count = 99;
// console.log(counter.count);

// Variables "Privadas"
const makeCounter = (n) => {
  let count = n;
  return {
    increase: function () {
      count = count + 1;
    },
    decrease: function () {
      count = count - 1;
    },
    getCount: function () {
      return count;
    },
  };
};

let counter = makeCounter(7);

counter.decrease();
counter.decrease();
console.log(counter.getCount());
counter.increase();
console.log(counter.getCount());
