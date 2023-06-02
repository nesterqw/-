// 1 Переменные
// camelCase
// const firstName = 'Vladilen'
// // const age = 26 // number
// const isProgrammer = true // boolean

// const _ = 'private'
// const $ = 'some value'

// const if = 'mkef' // err
// const withNum5 = '5'
// const 5withNum = 5 // err

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2020
// const birthYear = 1993
//
// // const age = currentYear + birthYear
//
// const a = 10
// const b = 5
//
// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// c -= a
// c *= a
// c /= a
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Vladilen'
// const age = 26
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов
// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 26 >= 27 => true
// console.log(isFullAge)

// 6 Условные опрераторы
// const courseStatus = 'fail' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//   console.log('Курс пока находится в процессе разработки')
// } else {
//   console.log('Курс не получился')
// }

// const isReady = true

// if (isReady) {
//   console.log('Все готово!')
// } else {
//   console.log('Все не готово!')
// }

// Тернарное выражение
// isReady ? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42 // number
// const num2 = '42' // string
//
// console.log(num1 === num2)

// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8 Функции

// function calculateAge(year) {
//   return 2020 - year
// }
//
// // console.log(calculateAge(1993))
// // console.log(calculateAge(2019))
// // console.log(calculateAge(1999))
//
// function logInfoAbout(name, year) {
//   const age = calculateAge(year)
//
//   if (age > 0) {
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//   } else {
//     console.log('Вообще-то это уже будущее!')
//   }
//
// }
//
// logInfoAbout('Владилен', 1993)
// logInfoAbout('Елена', 1995)
// logInfoAbout('Елена', 2022)

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])
//
// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i]
//   console.log(car)
// }

// for (let car of cars) {
//   console.log(car)
// }

// 11 Объекты
const person = {
    firstName: 'Vladilen',
    lastName: 'Minin',
    year: 1993,
    languages: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function() {
      console.log('greet from person')
    }
  }
  
  console.log(person.firstName)
  console.log(person['lastName'])
  const key = 'year'
  console.log(person[key])
  person.hasWife = true
  person.isProgrammer = true
  console.log(person)
  
  person.greet()
  ////////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ///////////////////////////////
  ///////////////////////////////
  //////////////////////////////
  ///////////////////////////////
  /////////////////////////////
  ///////////////////////////
  // 1 Number
// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3
//
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN) // Not A Number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))
//
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)

// console.log(0.4 + 0.2) // 0.6
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// 2 BigInt
// console.log(90071992547409919999999n - 9007199254740991999999n)
// console.log(-90071992547409919999999n)
// console.log(90071992547409919999999.23231n) // error

// console.log(10n - 4) // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n) // 2n

// 3 Math
// console.log(Math.E)
// console.log(Math.PI)
//
// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 3))
// console.log(Math.abs(-42))
// console.log(Math.max(42, 12, 23, 11, 422))
// console.log(Math.min(42, 12, 23, 11, 422))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.round(4.4))
// console.log(Math.trunc(4.9))
// console.log(Math.random())

// 4 Example
//function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  
  
  console.log(getRandomBetween(10, 42))
  ///////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  /////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////
  /////////////////////////////////////
  ////////////////////////////////////
  ///////////////////////////////
  //////////////////////////
  ////////////////////////
  //////////////////
  //////////////
  ///////////
  //////////
  /////////
  /////
  // 1 Number
// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3
//
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN) // Not A Number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))
//
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)

// console.log(0.4 + 0.2) // 0.6
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// 2 BigInt
// console.log(90071992547409919999999n - 9007199254740991999999n)
// console.log(-90071992547409919999999n)
// console.log(90071992547409919999999.23231n) // error

// console.log(10n - 4) // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n) // 2n

// 3 Math
// console.log(Math.E)
// console.log(Math.PI)
//
// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 3))
// console.log(Math.abs(-42))
// console.log(Math.max(42, 12, 23, 11, 422))
// console.log(Math.min(42, 12, 23, 11, 422))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.round(4.4))
// console.log(Math.trunc(4.9))
// console.log(Math.random())

