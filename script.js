// An array for possible variant
const variant = ["rock", "paper", "scissors"];
const times = 5;

// Function that control game flow
function playGame(times)
{
    // Variables for counting points
    let userPoints = 0;
    let computerPoints = 0;
    
    // Loop for controlling number of rounds
    for(let i = 1; i <= times; i++)
    {
      let result = playRound();
       
      if(result === "User win")
      {
        userPoints += 1;
      }
      else if(result === "Computer win")
      {
        computerPoints += 1;
      }
    }

    if(userPoints > computerPoints)
    {
        console.log("User won the game!");
    }
    else if(computerPoints > userPoints)
    {
        console.log("Computer won the game!");
    }
    else
    {
        console.log("The game ends with tie!");
    }
        
}

//

// Play the game
console.log(playGame(times));


// Function for handling user`s prompt
function getUsersChoice()
{
    // Get user`s prompt
    let userChoice = prompt("Choose rock, paper or scissors");

    // Verify correctness of the user`s prompt
    if(checkPrompt(userChoice) === true)
    {
        return userChoice.toLowerCase();
    }
    else 
    {
        return false;
    }
    // Create a function for verifying user`s prompt
    function checkPrompt(userChoice)
    {
        // Set user`s prompt to lower
        userChoice = userChoice.toLowerCase();
        
        // Compare prompt to possible options
        let isCorrect = false;
        for(let i = 0; i < variant.length; i++)
        {
            if(userChoice === variant[i])
            {
                isCorrect = true;
            }
        }
        if(isCorrect === false)
        {
            console.log("Your prompt is invalid. Check it and try again.");
            return false;
        }
        else 
        {
            return true;
        }
        
    }

}
// Function for a random pick of rock, paper or scissors
function getComputerChoice()
{
    // Choose random variant from possible
    let answer = Math.floor(Math.random() * variant.length);
    
    // Return answer
    return variant[answer];
}

// Compare answers from user and computer
function getResult(userChoice, computerChoice)
{
    if(computerChoice === userChoice)
    {
        return "Tie!";
    }
    else if(computerChoice === "rock" && userChoice === "paper" || computerChoice === "scissors" && userChoice === "rock" || computerChoice === "paper" && userChoice === "")
    {
        return "User win!"
    }
    else 
    {
        return "Computer win!"
    }
}

// Function for playing rounds
function playRound()
{
        // Ask players for their choice
        let userChoice =  getUsersChoice();
        let computerChoice = getComputerChoice();
        
        // Compare their answer
        console.log(getResult(userChoice, computerChoice));

        // Assign the point to the victor
        let result = getResult(userChoice, computerChoice);
        if( result === "User win!")
        {
            return "User win";
        }
        else if (result === "Computer win!")
        {
            return "Computer win";
        }  
        else
        {
            return "Tie";
        }

}