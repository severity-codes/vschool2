var things = document.getElementsByClassName("name")
for (var i = 0; i < things.length; i++){
    console.log(things[i].innerText)
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

for (var i = 0; i< result.length; i++) {
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
   