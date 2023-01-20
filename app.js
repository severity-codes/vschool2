var names = document.getElementsByClassName("name")
for (var i = 0; i < names.length; i++) {
    console.log(names[i].innerText)
}
//question michael


// querySelector
// Select a single element from the page.
//(Returns the first element it finds that matches the query)
var result = document.querySelector("#favorite-things")
console.log(result)
//#favorite thigns is bassically returnong an id like in css

// querySelectorAll
// Select all elements from the page that match the query.

var result = document.querySelectorAll("#favorite-things")
console.log(result)


var result = document.querySelectorAll(".favorite-things")
console.log(result.length)
//returns 0 becuase there is no class named favorite thigns


//var result = document.querySelector("ol#favorite-things > li")
console.log(result)
//returns the first list item in the ol with the id favorite things qurey selctor will alwys return first element


var result = document.querySelectorAll("ol#favorite-things > li")
console.log(result)
//returns a node list=array

var result = document.querySelectorAll("ol#favorite-things > li")
console.log(Array.from(result))
//returns an actuall array  

for (var i = 0; i < result.length; i++) {
    result[i].textContent = "** REDACTED **"
}
//forloop that changes all the content on the dom to say redacted


// innerHTML - security risk
// innerText - "expensive" means takes a long time
// textContent is the best way to access text

//var person = {name: "Joe"}
//person.name = "Jim"
//console.log(person)

/**
 * 1. Select the h1 element
 * 2. Save the h1 element's text to a variable
 * 3. Change the paragraph element's text to be the same as the text inside the h1
 */


//document.addEventListener('DOMContentLoaded', e => {
const h1 = document.querySelector("h1")

//h1.innerText = "Hello Bitches"
//})
// select the h1 by a class, id, or even tag name
// in this example, i'm just selecting it by tag name


var text = document.querySelector("#header").textContent
//selected h1 by query selector
document.querySelector("#ptag").textContent = text
// changed the paragraph to match h1 by id

//methods are called with parentheses 

//var newLi = document.createElement("li")
//newLi.textContent = "3"
//var myList = document.getElementById("my-list")
//myList.append(newLi)
// added a new list item if we used prepend instead of append it would of added 3 to top of list

//Add a paragraph after the existing unordered list with any text you want inside.
//* Do this completely in JavaScript!

//var newP = document.createElement("p")
//newP.textContent = "V School rocks!"
//document.body.append(newP)
//newP.style.textAlign = "center" //centered paragraph
//newP.style.fontSize = "30px" //changed font soze of paragraph
//newP.style.color = "pink" //changed color by myself

var header = document.querySelector("#head2")
console.log(typeof head2.style)
// this is a nested object

var header = document.querySelector("#head2")
console.log(Object.keys(head2.style))
//this console logs all the different styles you can use

head2.style.color = "pink"
head2.style.backgroundColor = "blue"
head2.style.fontSize = "20px"

//changed h1 to pink
// fontSize
// backgroundColor
// display
// textAlign
// margin, padding, border

document.body.style.backgroundColor = "pink"

// className
var className = document.querySelector("#head2").className
console.log(className)

// classList
document.querySelector("#head2").classList.add("new-class")
console.log(document.querySelector("#header").className)
//added more classes to acsess
document.querySelector("#head2").classList.remove("another")
console.log(document.querySelector("#head2").className)
//removed another from the class list

var inputBox = document.getElementById("text-input")
inputBox.value = "CHANGED!"
console.log(inputBox.value)
//changing the wording in the input box

// method below we call with parentheses and string with tag name

var newLi = document.createElement("li")
newLi.textContent = "3"
var myList = document.getElementById("my-list")
myList.append(newLi)

var newP = document.createElement("p")
newP.textContent = "V School rocks!"
document.body.append(newP)
newP.style.textAlign = "center" //centered paragraph
newP.style.fontSize = "30px" //changed font soze of paragraph
newP.style.color = " blue" //changed color by myself

//innerhtml vs text content
var myList = document.getElementById("my-list")
console.log(myList.textContent)
// above logs text content only below logs html and list content
console.log(myList.innerHTML)
myList.innerHTML += "<li>4</li>"
// added a 4 to end of list just like append does
document.body.innerHTML += "<p id='paragraph'>V School rocks!</p>"
document.getElementById("paragraph").style.textAlign = "center"
//added a paragraph to end of list like appwnd using += and body and p
// and styles it by id

var powerRangers = [
    "Jason Lee Scott",
    "Kimberly Hart",
    "Zack Taylor",
    "Trini Kwan",
    "Billy Cranston",
    "Biotch"
]




var rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) {
    var newName = document.createElement("li")
    newName.textContent = powerRangers[i]
    rangersList.append(newName)
}

// forloop to append all the names in the list above
// can add any name to above list and will show on page
// can also do this by using innerHtml like for (var i = 0; i < powerRangers.length; i++) {
// rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
//} still a for loop


document.getElementById("header1").innerHTML = "serenity is queen"
document.getElementById("header1").style.color = "blue"
//changed the color too by myself yeet
// changed my h1 to serenity is queen


document.addEventListener('DOMContentLoaded', e => {

    const h1 = document.querySelector("header2")

    header2.innerText = "This is a bitch"
})
// select the h1 by a class, id, or even tag name
// in this example, i'm just selecting it by ID name

var list = document.getElementsByClassName("list-items");
list[0].innerHTML = "Hello World!";



var result = document.querySelectorAll("ul#navbar > li")
console.log(result)
//returns a node list=array

var result = document.querySelectorAll(".navbar > li")
console.log(Array.from(result))


for (var i = 0; i < result.length; i++) {
    result[i].textContent = "** REDACTED **"
}

//returns an actuall array  


document.querySelector('#consolelog').addEventListener('click', function () {
    console.log(document.querySelector("#box").value);
    document.getElementById("mypara").innerText = document.querySelector("#box").value;
    document.querySelector("#box").value = '';
    document.querySelector("#box").focus();
   

})
// line221 made my input box log a new paragraph to the page
// after hitting submit focus made the message dissapear afmade my input submit to the console event listener does soemtning everytime and event happens


