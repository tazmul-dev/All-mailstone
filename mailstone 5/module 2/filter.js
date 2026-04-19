
// const underNumber = [12, 55, 110, 444, 123,258]

// const filterNumber = underNumber.filter(fil => fil <100)
// console.log(filterNumber)

// // 1.

// const number = [1, 2, 3, 4, 5, 6, 7, 8];
// const filterNumber = number.filter(number =>number % 2 ===0)
// console.log(filterNumber)

// //2.
// const number2 = [5, 12, 8, 20, 3, 15];
// const geternThen = number2.filter(fil => fil > 10)
// console.log(geternThen)

// // 3.

// const words = ["cat", "elephant", "dog", "tiger", "lion"];

// const filterWords = words.filter(word =>word.length > 5);
// console.log(filterWords)
// //4.

// const people = [
//   { name: "Rahim", age: 17 },
//   { name: "Karim", age: 22 },
//   { name: "Hasan", age: 30 },
//   { name: "Rafi", age: 15 }
// ];

// const adult = people.filter(people=> people.age >= 18)
// console.log(adult)
// //5.

// const products = [
//   { name: "Phone", price: 500 },
//   { name: "Pen", price: 10 },
//   { name: "Laptop", price: 1000 },
//   { name: "Book", price: 50 }
// ];

// const price = products.filter(price=> price.price > 100);
// console.log(price)
// //6.

// const values = [0, "hello", false, 42, "", null, "world"];

// const truethy = values.filter(values=> values == true)
// console.log(truethy)

// //7.

// const issues = [
//  {title:"Login bug", level:"bug"},
//  {title:"UI fix", level:"frontend"},
//  {title:"Server crash", level:"bug"},
//  {title:"Design update", level:"design"}
// ]

// const filterIssue = issues.filter(issue=> issue.level === "bug")
// console.log(filterIssue)


// interview task;
//1.

const numbers = [5, -3, 10, -8, 7, -1];

const possitive = numbers.filter(number=> number > 0);
console.log(possitive)

//2;
const numbers2 = [11, 24, 33, 42, 55, 60];

const evenNumber = numbers2.filter(number => number % 2 === 0);
console.log(evenNumber)

// 3.

const names = ["Ali", "Rahim", "Alexander", "Sara", "Mahmud"];

const longNames = names.filter(long => long.length > 5);
console.log(longNames)

//4.

const users = [
 {name:"Rahim", active:true},
 {name:"Karim", active:false},
 {name:"Hasan", active:true},
 {name:"Rafi", active:false}
]

const active = users.filter(act=> act.active===true);
console.log(active)

// 5.
const products = [
 {name:"Phone", price:500},
 {name:"Mouse", price:20},
 {name:"Laptop", price:1000},
 {name:"Keyboard", price:80}
]
const expensive = products.filter(exp => exp.price > 100);
console.log(expensive)

//6.
const tasks = [
 {title:"Learn JS", completed:true},
 {title:"Practice React", completed:false},
 {title:"Build Project", completed:true}
]

const completed = tasks.filter(task=> task.completed ===true);
console.log(completed)

//7.
const students = [
 {name:"A", marks:80},
 {name:"B", marks:35},
 {name:"C", marks:50},
 {name:"D", marks:20}
]
const pass = students.filter(pass=>pass.marks >=40);
console.log(pass)

//8
const posts = [
 {title:"JS Tips", category:"programming"},
 {title:"Travel Vlog", category:"travel"},
 {title:"React Guide", category:"programming"},
 {title:"Food Review", category:"food"}
]
const post = posts.filter(category=>category.category ==="programming")
console.log(post)
//9;
const words = ["hello", "", "world", "", "javascript"];

const string = words.filter(word=>word !=="");
console.log(string)

//10.
const people = [
 {name:"Rahim", age:25},
 {name:"Karim", age:17},
 {name:"Hasan", age:32},
 {name:"Rafi", age:15}
]
const peoples = people.filter(peo=> peo.age > 18)
console.log(peoples)

//11.
const issues = [
 {title:"Login bug", level:"bug"},
 {title:"UI improvement", level:"frontend"},
 {title:"API error", level:"bug"},
 {title:"Design fix", level:"design"}
]
const issue =  issues.filter(issu => issu.level==="bug");
console.log(issue)
