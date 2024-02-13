const VARIANTS = ["rock", "paper", "scissors"];
const ROUNDS = 5;

let roundsPlayed = 0;

let playerScore = 0;
let computerScore = 0;

getPlayerChoice();

function getPlayerChoice()
{
    let playerChoice = ""; 
    
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        playerChoice = "rock";

        countScore(playerChoice);
        if(roundsPlayed === ROUNDS)
        {
            printWinner();
        }
    });

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        playerChoice = "paper"

        countScore(playerChoice);
        if(roundsPlayed === ROUNDS)
        {
            printWinner();
        }
    });

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        playerChoice = "scissors"

        countScore(playerChoice);
        if(roundsPlayed === ROUNDS)
        {
            printWinner();
        }
    });
}
function generateComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = VARIANTS[randomNumber];
    return computerChoice;
} 

function playRound(playerChoice)
{
    computerChoice = generateComputerChoice();
    
    if(computerChoice === "rock" && playerChoice === "paper" || computerChoice === "paper" && playerChoice === "scissors" || computerChoice === "scissors" && playerChoice === "rock")
    {
        return "Player won!";
    }
    else if(computerChoice === playerChoice)
    {
        return "Tie!";
    }
    else
    {
        return "Computer won!";
    } 
}

function countScore(playerChoice)
{
    const winner = playRound(playerChoice);
    roundsPlayed += 1;
    console.log(winner)
    if(winner === "Player won!")
    {
        playerScore += 1;

        const playerScoreboard = document.querySelector('#player');
        playerScoreboard.textContent = `Player: ${playerScore}`;
    }
    else if(winner === "Computer won!")
    {
        computerScore += 1;

        const computerScoreboard = document.querySelector('#computer');
        computerScoreboard.textContent = `Computer: ${computerScore}`;
    }

}

function printWinner()
{  
    const winnerMessage = document.querySelector('#winner');
    
    if(playerScore > computerScore)
    {
        winnerMessage.textContent = `Player win the game!`;
        winnerMessage.style.display = "block";
    }
    else if(computerScore > playerScore)
    {
    winnerMessage.textContent = `Computer win the game!`;
    winnerMessage.style.display = "block";
    }
    else
    {
        winnerMessage.textContent = `Tie!`;
        winnerMessage.style.display = "block";
    }
}
