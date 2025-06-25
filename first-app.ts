// simple variables
let userName: string = "Peter";
let year: number = 2025;
let isValid: boolean = true;
const API_KEY = "abc";

// or-operator
let userID: string | number = 123;
userID = "Kennwort";

// objects (never-types)
// let user: object;
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

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
function add(a: number, b: number): void {
  const result = a + b;
  console.log(result);
}
