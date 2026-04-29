/* Objetivo: Crear un juego de piedra, papel o tijeras. Pseudocodigo:
Crear una funcion llamada getComputerChoice que de la opcion de la maquina. 

 */
let sectionrps = document.querySelector("#betterRPS");
let btnScis, btnRock, btnPaper;
btnScis = document.createElement("button");
btnScis.textContent = "Scissors";
btnScis.setAttribute("id", "scissors")
sectionrps.appendChild(btnScis)
btnRock = document.createElement("button"); 
btnRock.textContent = "Rock";
btnRock.setAttribute("id", "rock");
sectionrps.appendChild(btnRock)
btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
btnPaper.setAttribute("id", "paper");
sectionrps.appendChild(btnPaper);

let result = document.createElement("div");
sectionrps.appendChild(result);
result.textContent = "Result:"
let options = [];
// TOTAL SCORES
    let drawScore = 0;
    let totalPartys = 0;
    let humanScore = 0;
    let computerScore = 0;
betterRPS.addEventListener("mouseup", (event) =>{
    if (humanScore < 5 && computerScore < 5){
    result.textContent = "";
    options = [];
    let hoption = event.target.id;
    let coption = getComputerChoice();
    options.push(hoption);
    options.push(coption);
    let target = event.target;
    switch (target.id) {
        case "scissors":
            result.textContent = "Result " + playRound(getHumanChoice("scissors"), coption);
            break;
        case "rock":
            result.textContent = "Result " + playRound(getHumanChoice("rock"), coption);
            break;

        case "paper":
            result.textContent = "Result " + playRound(getHumanChoice("paper"), coption);
            break;
    }
    } else if (humanScore === 5 || computerScore === 5){
        console.log("humanscore: " + humanScore + " and computerScore " + computerScore);
        result.textContent = computerScore>humanScore ? "First on Win 5 Matches!: Computer!" : "First on Win 5 Matches!: Human!";
        humanScore = 0;
        computerScore = 0;
    }
});

//Div for results





// Logica de opcion de computadora
function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else if (computerChoice === 3) {
        return "scissors";
    } else {
        console.log("function now working");
    }
}

// Ahora, la logica para la opcion del usuario

function getHumanChoice(humanChoice) {
    if (humanChoice === "" || humanChoice === undefined){
    humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    }
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper"
    } else if (humanChoice === "scissors") {
        return "scissors";
    } else {
        console.log("Enter a valid option");
    }
}

// Play single round
function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Human Wins with rock!");
        humanScore++;
        totalPartys++;
        return "Human Wins with rock!";
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("Humans wins with paper!");
        humanScore++;
        totalPartys++;
        return "Humans wins with paper!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Human wins with Scissors!")
        humanScore++;
        totalPartys++;
        return "Human wins with Scissors!";
    } else if(computerChoice === "rock" && humanChoice === "scissors"){
        console.log("Computers wins with rock!");
        computerScore++;
        totalPartys++;
        return "Computers wins with rock!";
    } else if (computerChoice === "paper" && humanChoice === "rock"){
        console.log("Computer wins with paper!");
        computerScore++;
        totalPartys++;
        return "Computer wins with paper!";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer wins with scissors!")
        computerScore++;
        totalPartys++;
        return "Computer wins with scissors!";
    } else if (computerChoice === humanChoice) {
        totalPartys++;
        drawScore++;
        console.log("DRAW with " + options[0]);
        return "DRAW with " + options[0];
    } else {
        console.log("bad use");
    }
}


// single round
// la logica detras de una ronda me tiene pensante y eso que es facil xd, quizas es solo paralisis por analisis. La cosa es que, si el usuario saca una mano favorable, entonces usuario gana, si computerChoice saca una mano favorable entonces gana, como hago eso?. creo que no hay forma "simple" o limpia, sera con muchos if else. No buscare en google, pq quiero hacerlo yo.
//
    // Desde aca
    /* old code 
    let roundwinner = playRound(getHumanChoice(), getComputerChoice());        
        if(roundwinner === "Human wins"){
            humanScore++
            totalPartys++;
            console.log("Human wins");
        } else if (roundwinner === "Computer wins"){
            computerScore++;
            totalPartys++;
            console.log("Computer wins");
        } else if (roundwinner === "DRAW"){
            console.log("DRAW");
            totalPartys++;
        } else {
            console.log("Maybe this is not working");
        }
    }
    */


   /* top wants to avoid the playgame (5 rounds) logic fow now
function playGame(){
    let drawScore = 0;
    let totalPartys = 0;
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Human Wins with rock!");
        humanScore++;
        totalPartys++;
        return "Human wins";
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("Humans wins with paper!");
        humanScore++;
        totalPartys++;
        return "Human wins";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Human wins with scissors!")
        humanScore++;
        totalPartys++;
        return "Human wins";
    } else if(computerChoice === "rock" && humanChoice === "scissors"){
        console.log("Computers wins with rock!");
        computerScore++;
        totalPartys++;
        return "Computer wins";
    } else if (computerChoice === "paper" && humanChoice === "rock"){
        console.log("Computer wins with paper!");
        computerScore++;
        totalPartys++;
        return "Computer wins";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer wins with scissors!")
        computerScore++;
        totalPartys++;
        return "Computer wins";
    } else if (computerChoice === humanChoice) {
        totalPartys++;
        drawScore++;
        console.log("DRAW");
        return "DRAW";
    } else {
        console.log("bad use");
    }
}
        for(let r = 1; r <= 5; r++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore === computerScore){
        console.log("the party has ended on DRAW! " + "Human:" + humanScore + " and computer:" + computerScore + " On a total of:" + totalPartys + " Partys! and:" + drawScore + " draws!");
    } else if(humanScore < computerScore) {
        console.log("The Computer WIN " + computerScore + "/" + totalPartys);
    } else if(humanScore > computerScore) {
        console.log("The Human WINS " + humanScore + "/" + totalPartys);
    }
    }
*/
