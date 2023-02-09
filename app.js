// var names = document.getElementsByClassName("name")
// for (var i = 0; i < names.length; i++) {
//     console.log(names[i].innerText)
// }
// // //question michael


// // querySelector
// // Select a single element from the page.
// //(Returns the first element it finds that matches the query)
// var result = document.querySelector("#favorite-things")
// console.log(result)
// //#favorite thigns is bassically returnong an id like in css

// // querySelectorAll
// // Select all elements from the page that match the query.

// var result = document.querySelectorAll("#favorite-things")
// console.log(result)


// var result = document.querySelectorAll(".favorite-things")
// console.log(result.length)
// //returns 0 becuase there is no class named favorite thigns


// //var result = document.querySelector("ol#favorite-things > li")
// console.log(result)
// //returns the first list item in the ol with the id favorite things qurey selctor will alwys return first element


// var result = document.querySelectorAll("ol#favorite-things > li")
// console.log(result)
// //returns a node list=array

// var result = document.querySelectorAll("ol#favorite-things > li")
// console.log(Array.from(result))
// //returns an actuall array  

// for (var i = 0; i < result.length; i++) {
//     result[i].textContent = "** REDACTED **"
// }
// //forloop that changes all the content on the dom to say redacted


// // innerHTML - security risk
// // innerText - "expensive" means takes a long time
// // textContent is the best way to access text

// //var person = {name: "Joe"}
// //person.name = "Jim"
// //console.log(person)

// /**
//  * 1. Select the h1 element
//  * 2. Save the h1 element's text to a variable
//  * 3. Change the paragraph element's text to be the same as the text inside the h1
//  */


// //document.addEventListener('DOMContentLoaded', e => {
// //const h1 = document.querySelector("h1")

// //h1.innerText = "Hello Bitches"
// //})
// // select the h1 by a class, id, or even tag name
// // in this example, i'm just selecting it by tag name


// var text = document.querySelector("#header").textContent
// //selected h1 by query selector
// document.querySelector("#ptag").textContent = text
// // changed the paragraph to match h1 by id

// //methods are called with parentheses 

// //var newLi = document.createElement("li")
// //newLi.textContent = "3"
// //var myList = document.getElementById("my-list")
// //myList.append(newLi)
// // added a new list item if we used prepend instead of append it would of added 3 to top of list

// //Add a paragraph after the existing unordered list with any text you want inside.
// //* Do this completely in JavaScript!

// //var newP = document.createElement("p")
// //newP.textContent = "V School rocks!"
// //document.body.append(newP)
// //newP.style.textAlign = "center" //centered paragraph
// //newP.style.fontSize = "30px" //changed font soze of paragraph
// //newP.style.color = "pink" //changed color by myself

// var header = document.querySelector("#head2")
// console.log(typeof head2.style)
// // this is a nested object

// var header = document.querySelector("#head2")
// console.log(Object.keys(head2.style))
// //this console logs all the different styles you can use

// head2.style.color = "pink"
// head2.style.backgroundColor = "blue"
// head2.style.fontSize = "20px"

// //changed h1 to pink
// // fontSize
// // backgroundColor
// // display
// // textAlign
// // margin, padding, border

// document.body.style.backgroundColor = "pink"

// // className
// var className = document.querySelector("#head2").className
// console.log(className)

// // classList
// document.querySelector("#head2").classList.add("new-class")
// console.log(document.querySelector("#header").className)
// //added more classes to acsess
// document.querySelector("#head2").classList.remove("another")
// console.log(document.querySelector("#head2").className)
// //removed another from the class list

// var inputBox = document.getElementById("text-input")
// inputBox.value = "CHANGED!"
// console.log(inputBox.value)
// //changing the wording in the input box

// // method below we call with parentheses and string with tag name

// var newLi = document.createElement("li")
// newLi.textContent = "3"
// var myList = document.getElementById("my-list")
// myList.append(newLi)

// var newP = document.createElement("p")
// newP.textContent = "V School rocks!"
// document.body.append(newP)
// newP.style.textAlign = "center" //centered paragraph
// newP.style.fontSize = "30px" //changed font soze of paragraph
// newP.style.color = " blue" //changed color by myself

