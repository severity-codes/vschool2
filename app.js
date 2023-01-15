var things = document.getElementsByClassName("name")
for (var i = 0; i < things.length; i++){
    console.log(things[i].innerText)
} //quesrtion michael
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


