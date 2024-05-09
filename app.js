// let firstname = prompt("Enter your first name");
// let count = 0
// for (let i = 0; i < firstname.length; i++) {
//     count+=1
// }
// if (count % 2 == 0) {
//     document.write("Juft");
// }
// else {
//     document.write("Toq");
// }

// let fruits = ["apple", "banana", "orange", "kiwi"];
// for(let i = 0; i < fruits.length; i++){
//     if(!fruits[i].includes("a") && !fruits[i].includes("A")){
//         document.write(fruits[i])
//     }
// }

// let users = [
//     {
//         username: "john",
//         password: "123",
//         email: "j@j.com",
//         cars: ["bmw", "audi", "pagani", "tata"]
//     },
//     {
//         username: "jane",
//         password: "456",
//         email: "j@j.com",
//         cars: ["damas", "tesla"]
//     },
//     {
//         username: "jim",
//         password: "789",
//         email: "j@j.com",
//         cars: ["ferrari", "tico", "mercedes"]
//     }
// ]
// for(let i = 0; i < users .length; i++){
//     document.write(users[i].username);
// }

// for(let i = 0; i < 10; i++){
//     if(i % 2 == 0){
        // continue >>>>usha sonni tashab ketadi.
        // break  >>>>>shundan kingi raqamni tashab yuboradi.
//     }
//     document.write(i);
// }

// let lazies = ["John", "Smith", "Bill"];
// for(let i + lazies.length - 1; i >= 0; i--){
//     document.write(lazies[i]);
// }
// let users = prompt("Enter your username: ");
// while(!username.includes("a")){
//     username = prompt("Enter your username again:");
// }
// console.log(username)

// let password = prompt("Please enter your password");
// let userName = prompt("Please enter your username");

// while(password !== "12345678" || userName !== "johndoe") {
//     password = prompt("Please enter your password again: ");
//     userName = prompt("Please enter your username again: ");
// }

// console.log("welcome")

// let password;
// let userName;
// do{
//     password = prompt("Please enter your password");
//     userName = prompt("Please enter your username");
// }
// while(password !== "12345678" || userName !== "johndoe")
// console.log("welcome")

// let parol;
// do{
//     parol = prompt("Enter your password again");
//     parol = prompt("Enter your password");
// }
// while(parol !== "12345678")

// let name;
// while (!name || name.lenght === 0) {
//     if (!name || name.lenght === 0){
//         alert("Please enter your name");
//     }
//     name = prompt("What is your name?");
// }
// console.log(name);
// while (["+", "-", "*", "/", "0"].includes(option)){
//     option = prompt(
//         "+ - addition\n- - subtraction\n* - multiplication\n/ - division\n0 - Exit"
//     );
// let num1;
// while (!num1 || typeof num1 !== "number") {
//     num1 = +prompt("Num1: ");
// }
// let num2;
// while (!num2 || typeof num2 !== "number") {
//     num2 = +prompt("Num2: ");
// }
// switch (option) {
//     case "+": {
//         alert('n1 + n2 = ${num1 + num2}');
//         break;
//     }
//     case "-": {
//         alert('n1 + n2 = ${num1 - num2}');
//         break;
//     }
//     case "*": {
//         alert('n1 + n2 = ${num1 * num2}');
//         break;
//     }
//     case "/": {
//         alert('n1 + n2 = ${num1 / num2}');
//         break;
//     }
//     case "0": {
//         alert("Good bye");
//         break;
//     }
//     default: {
//         alert("Invalid option");
//         break;
//     }
// }
// }

// let num;
// let random = 5;
// do{
//     num = +prompt("Enter your number: ");
//     if(num % random === 0){
//         console.log('${num} is divisible by ${random}');
//     }
//     else{
//         continue;
//     }
// }while(true);

// function calculateP(u, b){
//     let p = (u + b) * 2;
//     return p
// }
// let res = calculateP(width, height);
// console.log(res);