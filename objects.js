
// Given an array of objects, each object representing a person with a name and age property,
//  write a function that returns a new array containing the names of all people who are 18 years old or older.
let people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];

function greater(people) {
  let bigPeople = []
  for (let person of people) {
    if (person.age >= 18) {
     bigPeople.push(person.name)
    }
  }
  return bigPeople
}
let names = greater(people)
console.log(names)

// Write a function that takes an array of objects, where each object represents a product
//  with a name, price, and category property. The function should return an object that groups 
//  the products by their categories, with the category names as keys and the arrays of products as values.
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
  { name: 'Shoes', price: 60, category: 'Clothing' },
];
function categoryOfProducts(products) {
  let ProductsGrouping = {};
  products.forEach(function(product) {
    if (ProductsGrouping[product.category]) {
      ProductsGrouping[product.category].push(product);
    } else {
      ProductsGrouping[product.category] = [product];
    }
  });
  return ProductsGrouping;
}
let ProductsGrouping =categoryOfProducts(products)
console.log( ProductsGrouping)

// Given an array of objects, where each object represents a student with a name 
// and an array of scores, write a function that returns a new array containing the names
//  of all students whose average score is greater than or equal to 85.
const students = [
  { name: 'John', scores: [90, 80, 85] },
  { name: 'Jane', scores: [95, 92, 88] },
  { name: 'Jim', scores: [70, 80, 75] },
  { name: 'Jill', scores: [85, 90, 84] },
];
const greatStudents = greaterStudents(students)
console.log(greatStudents)
function greaterStudents(students) {
  const greatStudents = []
  for (const student of students) {
    const scores = student.scores
    const avgScore = scores.reduce((sum, score) => sum + score, 0) / scores.length
    if (avgScore >= 85) {
      greatStudents.push(student.name)
    }
  }
  return greatStudents
}
// Given an object representing a car, with properties for the make, model, year,
//  and a method to display the car's information, write a function that takes 
//  the car object and adds a new method to the object called age. 
//  The age method should return the current age of the car based on the current 
//  year and the car's year property.
const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};
function ageCar(car){
  var currentAge=date().getYear();
  var carYear=car.year;
  var age=currentAge.carYear;
  var car=car.age()
console.log(carYear.age());
}


