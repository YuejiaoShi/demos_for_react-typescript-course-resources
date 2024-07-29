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
function add(a: number, b: number): void{
  const result = a + b;
  //   return result;
  console.log(result);
}
