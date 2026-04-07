console.log("is my JS file still connected?");

let title = document.getElementById("question");
let Q1 = document.getElementById("question_1");
let Q2 = document.getElementById("question_2");
let Q3 = document.getElementById("question_3")
let Q4 = document.getElementById("question_4")
let Q5 = document.getElementById("question_5")

console.log(title);
let userAnswers = {}

let buttonsQ1 = document.querySelectorAll("#question_1 button");
buttonsQ1.forEach(function(button){
    button.addEventListener("click", function(){

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
buttonsQ2.forEach(function(button){
    button.addEventListener("click", function(){

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
buttonsQ3.forEach(function(button){
    button.addEventListener("click", function(){

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
buttonsQ4.forEach(function(button){
    button.addEventListener("click", function(){

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
buttonsQ5.forEach(function(button){
    button.addEventListener("click", function(){

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

        if (total === 5)  { output.innerHTML = "Your Stand is: Stone Free<br> <img src='Stand_Images/Stone_Free.jpg' alt='Stone_Free'>"; }
        else if (total === 6)  { output.innerHTML = "Your Stand is: Star Platinum <br> <img src='Stand_Images/STAR_PLATINUM.webp' alt='STAR_PLATINUM'/>"; }
        else if (total === 7)  { output.innerHTML= "Your Stand is: Tusk<br> <img src='Stand_Images/Tusk.webp' alt='Tusk'/>"; }
        else if (total === 8)  { output.innerHTML = "Your Stand is: Killer Queen<br> <img src='Stand_Images/Killer_Queen.png' alt='Killer_Queen'/>"; }
        else if (total === 9)  { output.innerHTML = "Your Stand is: Soft and Wet<br> <img src='Stand_Images/Soft_and_Wet.webp' alt='Soft_and_Wet'/>"; }
        else if (total === 10) { output.innerHTML = "Your Stand is: Sticky Fingers<br> <img src='Stand_Images/StickyFingers.webp' alt='StickyFingers'/>"; }
        else if (total === 11) { output.innerHTML = "Your Stand is: The World<br> <img src='Stand_Images/Za_WORLDO.webp' alt='The_World'/>"; }
        else if (total === 12) { output.innerHTML = "Your Stand is: Eclipse 8<br> <img src='Stand_Images/Eclipse_Eight.png' alt='Eclipse_Eight'/>"; }
        else if (total === 13) { output.innerHTML = "Your Stand is: Echos<br> <img src='Stand_Images/Echos_Act_Three.webp' alt='Echos'/>"; }
        else if (total === 14) { output.innerHTML = "Your Stand is: Love Deluxe<br> <img src='Stand_Images/Love_Deluxe.webp' alt='Love Deluxe'/>"; }
        else if (total === 15) { output.innerHTML = "Your Stand is: Dirty Deeds Done Dirt Cheap<br> <img src='D4C.jpg' alt='Dirty Deeds Done Dirt Cheap'/>"; }
        else if (total === 16) { output.innerHTML= "Your Stand is: Gold Experience<br> <img src='Stand_Images/Gold_Experience.png' alt='Gold_Experience'/>"; }
        else if (total === 17) { output.innerHTML= "Your Stand is: C-Moon<br> <img src='Stand_Images/C-Moon.png' alt='C-Moon'/>"; }
        else if (total === 18) { output.innerHTML= "Your Stand is: Made in Heaven<br> <img src='Stand_Images/Made_In_Heaven.jpg' alt='Made_In_Heaven'/>"; }
        else if (total === 19) { output.innerHTML = "Your Stand is: Moody Blues<br> <img src='Stand_Images/Moody_Blues.png' alt='Moody_Blues'/>"; }
        else if (total === 20) { output.innerHTML = "Your Stand is: Crazy Diamond<br> <img src='Stand_Images/Crazy_Diamond.webp' alt='Crazy_Diamond'/>";}
    }
}