// //innerhtml vs text content
// var myList = document.getElementById("my-list")
// console.log(myList.textContent)
// // above logs text content only below logs html and list content
// console.log(myList.innerHTML)
// myList.innerHTML += "<li>4</li>"
// // added a 4 to end of list just like append does
// document.body.innerHTML += "<p id='paragraph'>V School rocks!</p>"
// document.getElementById("paragraph").style.textAlign = "center"
// //added a paragraph to end of list like appwnd using += and body and p
// // and styles it by id

// var powerRangers = [
//     "Jason Lee Scott",
//     "Kimberly Hart",
//     "Zack Taylor",
//     "Trini Kwan",
//     "Billy Cranston",
//     "Biotch"
// ]




// var rangersList = document.getElementById("rangers")

// for (var i = 0; i < powerRangers.length; i++) {
//     var newName = document.createElement("li")
//     newName.textContent = powerRangers[i]
//     rangersList.append(newName)
// }

// // forloop to append all the names in the list above
// // can add any name to above list and will show on page
// // can also do this by using innerHtml like for (var i = 0; i < powerRangers.length; i++) {
// // rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
// //} still a for loop


// document.getElementById("header1").innerHTML = "serenity is queen"
// document.getElementById("header1").style.color = "blue"
// //changed the color too by myself yeet
// // changed my h1 to serenity is queen


// document.addEventListener('DOMContentLoaded', e => {

//     const h1 = document.querySelector("header2")

//     header2.innerText = "This is a bitch"
// })
// // select the h1 by a class, id, or even tag name
// // in this example, i'm just selecting it by ID name

// var list = document.getElementsByClassName("list-items");
// list[0].innerHTML = "Hello World!";



// var result = document.querySelectorAll("ul#navbar > li")
// console.log(result)
// //returns a node list=array

// var result = document.querySelectorAll(".navbar > li")
// console.log(Array.from(result))


// for (var i = 0; i < result.length; i++) {
//     result[i].textContent = "** REDACTED **"
// }

// //returns an actuall array  


// // document.querySelector('#consolelog').addEventListener('click', function () {
// //     console.log(document.querySelector("#box").value);
// //     document.getElementById("mypara").innerText = document.querySelector("#box").value;
// //     document.querySelector("#box").value = '';
// //     document.querySelector("#box").focus();


// // })
// // line221 made my input box log a new paragraph to the page
// // after hitting submit focus made the message dissapear after my input submit to the console event listener does soemtning everytime and event happens


// // anoymous fuinctions nothing in parantheses = anonymous functon

// function myFunc() {

// }
// myFunc()
// //var myOtherFunc = function() {}

// //document.getElementById("submit-button").addEventListener("click", function () {

// //})

// //const h1 = document.getElementById("clickable")
// //h1.addEventListener("click", () => {
//    // h1.textContent = "clicked"    
// //})

// // removed funtionion keyword from line 244 and added arrow in its place van do this whenever you have an anonmyous call back funtion
// // if you have on argument, dont need parentheses, removed them from e line 244
// // no argumnet you need parentheses
// const birds = ["robin", "pelican", "goose"]

// const bigBirds = birds.map(bird => "big " + bird)
// // removed return big plus bird and made an implicit return by adding it to arrow function


// // old way  function addTwo(first, second){
//     //return first + second
// //}
// // made it into arrow function

// const addTwo = (first, second) => first + second
// //leave parentheses becuase two arguments

// // we can grab forms without ids by names
// //if it has a dash in name or id use brackets becuase js see dashes as minus signs


// const form = document["my-form"]
// // submit event for button
// // any submit event needs prevent default to stop page from refreshing

// form.addEventListener("submit", function(event) {
// event.preventDefault()
// })

// var readlineSync = require('readline-sync');
 
// // Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');

// var numbers = [42, 13, 34, 18, 123]
// var turtles = ["Raphael", "Donatello", "Michaelangelo", "Leonardo"]
// var users = [
//     {
//         name: "Joe Schmoe",
//         age: 42,
//         gender: "Male"
//     },
//     {
//         name: "Jill Schmoe",
//         age: 41,
//         gender: "Female"
//     },
//     {
//         name: "Jimmy Schmoe",
//         age: 9,
//         gender: "Male"
//     }   
// ]


//  var disparateArr = ["Alice", 40, true, [8, 10, 12]]


