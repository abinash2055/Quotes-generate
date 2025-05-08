// Quotes Data
const quotes = {
  science: [
    {
      text: "The important thing is to never stop questioning.",
      author: "Albert Einstein",
    },
    {
      text: "Science is a way of thinking much more than it is a body of knowledge.",
      author: "Carl Sagan",
    },
  ],
  motivational: [
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      text: "The future depends on what you do today.",
      author: "Mahatma Gandhi",
    },
  ],
};

// Combine all quotes
quotes.all = [...quotes.science, ...quotes.motivational];

let currentCategory = "all";
let currentIndex = 0;
let currentFontSize = 1.5;

// DOM Elements
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const categorySelect = document.getElementById("category-select");
const darkModeSwitch = document.getElementById("dark-mode-switch");
const increaseFont = document.getElementById("increase-font");
const decreaseFont = document.getElementById("decrease-font");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const randomBtn = document.getElementById("random");

function getCurrentQuotes() {
  return quotes[currentCategory] || [];
}

function showQuote() {
  const currentQuotes = getCurrentQuotes();
  const quote = currentQuotes[currentIndex];

  if (quote) {
    quoteText.textContent = quote.text;
    authorText.textContent = `— ${quote.author}`;
    quoteText.style.fontSize = `${currentFontSize}rem`;
  }
}

categorySelect.addEventListener("change", () => {
  currentCategory = categorySelect.value;
  currentIndex = 0;
  showQuote();
});

nextBtn.addEventListener("click", () => {
  const currentQuotes = getCurrentQuotes();
  currentIndex = (currentIndex + 1) % currentQuotes.length;
  showQuote();
});

prevBtn.addEventListener("click", () => {
  const currentQuotes = getCurrentQuotes();
  currentIndex =
    (currentIndex - 1 + currentQuotes.length) % currentQuotes.length;
  showQuote();
});

randomBtn.addEventListener("click", () => {
  const currentQuotes = getCurrentQuotes();
  currentIndex = Math.floor(Math.random() * currentQuotes.length);
  showQuote();
});

darkModeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", darkModeSwitch.checked);
});

increaseFont.addEventListener("click", () => {
  currentFontSize += 0.1;
  showQuote();
});

decreaseFont.addEventListener("click", () => {
  currentFontSize = Math.max(1, currentFontSize - 0.1);
  showQuote();
});

// Initial Quote
showQuote();
