// Dom 
// console.log(document);
// console.log(document.URL);


let arr= [2,3,4];
let sum = 0 ; 
 for(let i =0 ; i<arr.length ; i++){
   sum = sum+ arr[i];
 }

let total = Array(4).fill(sum);
//console.log(total);
for(let i =0 ; i<arr.length ; i++){
    console.log(total[i] - arr[i]);
  }

// Arrays methods
// let letters = ["a" , "b" , "c" , "d"];
// let nums = [1,2,3,4]
// console.log(letters.reverse()); // Mutate the original array
// console.log(letters.concat(nums));
// console.log(...nums, ...letters);
// console.log(letters.join('-'));






// Digital clock
// let hourHand = document.querySelector('.hour'); 
// let minHand = document.querySelector('.min'); 
// let secHand = document.querySelector('.sec'); 

// let ticking = function(){
//    let currentDate =new Date();
//    let getHour = currentDate.getHours();
//    let getMin = currentDate.getMinutes();
//    let getSec = currentDate.getSeconds();
  
//    hourHand.textContent = getHour;
//    minHand.textContent = getMin;
//    secHand.textContent = getSec;
// }

// setInterval(ticking , 1000); // 1sec = 1000


// Local Storage
// In Previous todo list task when we refresh 
// the browser lose  our current state data
// store and retrieve data from database
// Store and retrieve data from local Storage

// console.log(window);
// console.log(window.localStorage);
// console.log(localStorage);

// get set update item

// localStorage.setItem('One','1');
// localStorage.setItem('Two','2');
// console.log(localStorage);

// console.log(localStorage.getItem("One"));
// localStorage.removeItem("ke");
// localStorage.removeItem("shweta");
// localStorage.removeItem("name");
// localStorage.removeItem("one");


// How to store  complex data structure like array of objects

// let vehicles =[
//     {company: "Honda" , model : "2009"},
//     {company: "Toyota" , model : "2010"}
// ];
// // console.log(vehicles);
// // console.log(typeof vehicles); 

// let stringOfVehicles = JSON.stringify(vehicles);
// console.log(stringOfVehicles);
// console.log(typeof stringOfVehicles);

// localStorage.setItem("vehicles" , stringOfVehicles);
// console.log(localStorage.getItem("vehicles"));
// console.log(localStorage)

// get stored item again in object formate
// let storedData = localStorage.getItem("vehicles");
// let objectFormate = JSON.parse(storedData);
// console.log(objectFormate);




// Object oriented programming
// constructor and new opeartor
// let Car = function(color , model){
//    // properties
//    this.color = color;
//    this.model = model;
//    this.login = function(){
//      console.log("login method");
//    }
// } 

// let result = new Car("Black" , 2023);
// console.log(result);

// Prototype

// let Car = function(color , model){
//     // properties
//     this.color = color;
//     this.model = model;
// }

// Car.prototype.login = function(){
//          console.log("login method");
// }

//  let result = new Car("Black" , 2023);
//  console.log(result);
 

// ES6 class












// Asynchronous JavaScript
// Async code Example

// console.log(1);
// console.log(2);

// // Async code
// setTimeout(()=>{
//   console.log("Call back function called after 3 seconds");
// }, 3000);// After 3 seconds

// console.log(3);
// console.log(4);


// value  state Description
// 0 UNSENT client has been created, open() not called yet  
// 1 OPENED open() has been  called.
// 2 HEADERS_RECEIVED send() has been called  , and headers
// 3 LOADING Downloading;  responseText  holds partial data. 
// 4 DONE  The opeartion is complete. //interested here


// HTTP response status code
// Informational response (100 - 199)
// Successful response (200 - 299)
// Redirection message (300 - 399)
// Client error response (400 - 499)
// server error response (500 - 599)


// let todos = ( resource , callback) =>{    
//         // Making http request
//         let request = new XMLHttpRequest(); 
//         console.log(request);

//         //console.log(request , request.readyState);

//         request.addEventListener('readystatechange',()=>{
//             //console.log(request , request.readyState);
//             if(request.readyState === 4  && request.status == 200){
//                 //console.log(request , request.responseText);
//                 let data = JSON.parse( request.responseText);
//                 callback(undefined , data); // regular JS object 
//             }else if(request.readyState === 4){
//                // console.log("Data could not fetch");
//                callback("Data could not fetch" , undefined );
//             }
//         })

//         // set up the request 
//         //request.open("GET" , "https://jsonplaceholder.typicode.com/todos");
//         // request.open("GET" , "data.json");
//         request.open("GET" ,  resource);


       
//         // Sending  the request 
//         request.send();
// }

// todos(resource (error , Data)=>{
//    // console.log("Callback Function  is fried");
//     if(error){
//         console.log(error);
//     }else{
//         console.log(Data);
//     }
// });


// Callback hell (chain of callback function inside one another); 
// Chain of todos function(callback) => callback hell
// todos("data.json", (error , Data)=>{
//     // console.log("Callback Function  is fried");
//      if(error){
//          console.log(error);
//      }else{
//          console.log(Data);
//      }


