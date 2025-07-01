const quoteText = document.getElementById('quoteText');

// array
const quotes = [
    "Insane means fewer cameras!", 
    "I'm about as intimidating as a butterfly.",
    "Never ask an elf for help; they might decide your better off dead, eh?",
    "Some quotations,",
    "What's my age again?",
    "Act first, explain later."
]

// func
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    // set quotetext into quote
    if (quoteText.textContent === quote){
        //its the same quote as before, generate a new one
        generateQuote();
    }else{
        quoteText.textContent = quote;
    }
}