function revealScore(){
    const score = localStorage.score;
    const placement = document.getElementById("scoreLocation");
    
    var newElement = document.createElement("p");
    if(localStorage.score != undefined){
        newElement.innerHTML = score;
    }
    else{
        newElement.innerHTML = "you have not completed the previous quiz.";
    }
    
    var ali = document.createElement("p");
    if(score >= 15){
        ali.innerHTML = "you are an Attendance Super Star Ali!";
    }
    else if(score >= 9){
        ali.innerHTML = "you are an Aspiring Ali.";
    }
    else if(score >= 0){
        ali.innerHTML = "you are Not Quite Ali.";
    }
    else{
        ali.innerHTML = "please complete the quiz so we may determine how much of an Ali you are."
    }
    
    placement.appendChild(newElement);
    placement.appendChild(ali);
}

document.addEventListener("DOMContentLoaded", function(){
    revealScore();
})