//      todos("madame.json", (error , Data)=>{
//         // console.log("Callback Function  is fried");
//          if(error){
//              console.log(error);
//          }else{
//              console.log(Data);
//          }

//          todos("riya.json", (error , Data)=>{
//             // console.log("Callback Function  is fried");
//              if(error){
//                  console.log(error);
//              }else{
//                  console.log(Data);
//              }

//              todos("shweta.json", (error , Data)=>{
//                 // console.log("Callback Function  is fried");
//                  if(error){
//                      console.log(error);
//                  }else{
//                      console.log(Data);
//                  }
//              });


//          });


//      });

//  });



// Promise concept

// let getSomething = () =>{
//     return new Promise((resolve, reject)=>{
//         // resolve("Some data"); //Dummy
//         reject("Some error");
//     })
// }

// getSomething().then((data)=>{
//    console.log(data);
// }).catch((error)=>{
//     console.log(error);
//  })


// let todos = ( resource ) =>{
     
//     return new Promise((resolve , reject)=>{

//          // Making http request
//          let request = new XMLHttpRequest(); 
//          //console.log(request);
 
//          //console.log(request , request.readyState);
 
//          request.addEventListener('readystatechange',()=>{
//              //console.log(request , request.readyState);
//              if(request.readyState === 4  && request.status == 200){
//                  //console.log(request , request.responseText);
//                  let data = JSON.parse( request.responseText);
//                  resolve(data);
//              }else if(request.readyState === 4){
//                 // console.log("Data could not fetch");
//                   reject("error in fetching the the data");
//              }
//          })
 
//          // set up the request 
//          //request.open("GET" , "https://jsonplaceholder.typicode.com/todos");
//          // request.open("GET" , "data.json");
//          request.open("GET" ,  resource);
   
//          // Sending  the request 
//          request.send();
//     })       
// }


// todos("data.json").then((data)=>{
//        console.log(data);
//     }).catch((error)=>{
//         console.log(error);
//      });


// chaining of promises   
// todos("data.json").then((data)=>{
//     console.log("Promise  1 resolve" , data);
//     return todos("madame.json");
// }).then((data)=>{
//     console.log("Promise  2 resolve" , data);
//     return todos("riya.json");
// }).then((data)=>{
//     console.log("Promise  3 resolve" , data);
//     return todos("shweta.json");
// })
// .catch((error)=>{
//         console.log(error);
// });



// // Fetch api
// fetch("data.json").then((response)=>{
//        console.log("Promise resolved" , response);
//        return response.json(); // returning promise
// }).then((data)=>{
//         console.log(data);
// }).catch((error)=>{
//         console.log(error);
// });


// async And await
// let getTodos = async()=>{
//   let response = await fetch("data.json");
//   let data = await response.json();
//   return data;
// }

// getTodos().then((data)=>{
//         console.log(data);
// }).catch((error)=>{
//         console.log(error);
// });




















// EcmaScript6 (ES6)
// Destructing  the arrays

// let hotel = {
//     name:"shweta",
//     location:"delhi",
//     categories : ["hindi","english" , "punjabi"],
// }

// Simple example 
// without Destructing
//let items  = [2,3,5,6];
// let a = items[0];
// let b = items[1];
// let c = items[2];
// let d = items[3];
// console.log(a,b,c,d);

// With Destructing
// let items  = [2,3,5,6];
// let [a,b,c,d] = items;
// console.log(a,b,c,d);

// Exmaple 2 
// let [first , second] = hotel.categories;
// console.log(first,second);

// Exmaple 3 
// let [first , , third] = hotel.categories;
// console.log(first,third);

// Exmaple 4
// Switching the categories(usecase)
// without destructing 
// let [first , second] = hotel.categories;
// console.log(first,second);
// let temp = first ;
// first = second;
// second = first;
// console.log(first,second);


// Exmaple 5
// Switching the categories(usecase) with destructing 
// let [first , second] = hotel.categories;
// console.log(first,second);
// [second, first] = [first , second] ;
// console.log(first,second);

// Destructing  the nested arrays
// let nums = [2,3,[6,9]];
// let [a,b] = nums;
// let [a,b ,[c,d]] = nums;
// console.log(c,d);


// Data structure , string , operators
// Destructing  the  Objects

// let hotel = {
//     name:"shweta",
//     location:"delhi",
//     categories : ["hindi","english" , "punjabi"],
//     mainMenu : ["foodA","foodB" , "foodC"],
//     openingHours : {
//         sunday : {open : "09:00AM" , close :"11:00PM"},
//         monday : {open : "10:00AM" , close :"12:00PM"},
//     }
// }

// let {name , location , mainMenu} = hotel;
// console.log(name , location , mainMenu);

// Set Customize name to Object property
// let {name:hotelName , location:hotelLocation , mainMenu:Menu} = hotel;
// console.log(hotelName, hotelLocation  , Menu);


// Setting Default values
// let {name , Menu = [] , categories =[]} = hotel;
// console.log(hotelName,Menu ,categories);


// Destructuring  the nested object
// let {name , openingHours} = hotel;
// console.log(name , openingHours);









