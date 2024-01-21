/*alert("Les débuts en JS !")
let title = document.getElementById("title")
console.log(title)
title.innerHTML = "IIM"
let image = document.getElementById("img")
image.src = "img/luffy.webp"*/

/*let title = document.querySelector("#main-title")
title.addEventListener("click", function() {
    console.log("J'ai cliqué sur le titre")
    if(this.classList.contains("red")) {
        this.classList.remove("red")
        console.log("classe retirée")
    } else {
        this.classList.add("red")
        console.log("classe ajoutée")
    }
})
*/
let accordions = document.querySelectorAll(".accordeon")
console.log(accordions)
accordions.forEach(function(item){
    item.addEventListener("click", function(){
        this.classList.toggle("open")
    })
})
/*
document.querySelectorAll("dark")
body.forEach(function(item){
    item.addEventListener("click", function(){
        this.classList.toggle("dark")
    })
})
*/
/*
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function myFunction() {
    var element = document.footer;
    element.classList.toggle("dark-mode2");
}
*/