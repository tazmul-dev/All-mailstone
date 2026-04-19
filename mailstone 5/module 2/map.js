// 1
const number = [1, 2, 5, 6, 8]

const result = number.map(num => num*3)

console.log(result)

// 2
const number2 = [2, 5, 6, 8, 2, 8] 

const result2 = number2.map(num => num*2)
console.log(result2)

//3
const price = [100, 200, 300]

const vatCalculat = price.map(num =>{

    const vat = (num * 10) / 100
    const totalPrice = num + vat
    return totalPrice;
})
console.log(vatCalculat)

// 4.
let names = ["tazmul", "rahim", "karim"];

const upperCase = names.map(n => n.toUpperCase())
console.log(upperCase)

const firsLatter = names.map(latter => latter[0].toLocaleUpperCase())
console.log(firsLatter)

//5
let users = [
  {name: "Tazmul", age: 20},
  {name: "Rahim", age: 25},
  {name: "Karim", age: 30}
];

const ageValue = users.map(user => user.age)

console.log(ageValue)

let products = [
  {name: "Laptop", price: 50000},
  {name: "Mobile", price: 20000},
  {name: "Tablet", price: 15000}
];

const incrimentPoducts = products.map(prd =>{
    const incriment =( prd.price *20)/100
    return prd.price + incriment
})
console.log(incrimentPoducts)

const underNumber = [12, 55, 110, 444, 123,258]

const numberu = underNumber.map(n=> n < 100)
console.log(numberu)