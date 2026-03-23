console.log("is my JS file still connected?");

let title = document.getElementById("question");
let awesome = document.getElementById("type_of_awesome");

console.log(title);
console.log(awesome);

let buttons = document.querySelectorAll("#type_of_awesome button");
console.log(buttons);

let userAnswers = {}
buttons.forEach(function(button){
    button.addEventListener("click", function(){

        let buttonID = button.dataset.buttonid
        let response = button.dataset.awesome;
  
        userAnswers[buttonID] = response;
        console.log(userAnswers);

        let awesome = button.getAttribute("data-awesome");
        console.log(awesome)
        let output = document.getElementById("output-message");

        if(awesome === "selfawesome") {
            output.textContent = "this is the awseome quiz it is super cool and will tell you a lot about yourself";
        } else if (awesome === "quizofawesome") {
            output.textContent = "this is the quiz of awseome it will show you how to be awseome and how not to be awesome";
        } else if (awesome === "whatawesome") {
            output.textContent = "this is the quiz about awseome it will tell you what is awesome and what isn't";
        } else if (awesome === "superawesome") {
            output.textContent = "this is the super awseome quiz it will tell you what it takes to be super awesome";
        }
    });
});