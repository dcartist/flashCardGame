let drinks = [
    {name:"Old Fashioned 0" ,image: "img.jpg", style: "Stirred", ingredients: "Sugar, water, bitters, whiskey"},
    {name:"Old Fashioned 1" ,image: "img.jpg", style: "Stirred", ingredients: "Sugar, water, bitters, whiskey"},
    {name:"Old Fashioned 2" ,image: "img.jpg", style: "Stirred", ingredients: "Sugar, water, bitters, whiskey"},
    {name:"Old Fashioned 3" ,image: "img.jpg", style: "Stirred", ingredients: "Sugar, water, bitters, whiskey"},
    {name:"Old Fashioned 4" ,image: "img.jpg", style: "Stirred", ingredients: "Sugar, water, bitters, whiskey"},

]

let cards = document.querySelectorAll(".card")
// console.log(cards)



// element.addEventListener("click", myFunction);

// function myFunction() {
//   console.log("Hello World!");
//   console.log(this)
// }

function myFunction(e) {
    // e.preventDefault()
    // console.log(this)
    console.log(this.classList[1])

      if (this.classList[1] === "back") {
        this.childNodes[1].style.display = "block"
        this.childNodes[0].style.display = "none";
        this.className = "card front"
      } 
       else  if (this.classList[1] === "front") {
        this.childNodes[0].style.display = "block";
        this.childNodes[1].style.display = "none"
        this.className = "card back"
      } 
  }


for (let i=0; i< cards.length; i++){
    cards[i].addEventListener("click", myFunction)
    // console.log(cards[i])
    let frontDiv = document.createElement("div")
    frontDiv.classList.add("front")
    let frontinfo = document.createTextNode(drinks[i].name)
    frontDiv.appendChild(frontinfo)
    let backDiv = document.createElement("div")
    let backinfo = document.createTextNode(drinks[i].style)
    backDiv.classList.add("back")
    backDiv.style.display = "none"
    backDiv.appendChild(backinfo)
    cards[i].classList.add("front")
    cards[i].appendChild(frontDiv)
    cards[i].appendChild(backDiv)
    console.log( cards[i].childNodes[1])
    
    // let additional = document.createTextNode((drinks[i].name))
    // cards[i].appendChild(additional)

}
// function myFunction(e) {
//     e.preventDefault()
//     console.log("Hello World!");
//     console.log(this)
//   }