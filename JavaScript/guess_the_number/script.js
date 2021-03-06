        // Your JavaScript goes here

        //To generate a number that is a whole number rounded down
        //the + 1 makes it so its not 0.
        let randomNumber = Math.floor(Math.random() * 100) + 1;

        const guesses = document.querySelector('.guesses')
        const lastResult = document.querySelector('.lastResult');
        const lowOrHi = document.querySelector('.lowOrHi');

        const guessSubmit = document.querySelector('.guessSubmit');
        const guessField = document.querySelector('.guessField');
        const numberOfGuesses = document.querySelector('.numberOfGuessesLeft')

        let guessCount = 1;
        let resetButton;
        guessField.focus();

        function checkGuess() {

            // Converts a string value into a number
            const userGuess = Number(guessField.value);

            // Assignes the message "Previous guesses to the guesses class on the HTML"
            if (guessCount === 1) {
                guesses.textContent = 'Previous guesses: ';
            }
            guesses.textContent += userGuess + ' ';

            if (userGuess === randomNumber) {
                lastResult.textContent = 'Congratulations! You got it right!';
                lastResult.style.backgroundColor = 'green';
                lowOrHi.textContent = '';
                setGameOver();
            } else if (guessCount === 10) {
                lastResult.textContent = '!!!GAME OVER!!!';
                lowOrHi.textContent = '';
                setGameOver();
            } else {
                lastResult.textContent = 'Wrong!';
                lastResult.style.backgroundColor = 'red';
                if(userGuess < randomNumber) {
                lowOrHi.textContent = 'Last guess was too low!';
                } else if(userGuess > randomNumber) {
                lowOrHi.textContent = 'Last guess was too high!';
                }
                numberOfGuesses.textContent = 'Number of Guesses remaining: ' + (10 - guessCount);
            }

            guessCount++;
            guessField.value = '';
            guessField.focus();
        }

        function setGameOver() {
          guessField.disabled = true;
          guessSubmit.disabled = true;
          numberOfGuesses.textContent = '';
          resetButton = document.createElement('button');
          resetButton.textContent = 'Start new game';
          document.body.append(resetButton);
          resetButton.addEventListener('click', resetGame);
        }

        function resetGame() {
          guessCount = 1;

          const resetParas = document.querySelectorAll('.resultParas p');
          for (const resetPara of resetParas) {
            resetPara.textContent = '';
          }

          resetButton.parentNode.removeChild(resetButton);

          guessField.disabled = false;
          guessSubmit.disabled = false;
          guessField.value = '';
          guessField.focus();

          lastResult.style.backgroundColor = 'white';

          randomNumber = Math.floor(Math.random() * 100) + 1;
        }

        guessSubmit.addEventListener('click', checkGuess);

        