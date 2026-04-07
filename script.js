console.log("is my JS file still connected?");

let title = document.getElementById("question");
let Q1 = document.getElementById("question_1");
let Q2 = document.getElementById("question_2");
let Q3 = document.getElementById("question_3")
let Q4 = document.getElementById("question_4")
let Q5 = document.getElementById("question_5")

console.log(title);
console.log(Q1);



let userAnswers = {}

let buttonsQ1 = document.querySelectorAll("#question_1 button");
buttonsQ1.forEach(function(button) {
    button.addEventListener("click", function() {

        buttonsQ1.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        let value = parseInt(button.dataset.awesome);
        userAnswers["1"] = value;
        console.log("Q1 answered:", value);
        checkTotal();
    });
});

let buttonsQ2 = document.querySelectorAll("#question_2 button");
buttonsQ2.forEach(function(button) {
    button.addEventListener("click", function() {

        buttonsQ2.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        let value = parseInt(button.dataset.awesome);
        userAnswers["2"] = value;
        console.log("Q2 answered:", value);
        checkTotal();
    });
});

let buttonsQ3 = document.querySelectorAll("#question_3 button");
buttonsQ3.forEach(function(button) {
    button.addEventListener("click", function() {

        buttonsQ3.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        let value = parseInt(button.dataset.awesome);
        userAnswers["3"] = value;
        console.log("Q3 answered:", value);
        checkTotal();
    });
});


let buttonsQ4 = document.querySelectorAll("#question_4 button");
buttonsQ4.forEach(function(button) {
    button.addEventListener("click", function() {

        buttonsQ4.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        let value = parseInt(button.dataset.awesome);
        userAnswers["4"] = value;
        console.log("Q4 answered:", value);
        checkTotal();
    });
});


let buttonsQ5 = document.querySelectorAll("#question_5 button");
buttonsQ5.forEach(function(button) {
    button.addEventListener("click", function() {

        buttonsQ5.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        let value = parseInt(button.dataset.awesome);
        userAnswers["5"] = value;
        console.log("Q5 answered:", value);
        checkTotal();
    });
});

function checkTotal() {
    console.log("Current answers:", userAnswers);

    if (Object.keys(userAnswers).length === 5) {
        let total = Object.values(userAnswers).reduce((sum, val) => sum + val, 0);
        console.log("Final total:", total);

        let output = document.getElementById("output-message");

        if (total === 5)  { output.textContent = "Your Stand is: Stone Free"; }
        else if (total === 6)  { output.textContent = "Your Stand is: Star Platinum"; }
        else if (total === 7)  { output.textContent = "Your Stand is: Wonder of U"; }
        else if (total === 8)  { output.textContent = "Your Stand is: C-Moon"; }
        else if (total === 9)  { output.textContent = "Your Stand is: Burning Down The House"; }
        else if (total === 10) { output.textContent = "Your Stand is: Diver Down"; }
        else if (total === 11) { output.textContent = "Your Stand is: Tusk"; }
        else if (total === 12) { output.textContent = "Your Stand is: Dirty Deeds Done Dirt Cheap"; }
        else if (total === 13) { output.textContent = "Your Stand is: Made in Heaven"; }
        else if (total === 14) { output.textContent = "Your Stand is: The World"; }
        else if (total === 15) { output.textContent = "Your Stand is: Killer Queen"; }
        else if (total === 16) { output.textContent = "Your Stand is: Echos"; }
        else if (total === 17) { output.textContent = "Your Stand is: King Crimson"; }
        else if (total === 18) { output.textContent = "Your Stand is: Golden Experience"; }
        else if (total === 19) { output.textContent = "Your Stand is: Sticky Fingers"; }
        else if (total === 20) { output.textContent = "Your Stand is: Moody Blues"; }
    }
}