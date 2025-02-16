
var popupBlank  = document.querySelector(".popup-blank")
var popupCard = document.querySelector(".popup-card")

function show() {
    popupBlank.style.display = "block"
    popupCard.style.display = "block"
}
 
function cancel() {
    popupBlank.style.display = "none"
    popupCard.style.display = "none"
}

var add = document.getElementById("added")
var containerCard = document.querySelector(".container")
var bookTitle = document.getElementById("book_title")
var bookAuthor = document.getElementById("book_author")
var description = document.getElementById("description")

add.addEventListener("click", function() {
    var div = document.createElement("div")
    div.setAttribute("class", "container-card")
    div.innerHTML = `<h1>${bookTitle.value} </h1>
            <h3>${bookAuthor.value} </h3>
            <p>${description.value} </p>
            <button onclick="deleted(event)">Delete</button>`
    containerCard.append(div)
    popupBlank.style.display = "none"
    popupCard.style.display = "none"
})

function deleted(event) {
    event.target.parentElement.remove()
}