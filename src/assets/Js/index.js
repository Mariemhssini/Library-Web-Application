const { readFileSync, writeFileSync } = require("fs");
const { email, password } = JSON.parse(readFileSync('./data.json', 'utf-8'));


const myData = {
    name: "Mariem",
    password: 1253648,
}

const objectToJson = JSON.stringify(myData);
console.log(objectToJson);

writeFileSync('./data.json', objectToJson);