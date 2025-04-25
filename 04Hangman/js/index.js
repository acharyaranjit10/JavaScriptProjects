// DOM Elements
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");

// Game variables
let currentWord, correctLetters = [], wrongGuessCount = 0;
const maxGuesses = 6;

// Initialize game
function initGame() {
  gsap.killTweensOf(".keyboard button");
  gsap.set(".keyboard button", {
    opacity: 1,
    visibility: "visible",
    y: 0
});

    // Reset game state
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    gameModal.classList.remove("show");
    
    // Create keyboard buttons
    createKeyboard();
    
    // Get random word
    getRandomWord();
    
    // Initial animations
    animateElements();
}

// Create keyboard buttons
function createKeyboard() {
    keyboardDiv.innerHTML = '';
    
    // Keyboard layout (QWERTY format)
    const keyboardLayout = [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
        ["z", "x", "c", "v", "b", "n", "m"]
    ];

    keyboardLayout.forEach(row => {
        const rowDiv = document.createElement("div");
        rowDiv.className = "keyboard-row";
        
        row.forEach(key => {
            const button = document.createElement("button");
            button.textContent = key;
            button.addEventListener("click", () => handleButtonClick(button, key));
            rowDiv.appendChild(button);
        });
        
        keyboardDiv.appendChild(rowDiv);
    });
}

// Get random word from list
function getRandomWord() {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word.toLowerCase();
    document.querySelector(".hint-text b").innerText = hint;
    
    // Create letter placeholders
    wordDisplay.innerHTML = currentWord.split("").map(() => 
        `<li class="letter"></li>`
    ).join("");
}

// Handle button clicks
function handleButtonClick(button, clickedLetter) {
  
    // Disable button and animate
    button.disabled = true;
    gsap.to(button, {
        scale: 0.8,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });

    if (currentWord.includes(clickedLetter)) {
        // Correct guess
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                const letterElement = wordDisplay.querySelectorAll("li")[index];
                
                gsap.fromTo(letterElement,
                    { y: -20, opacity: 0 },
                    { 
                        y: 0, 
                        opacity: 1, 
                        duration: 0.5, 
                        ease: 'bounce.out',
                        onComplete: () => {
                            letterElement.innerText = letter;
                            letterElement.classList.add("guessed");
                        }
                    }
                );
            }
        });
    } else {
        // Wrong guess
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
        guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
        
        // Shake animation
        gsap.to(hangmanImage, {
            x: [-5, 5, -5, 5, 0],
            duration: 0.4
        });
    }

    // Check game state
    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
}

// Game over function
function gameOver(isVictory) {
    setTimeout(() => {
        const modalImg = gameModal.querySelector("img");
        const modalText = isVictory ? `You found the word:` : 'The correct word was:';
        
        modalImg.src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        
        gameModal.classList.add("show");
    }, 300);
}

// Animate elements
function animateElements() {
  // Reset any existing animations first
  gsap.set(".keyboard button", { clearProps: "all" });
  
  // New staggered animation that won't hide elements
  gsap.from(".keyboard button", {
      duration: 0.5,
      y: 20,
      opacity: 0,
      stagger: {
          amount: 0.5,
          from: "random"
      },
      ease: 'back.out',
      delay: 0.3,
      onComplete: () => {
          // Force visible after animation
          gsap.set(".keyboard button", { opacity: 1, visibility: "visible" });
      }
  });
  
  // Word display animation remains the same
  gsap.from(".word-display .letter", {
      y: -15,
      duration: 0.4,
      stagger: 0.05,
      ease: 'bounce.out',
      delay: 0.5
  });
}
// Event listeners
playAgainBtn.addEventListener("click", initGame);

// Initialize game when window loads
window.addEventListener("load", initGame);