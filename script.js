function add (x,y){
  return x + y;
};

const result = add(2,3);


const subtract = function (x,y) {
  return x - y;
};

const subtractResult = subtract(10,2);

console.log(subtractResult);


// anonymous arrow function multi line
const multiply = (x,y) => {
  return x * y;
};
// anonymous arrow function single line
const divide = (x, y) =>  x/ y;

const r5 = multiply(2,5);
const r6 = divide(100,20);

console.log(r5, r6)