//  * QUIZ:
//  * 
//  * 1. What is the purpose of arrays? Why do programmers care about them?
//  * Arrays are commonly used in computer programs to organize data so that a related set of values can be easily sorted or searched. For example, a search engine may use an array to store Web pages found in a search performed by the user.
//  * collect mult data together/ ob way to explain one thing in a lot more detal
//  * 
//  * 2. What are some differences between arrays and objects?
//  * Some general differences:

// Arrays preserve the order
// Arrays can contain duplicate entries
// Objects often have a bigger storage/network overhead
// Arrays are faster to iterate (on the server side)
//  * 
//  * 3. How would you access the number 34 from the `numbers` array above? 
//  * See if you can log it to the console)
//  
// console.log(numbers[2])
//  * 
//  * 4. What is the length of the `turtles` array? How would you access that length?
//  console.log(turtles.length)
//  * 
//  * 5. Is it syntatically correct to have an array like `disparateArr`?
//  * yes
//  * 
//  * 
//  * 6. What might be a better data structure to use for `disparateArr`?
// make it an object instead of an array
//  * 
//  * 
//  * 7. How would you log Jill Schmoe's name to the console using the `users` array?

// console.log(users[1].name)


// 1. Why do programmers care about loops? What are they good for?
/// they allow the programmer to run the same code many times
//  * 
//  * 
//  * 2. In a for loop, what are the 3 main parts that go into the parentheses?
//  * for (/*1. initialize varaibles*, 2 condition- shoulkd i run one moe time? 3 final code that we want run/) {
   // ...
//}
//  * 
//  * 3. Write a loop that logs the numbers 15 to 50 (inclusive) to the console.
//  we usally start at zero but this question is asking us to start at 15 and this loop will runn until i is less than or equal to 50 becuase 50 is inclusive
//* for (var i = 15; <= 50; i++){
//console.log(i)
//}
//  * 
//  * 4. Write a loop that logs the numbers 0 to 10 (inclusive) to the console, but if the number is 7, also log "It's your lucky day!"
 
// for(i = 0; i <= 10; i++ ) {
//     console.log(i)
//     if(i === 7){
//         console.log("its your lucky day")
//  }

// var numbersArr = [ 23, 64, 20, 33, 40, 100, 30, 50, 2]
// var petsArr = ["cat", "dog", "bird", "snake", "rabbit"]
// var users = [
//     {
// name: "joe",
// age: 30,
// },
// {
//     name: "steve",
//     age: 23
// },
// {
//     name: "sarah",
//     age: 39
// },
// {
//     name: "lisa",
//     age: 27
// }
// ] 
// for( var i = petsArr.length - 1; i >= 0; i-- ) {
//     console.log(petsArr[i])
//}

