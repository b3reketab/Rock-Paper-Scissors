let getComputerChoice = function() {
    if (Math.random() <= 0.3) return 'rock';
    else if(Math.random() >= 0.6) return 'paper';
    else return 'scissors';
};
let result = '';
let playerScore = 0;
let computerScore = 0;
function playRound(player, computer) {
    if (player == computer) {
        result = "It's a tie!";
        return result + `  player: ${playerScore} - computer: ${computerScore}`;
    } else if (player == 'rock') {
        if (computer == 'scissors') {
            result = `${player} beats ${computer}.`;
            playerScore++;
            return result + `  player: ${playerScore} - computer: ${computerScore}`;
        }
        if (computer == 'paper') {
            result = `${computer} beats ${player}.`;
            computerScore++;
            return result + `  player: ${playerScore} - computer: ${computerScore}`;
        }
    } else if (player == 'paper') {
        if (computer == 'scissors') {
            result = `${computer} beats ${player}.`;
            computerScore++;
            return result + `  player: ${playerScore} - computer: ${computerScore}`;
        }
        if (computer == 'rock') {
            result = `${player} beats ${computer}.`;
            playerScore++;
            return result + `  player: ${playerScore} - computer: ${computerScore}`;
        }
    } else if (player == 'scissors') {
        if (computer == 'paper') {
            result = `${player} beats ${computer}.`;
            playerScore++;
            return result + `  player: ${playerScore} - computer: ${computerScore}`;
        }
        if (computer == 'rock') {
            result = `${computer} beats ${player}.`;
            computerScore++;
            return result + `  player: ${playerScore} - computer: ${computerScore}`;
        }
    } else return 'Invalid input!';
}
function game() {
    for (let i = 1; i <= 5; i++) {
        const player = prompt('ENTER YOUR CHOICE: ', );
        const computer = getComputerChoice();
        console.log([i] + '. ' + playRound(player, computer));
    }
    if (playerScore > computerScore) return console.log(`Congratulations! you win.`);
        else return console.log(`Computer wins!`);
}
game();