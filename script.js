const VARIANTS = ["rock", "paper", "scissors"];
const ROUNDS = 1;
playerChoice()

function playerChoice()
{
    let playerChoice = ""; 
    
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        playerChoice = "rock";
        console.log(playGame(ROUNDS, playerChoice));
    });

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        playerChoice = "paper"
        console.log(playGame(ROUNDS, playerChoice));
    });

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        playerChoice = "scissors"
        console.log(playGame(ROUNDS, playerChoice));
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

function playGame(rounds, playerChoice)
{
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 1; i <= rounds; i++)
    {
        let winner = playRound(playerChoice);
        console.log(winner);

        if(winner === "Player won!")
        {
            playerScore += 1;
        }
        else if(winner === "Computer won!")
        {
            computerScore += 1;
        }
    }
    
    if(playerScore > computerScore)
    {
        return "Player won the game";
    }
    else if(computerScore > playerScore)
    {
        return "Computer won the game";
    }
    else
    {
        return "Tie";
    }
}

