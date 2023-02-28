const casual = require('casual');

const city = casual.city;
const randomNumber = Math.round(Math.random() * 10);
console.log('--------------');
console.log(city, randomNumber);
console.log('--------------');

const suffix = casual.name_suffix;
const firstname = casual.first_name;
const lastname = casual.last_name;

console.log('--------------');
console.log(suffix + ' ' + firstname + ' ' + lastname);
console.log('--------------');