// // const name = 'Владилен'
// const age = 26
//
// function getAge() {
//   return age
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} лет.`
// const output = `
//   <div>This is div</div>
//   <p>this is o</p>
// `

// console.log(output)

// const name = 'Владилен'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('!'))
// console.log(name.toLowerCase().startsWith('влад'))
// console.log(name.startsWith('Влад'))
// console.log(name.endsWith('ен!'))
// console.log(name.repeat(3))
// const string = '     password      '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
    if (age < 0) {
      age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
  }
  
  const personName = 'Владилен'
  const personName2 = 'Максим'
  const personAge = 26
  const personAge2 = -10
  
  const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
  const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
  
  console.log(output)
  console.log(output2)
  ////////////////////////
  ///////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  /////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////
  /////////////////////////////////////
  ////////////////////////////////////
  ///////////////////////////////
  //////////////////////////
  ////////////////////////
  //////////////////
  //////////////
  ///////////
  //////////
  /////////
  /////
  // 1 Функции
// Function Declaration
// function greet(name) {
//   console.log('Привет - ', name)
// }

// Function Expression
// const greet2 = function greet2(name) {
//   console.log('Привет 2 - ', name)
// }

// greet('Лена')
// greet2('Лена')

// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//   if (counter === 5) {
//     clearInterval(interval) // clearTimeout
//   } else {
//     console.log(++counter)
//   }
// }, 1000)

// 3 Стрелочные функции
function greet() {
    console.log('Привет - ')
  }
  
  const arrow = (name, age) => {
    console.log('Привет - ', name, age)
  }
  
  const arrow2 = name => console.log('Привет - ', name)
  
  // arrow2('Vladilen')
  
  const pow2 = num => num ** 2
  
  // console.log(pow2(5))
  
  // 4 Параметры по умолчанию
  const sum = (a = 40, b = a * 2) => a + b
  
  // console.log(sum(41, 4))
  // console.log(sum())
  
  function sumAll(...all) {
    let result = 0
    for (let num of all) {
      result += num
    }
    return result
  }
  
  const res = sumAll(1, 2, 3, 4, 5)
  // console.log(res)
  
  // 5 Замыкания
  function createMember(name) {
    return function(lastName) {
      console.log(name + lastName)
    }
  }
  
  const logWithLastName = createMember('Vladilen')
  console.log(logWithLastName('Minin'))
  console.log(logWithLastName('Kuznezov'))
  Footer
  © 2023 GitHub, Inc.
  Footer navigation
  Terms
  Privacy
  Security
  Statu
   ////////////////////////
  ///////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////
  /////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////
  /////////////////////////////////////
  ////////////////////////////////////
  ///////////////////////////////
  //////////////////////////
  ////////////////////////
  //////////////////
  //////////////
  ///////////
  //////////
  /////////
  /////
  const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседс']
// const people = [
//   {name: 'Vladilen', budget: 4200},
//   {name: 'Elena', budget: 3500},
//   {name: 'Victoria', budget: 1700}
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]

// Function
function addItemToEnd() {

}

// Method
// cars.push('Рено')
// cars.unshift('Волга')
//
// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('БМВ')
// cars[index] = 'Porsche'
// console.log(cars)
// let findedPerson
// for (const person of people) {
//   if (person.budget === 3500) {
//     findedPerson = person
//   }
// }

// console.log(findedPerson)

// const index = people.findIndex(function(person) {
//   return person.budget === 3500
// })
// const person = people.find(function(person) {
//   return person.budget === 3500
// })
// console.log(person)
// const person = people.find(person => person.budget === 3500)
// console.log(person)

// console.log(cars.includes('Мазда!'))

// const upperCaseCars = cars.map(car => {
//   return car.toUpperCase()
// })
//
const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
//
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)

// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const people = [
  {name: 'Vladilen', budget: 4200},
  {name: 'Elena', budget: 3500},
  {name: 'Victoria', budget: 1700}
]

const allBudget = people
  .filter(person => person.budget > 2000)
  .reduce((acc, person) => {
    acc += person.budget
    return acc
  }, 0)

console.log(allBudget)

// const displayItems = allItems.filter(item => item.name.indexOf('phone') !== -1)

