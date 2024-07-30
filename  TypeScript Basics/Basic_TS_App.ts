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
type AddFn = (a: number, b: number) => number;

function calculate(
  a: number,
  b: number,
  calFunc: (a: number, b: number) => number
): number {
  return calFunc(a, b);
}

console.log(calculate(1, 2, add));

// Define Object Types with interface
interface Credentials {
  password: string;
  email: string;
}
let creds: Credentials;
creds = { password: "pass", email: "test@example.com" };
// could extends props just by:
// interface Credentials {
//   phone: string;
// }
interface Credentials {
  password: string;
  email: string;
}
// Merging types
type Admin = {
  permissions: string[];
};
type AppUser = {
  userName: string;
};
type AppAdmin = Admin & AppUser;
let admin: AppAdmin;
admin = {
  permissions: ["login"],
  userName: "Yuejiao",
};
// extends
interface AppAdmin2 extends Admin, AppUser {
  // add more property pr just leave it empty
}
// implement a interface type. it should as least contain all the implements' props

class AuthCredenticals implements Credentials {
  password: string;
  email: string;
  userName: string;
}

function login(credentials: Credentials) {}

login(new AuthCredenticals());

// literal type
type Role = "admin" | "user" | "editor";
let role: Role;
role = "admin";
role = "user";
role = "editor";
// Type Guards & Type Narrowing
function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    // execute ...
  }
}

// can NOT check if a value meets the definition of a custom type (type alias) or interface type.
// if (typeof u === User) will never work
type User4 = {
  name: string;
  age: number;
};

type Admin4 = {
  name: string;
  age: number;
  permissions: string[];
};
// But could check for the existence of props
function login4(u: User4 | Admin4) {
  if ("permissions" in u) {
  }
}

// Generic Types
let roles: Array<Role>;
roles = ["admin", "editor"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

