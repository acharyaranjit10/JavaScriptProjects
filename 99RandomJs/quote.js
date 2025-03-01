// Quote Generator with Local Storage
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You miss 100% of the shots you don't take. – Wayne Gretzky",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "In three words I can sum up everything I've learned about life: It goes on. – Robert Frost",
    "To be great is to be misunderstood. – Ralph Waldo Emerson",
    "Life is either a daring adventure or nothing at all. – Helen Keller",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson"
];

// Function to generate a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to update the displayed quote
function updateQuote() {
    const quoteElement = document.getElementById("quote");
    const newQuote = getRandomQuote();

    // Set the quote in local storage to remember it
    localStorage.setItem("lastQuote", newQuote);

    quoteElement.textContent = newQuote;
}

// Function to load the last shown quote from local storage
function loadLastQuote() {
    const lastQuote = localStorage.getItem("lastQuote");
    if (lastQuote) {
        document.getElementById("quote").textContent = lastQuote;
    } else {
        updateQuote();
    }
}

// Add event listener to the "New Quote" button
document.getElementById("new-quote-button").addEventListener("click", updateQuote);

// Load the last quote or generate a new one on page load
window.onload = loadLastQuote;