/* QUIZ
    1. What part of the for loop will allow you to access each individual item in an array?
    for(var i =0;)
    // numberArr[i]
    2. What part of the for loop will need the array's length in order to run the correct amount of iterations?
    for(var i = 0; < array.length) we would use name of array not just array
    3. Using the pets array, how would you write a for loop to console.log all of the pets with an "s" added to the end? Your console log's should be ( cats, dogs, birds, snakes, rabbits )
    for (var i = 0 < petsArr.length; i++) {
        console.log(petsArr[i] + "s")
    }
    4. Using the numbers array, how would you write a for loop to console log only the odd numbers?
    for (var i = 0; < numbersArr.length; i++){
        if(numberArr[i] % 2 === 0;){
console.log(numbrsArr[i])
        }
    }
    5. Using the users array, how would you write a for loop that would console log the following sentence for each user in the array. ("Hi, I am joe and I am 30 years old")
for(var i = 0; < users.length; i++){
    console.log(" hi, i am " + users [i].name + " and i am " + users[i].age + " years old')
}
    
    6. Using the pets array, how would you write a for loop that would console.log all the pets in
    reverse order? 
    for( var i = petsArr.length - 1; i >= i-- ){
        console.log(petsArr[i])
    }


// var arrayOfArrays = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// array of arrays usually called matrix or grid

// for(var i = 0; i < arrayOfArrays.length; i++){ how man times will this loop run? 3 times
// for(var j = 0; j < arrayOfArrays[j].length; j++){ how many times will this loop run? 9 times
//     console.log(arrayOfArrays[i][j])
// }
// }
// 1. console.log the number 6
//console.log(arrayOfArrays[1][2])

// 2. console.log the number 1
//console.log(arrayOfArrays[0][0])
// 3. console.log the number 9
//console.log( arrayOfArrays[2][2])

   // JS Array Methods

// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_array.asp

// push - adds item(s) to the end of the array
//var newFoodarr = arrOfFood.push("cereal")
//console.log(arryOfFoods)
// pop - removes item from the end of the array
//arrOfFood.pop()
    console.log(arrOfFoods)
// unshift - adds item(s) to the beginning of the array
//arrOfFoods.unshift("cereal")
    console.log(arrOfFoods)

// shift - removes item from the beginning of the array
  arrOfFoods.shift()
    console.log(arrOfFoods)


// concat makes two arrays one
var colors1 = ["blue", "green"]
    var colors2 = ["purple", "red"]
    colors1.concat(colors2)
var newArr = colors1.concat(color2)
console.log(newArr)

// indexOf finds  the number  where a certian item is
var pizzaIndex = arrOfFoods.indexOf("pizza")
    console.log(pizzaIndex)

// slice cuts certain parts out of the array
var newArr = arrOfFoods.slice(1, 3)
    console.log(newArr)


// join turns an array into a string
// turns our split array below back into a name and or string
var joinedName = splitName.join("")
// returns the name steve with dashes inbetween
var joinedName = splitName.join("-")
    console.log(joinedName)

//split gives us every letter in the string
var name = "steve"
    var splitName = name.split("")
    console.log(splitName)


// reverse revereses a string rick // kcir
//or we could split it into an array then reverese it
 var name = "rick" 
    var splitName = name.split("")
    var reversedArr = splitName.reverse()
    console.log(reversedArr)
    // now we can join it back togehter with join
    var reveresedName = reversedArr.join(')
    console.log(reversedName) = kcir
// 
// if we want to do this all at once to look cleaner
// var allAtOnce = name.split("").reverse().join("")
// console.log(allAtOnce) = kcir

// splice changes the origanl array, removes items from arry and can replace them
// var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]
    // cut out icecream and pizza- started at 2 and cut two items returned pancake pizza hambuger
    arrOfFoods.splice(2, 2)
    console.log(arrOfFoods)

 var result = arrOfFoods.splice(2, 2)
    console.log(result) returned the two cut out items


    //add items back where you spliced
    //added bacon and milk into the array to replace pizza and icecream
     arrOfFoods.splice(2, 2, "bacon", "milk")
    console.log(arrOfFoods)





//
//
'*/

//var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]
//global Function
// function doSomething () {
//     console.log("I'm doing something")
// }

// doSomething(); // this can be called directly

//method
// var someObj = {
//     name: "John",
//     age: 23,
//     speak: function (){
//     console.log("I'm speaking")
// }
// };

// someObj.speak(); // this has to be called as part of the object someObj
// var str = 'hello';
// var upperStr = str.toUpperCase();
// console.log(upperStr); //prints 'HELLO' to the console


// JS String Methods

// Methods are Functions 
// String Methods are pre-built by Javascript, so all you have to do is use them!
// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_string.asp


// toUpperCase & toLowerCase

// contat

// split

// slice

// indexOf



//var name = "luke"
// var upperCasedLuke = name.toUpperCase()
// console.log(upperCasedLuke)

// lowercase
// var lowerCaseLuke = upperCasedLuke.tolowerCase(
    
// adds an s to luke
// var s = s
//    var newName = name.concat(s)

// split turn string to an array
//var animal = "tiger"
//var charArray = animal.split("")

// takes away the g and gives us two array ti and er
//var charArray = animal.split("g")

//slice => cuts up a string
// var phoneNumber = "3866752633"
// var first3 = phoneNumber.slice(0,3)
// var next3 = phoneNumber.slice(3,6)
// var last4 = phoneNumber.slice(6)
// //console.log(last4)
// var newNum = first3 + "-" + next3 + "-" + last4 
// console.log(newNum)


// index of = i need to know where somethign is
// var city = "New York City"
// var indexOfC = city.indexOf("C")
// console.log(indexOfC)


