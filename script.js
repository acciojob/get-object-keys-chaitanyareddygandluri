const student = {
  name: "John",
};

function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys(student)); // ["name"]

const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};

console.log(getKeys(person)); // ["name", "age", "city"]