console.log("JS file is connected");

let title = document.getElementById("question");
let awesome = document.getElementById("type_of_awesome");

console.log(title);
console.log(awesome);

let buttons = document.querySelectorAll("#type_of_awesome");
console.log(buttons);

buttons.forEach(function(button){
    button.addEventListener("click", function(){

        let output = document.getElementById("output_message"); 
        output.textContent = "wow that is awesome";
})
})