let userName: string;
userName = "Yuejiao";

// let user: object;
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;
user = {
  name: "Yuejiao",
  age: 25,
  isAdmin: true,
  id: "abc12",
};

// array type
let hobbies: Array<string>;
hobbies = ["badminton", "swimming", "cycling"];

// type in function
function add(a: number, b: number) {
  const result = a + b;
  //   console.log(result);
  return result;
}

// create a function to receive another function as parameter
function calculate(
  a: number,
  b: number,
  calFunc: (a: number, b: number) => number
) {
  calFunc(a, b);
}

console.log(calculate(1, 2, add));
