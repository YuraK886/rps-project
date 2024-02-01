const VARIANTS = ["rock", "paper", "scissors"];
const ROUNDS = 3;

console.log(playGame(ROUNDS));


function promptVerification ()
{
    let playerChoice = prompt("Rock, paper or scissors?");
    playerChoice = playerChoice.toLowerCase();

    for(let i = 0; i < VARIANTS.length; i++)
    {
        if(playerChoice === VARIANTS[i])
        {
            return playerChoice;
        }
    }

    console.error("Ivalid asnwer.Check your input.");
    return false;
}

function generateComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = VARIANTS[randomNumber];
    return computerChoice;
} 

function playRound()
{
    computerChoice = generateComputerChoice();
    playerChoice = promptVerification();

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

function playGame(rounds)
{
    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 1; i <= rounds; i++)
    {
        let winner = playRound();
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

