'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable
let highScore = 0;

document.querySelector('.check'),
  addEventListener('click', function () {
    const guess = Number(this.document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when no input
    if (!guess) {
      document.querySelector('.message').textContent = 'No number!';

      //when player wins
    } else if (guess === secretNumber) {
      this.document.querySelector('.message').textContent = 'Correct Number!!';
      document.querySelector('.number').textContent = secretNumber;

      this.document.querySelector('body').style.backgroundColor = 'green';
      if (score > highScore) {
        highScore = score;
        this.document.querySelector('.highscore').textContent = highScore;
      }
    }
    //when the guess wrong
    else if (guess !== secretNumber) {
      if (score > 1) {
        this.document.querySelector('.message').textContent =
          guess > secretNumber ? 'Too High!' : 'Too Low!';
        score--;
        this.document.querySelector('.score').textContent = score;
      } else {
        this.document.querySelector('.message').textContent = 'you lose!';
        this.document.querySelector('.score').textContent = 0;
        this.document.querySelector('body').style.backgroundColor = 'red';
      }
    }
    //when guess is too high
    //     else if (guess > secretNumber) {
    //         if (score > 1) {
    //             this.document.querySelector('.message').textContent = 'Too High!';
    //             score--;
    //             this.document.querySelector('.score').textContent = score;
    //           } else {
    //             this.document.querySelector('.message').textContent = 'you lose!';
    //             this.document.querySelector('.score').textContent = 0;
    //             this.document.querySelector('body').style.backgroundColor = 'red';
    //           }

    //     }  //when the guess is too low
    //     else if (guess < secretNumber) {
    //       if (score > 1) {
    //         this.document.querySelector('.message').textContent = 'Too Low!';
    //         score--;
    //         this.document.querySelector('.score').textContent = score;
    //       } else {
    //         this.document.querySelector('.message').textContent = 'you lose!';
    //         this.document.querySelector('.score').textContent = 0;
    //         this.document.querySelector('body').style.backgroundColor = 'red';
    //       }
    //     }
  });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
