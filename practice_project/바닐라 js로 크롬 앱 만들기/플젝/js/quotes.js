const quotes = [

    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },

    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },

    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },

    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },

    {
        quote: "Happiness depends upon ourselves.",
        author: "Aristotle"
    },

    {
        quote: "It always seems impossible until it’s done.",
        author: "Nelson Mandela"
    },

    {
        quote: "Don’t count the days, make the days count.",
        author: "Muhammad Ali"
    },

    {
        quote: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs"
    },

    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },

    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


