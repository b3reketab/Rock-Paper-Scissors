let getComputerChoice = function() {
    if (Math.random() <= 0.3) return 'rock';
    else if(Math.random() >= 0.6) return 'paper';
    else return 'scissors';
};
let playerScore = 0;
let computerScore = 0;
const result = document.querySelector('#result');
const score = document.querySelector('#score');
function playRound(player, computer) {
    if (player == computer) {
        result.textContent = "It's a tie!";
        score.textContent = `  player: ${playerScore} - ${computerScore} :computer`;
    } else if (player == 'rock') {
        if (computer == 'scissors') {
            result.textContent = `${player} beats ${computer}.`;
            playerScore++;
            score.textContent = `  player: ${playerScore} - ${computerScore} :computer`;
        }
        if (computer == 'paper') {
            result.textContent = `${computer} beats ${player}.`;
            computerScore++;
            score.textContent = `  player: ${playerScore} - ${computerScore} :computer`;
        }
    } else if (player == 'paper') {
        if (computer == 'scissors') {
            result.textContent = `${computer} beats ${player}.`;
            computerScore++;
            score.textContent = `  player: ${playerScore} - ${computerScore} :computer`;
        }
        if (computer == 'rock') {
            result.textContent = `${player} beats ${computer}.`;
            playerScore++;
            score.textContent = `  player: ${playerScore} - ${computerScore} :computer`;
        }
    } else if (player == 'scissors') {
        if (computer == 'paper') {
            result.textContent = `${player} beats ${computer}.`;
            playerScore++;
            score.textContent = `  player: ${playerScore} - ${computerScore} :computer`;
        }
        if (computer == 'rock') {
            result.textContent = `${computer} beats ${player}.`;
            computerScore++;
            score.textContent = `  player: ${playerScore} - ${computerScore} :computer`;
        }
    } else result.textContent = 'Invalid input!';
}
const btnroc = document.querySelector('#btn1');
const btnpap = document.querySelector('#btn2');
const btnsciss = document.querySelector('#btn3');

btnroc.addEventListener('click', () => {
    player = 'rock';
    let computer = getComputerChoice();
    playRound(player, computer);
});
btnpap.addEventListener('click', () => {
    player = 'paper';
    let computer = getComputerChoice();
    playRound(player, computer);
});
btnsciss.addEventListener('click', () => {
    player = 'scissors';
    let computer = getComputerChoice();
    playRound(player, computer);
});

