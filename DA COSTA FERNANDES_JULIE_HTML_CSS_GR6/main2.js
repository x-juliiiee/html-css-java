/*Le js pour le formulaire*/
let form = document.querySelector("form")
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Envoi du form detecté !")
})
form.addEventListener('submit', function(event){
    event.preventDefault();

    let email = document.querySelector("#email")

    if(email.value == '') {
        console.log("invalide")
    } else {
        email.classList.add("success")
    } 
})
