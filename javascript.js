let playerPoints=0;
let computerPoints=0;

        function getComputerChoice() {
           const randomOption = Math.floor(Math.random()*3);
            if (randomOption === 0) {
                return('Rock');
            }

            else if (randomOption === 1) {
                return('Paper');

            }

            else if (randomOption === 2) {
                return('Scissors');

            }
        }

        function playRound(playerSelection, computerSelection) {
            if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper') {
                ++computerPoints
                let message = 'You Lose! Paper beats rock!';
                return(message);
            }

            else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors') {
                ++computerPoints
                let message = 'You Lose! Scissors beats paper!';
                return(message);
            }

            else if (playerSelection.toLowerCase() == 'scissors' & computerSelection == 'Rock') {
                ++computerPoints
                let message = 'You Lose! Rock beats scissors!';
                return(message);
            }

            else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors') {
                ++playerPoints;
                let message = 'You Win! Rock beats scissors!';
                return(message);
            }

            else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
                ++playerPoints;
                let message = 'You Win!! Paper beats rock!';
                return(message);
            }

            else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper') {
                ++playerPoints;
                let message = 'You Win! Scissors beats paper!';
                return(message);
            }

            else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
                let message = 'Draw!';
                return(message);
            }
        }

            function game() {
                const container = document.querySelector('#container');
                const scores = document.querySelector('#scores');
                const win = document.querySelector('#win');
                
                
                const rock = document.querySelector('#rock');
                rock.addEventListener('click', () => {
                    let computerSelection = getComputerChoice();
                    container.textContent = playRound('rock', computerSelection);
                    scores.textContent = gameScore(playerPoints, computerPoints);
                    win.textContent = checkForWin(playerPoints, computerPoints);
                });

                const paper = document.querySelector('#paper');
                paper.addEventListener('click', () => {
                    let computerSelection = getComputerChoice();
                    container.textContent = playRound('paper', computerSelection);
                    scores.textContent = gameScore(playerPoints, computerPoints);
                    win.textContent = checkForWin(playerPoints, computerPoints);
                });

                const scissors = document.querySelector('#scissors');
                scissors.addEventListener('click', () => {
                    let computerSelection = getComputerChoice();
                    container.textContent = playRound('scissors', computerSelection);
                    scores.textContent = gameScore(playerPoints, computerPoints);
                    win.textContent = checkForWin(playerPoints, computerPoints);
                });

                const restart = document.querySelector('#restart')
                restart.addEventListener('click', () => {
                    playerPoints = 0;
                    computerPoints = 0;
                    scores.textContent = gameScore(playerPoints, computerPoints)
                });
            }
            

            function gameScore (playerScore, computerScore) {
                    return("Your score: " + playerScore + " " + "Computer score: " + computerScore)
            }

            function checkForWin (playerScore, computerScore) {
                if (playerScore >= 5) {
                    return("You've won the game! Would you like to play again?")
                }

                else if (computerScore >= 5) {
                    return("You've lost the game! Would you like to play again?")
                 }
            }
            
        
            game();