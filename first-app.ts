// simple variables
let userName: string = "Peter";
let year: number = 2025;
let isValid: boolean = true;
const API_KEY = "abc";

// union types
let userID: string | number = 123;
userID = "Kennwort";

// objects (never-types)
// let user: object;
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;

user = {
  name: "Peter",
  age: 34,
  isAdmin: true,
  id: "abc" // 1234
};

// arrays (never-types)
// let hobbies: Array<string>;
let hobbies: string[]; // number[], boolean[]

// {name: string; age: number}[]

hobbies = ["Sports", "Cooking", "Reading"];

// functions
function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

function substract(a: number, b: number): number {
  const result = a - b;
  return result;
}

// custom types, type aliases
type CalcFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: CalcFn) {
  calcFn(a, b);
}

calculate(2, 5, add);
calculate(2, 5, substract);

// interfaces
interface Credentials {
  password: string;
  email: string;
}

// interface Credentials {
//   mode: string;
// }

let creds: Credentials;

creds = {
  password: "abc",
  email: "test@example.com"
};

class AuthCredentials implements Credentials {
  password: string;
  email: string;
  userName: string;
}

function login(credentials: Credentials) {
  // ...
}

login(new AuthCredentials());

// merging types

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;
// let admin: AppAdmin;

// admin = {
//   permissions: ["login"],
//   userName: "Peter"
// };

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: "Peter"
};

// literal types
let role: "admin" | "user" | "editor";
