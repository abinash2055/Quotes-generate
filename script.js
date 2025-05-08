const quotes = {
  science: [
    "Science is a way of thinking much more than it is a body of knowledge. – Carl Sagan",
    "The good thing about science is that it’s true whether or not you believe in it. – Neil deGrasse Tyson",
    "If I have seen further it is by standing on the shoulders of Giants. – Isaac Newton",
    "Somewhere, something incredible is waiting to be known. – Carl Sagan",
    "The important thing is to never stop questioning. – Albert Einstein",
    "Equipped with his five senses, man explores the universe around him and calls the adventure Science. – Edwin Hubble",
    "Science knows no country, because knowledge belongs to humanity. – Louis Pasteur",
    "The science of today is the technology of tomorrow. – Edward Teller",
    "An expert is a person who has made all the mistakes that can be made in a very narrow field. – Niels Bohr",
    "Science is the great antidote to the poison of enthusiasm and superstition. – Adam Smith",
    "Research is what I’m doing when I don’t know what I’m doing. – Wernher von Braun",
    "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual. – Galileo Galilei",
    "Everything is theoretically impossible until it is done. – Robert A. Heinlein",
    "What you learn from a life in science is the vastness of our ignorance. – David Eagleman",
    "The universe is under no obligation to make sense to you. – Neil deGrasse Tyson",
  ],
  motivation: [
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Act as if what you do makes a difference. It does. – William James",
    "Don't wait. The time will never be just right. – Napoleon Hill",
    "Go as far as you can see; when you get there, you'll be able to see further. – Thomas Carlyle",
    "Push yourself, because no one else is going to do it for you.",
    "Failure will never overtake me if my determination to succeed is strong enough. – Og Mandino",
    "Dream big and dare to fail. – Norman Vaughan",
  ],
};

let currentCategory = "science";
let currentIndex = 0;
let fontSize = 1.2;

const quoteBox = document.getElementById("quoteBox");
const categorySelect = document.getElementById("categorySelect");
const themeSwitch = document.getElementById("themeSwitch");

function displayQuote() {
  const quote = quotes[currentCategory][currentIndex];
  quoteBox.textContent = quote;
  quoteBox.style.fontSize = `${fontSize}rem`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % quotes[currentCategory].length;
  displayQuote();
}

function showPrevious() {
  currentIndex =
    (currentIndex - 1 + quotes[currentCategory].length) %
    quotes[currentCategory].length;
  displayQuote();
}

function showRandom() {
  const length = quotes[currentCategory].length;
  let randomIndex = Math.floor(Math.random() * length);
  while (randomIndex === currentIndex && length > 1) {
    randomIndex = Math.floor(Math.random() * length);
  }
  currentIndex = randomIndex;
  displayQuote();
}

function changeFontSize(action) {
  if (action === "increase") fontSize += 0.1;
  else if (action === "decrease" && fontSize > 0.5) fontSize -= 0.1;
  displayQuote();
}

categorySelect.addEventListener("change", () => {
  currentCategory = categorySelect.value;
  currentIndex = 0;
  displayQuote();
});

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeSwitch.checked);
});

window.onload = displayQuote;
