/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * The 'quotes' array is an array of objects. Each object holds a quote, source, and optionally, a citation and year.
***/
const quotes = [
  {
    quote: "Imagination is more important than knowledge.",
    source: "Albert Einstein",
  },
  {
    quote: "I will not lose, for even in defeat, there’s a valuable lesson learned, so it evens up for me.",
    source: "Shawn Carter",
  },
  {
    quote: "If you really look closely, most overnight successes took a long time.",
    source: "Steve Jobs",
    tags: "Business"
  },
  {
    quote: "If I have seen further, it is by standing upon the shoulders of giants.",
    source: "Sir Isaac Newton",
    citation: "Letter written to fellow scientist, Robert Hooke",
    year: 1675,
    tags: "Science"
  },
  {
    quote: "This ain't no tall order, this is nothing to me. Difficult takes a day, impossible takes a week.",
    source: "JAY-Z",
    citation: "Diamonds Remix",
    year: 2005,
    tags: "Perseverence"
  },
];



/***
 * The `getRandomQuote` function returns a random object from the quotes array
***/
function getRandomQuote(x) {
  let randomNumber = Math.floor(Math.random() * quotes.length)
  for (let i = 0; i < x.length; i++) {
    return x[randomNumber]
  }
}
// getRandomQuote(quotes);

function randomBackgroundColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `${r}, ${g}, ${b}`
}


/***
 * The `printQuote` function prints the contents of the object (quote, source, citation, and year) to the page.
 * Since the year and citation keys are optional, the `printQuote` function contains a conditional to handle whether
 * or not the object contains a year or citation.
 * 
 * The body variable was added in order to change background color
***/
const body = document.querySelector("body");

function printQuote() {
  const retrievedRandomQuote = getRandomQuote(quotes);
  let newBackgroundColor = randomBackgroundColor();
  body.style.backgroundColor = `rgb(${newBackgroundColor})`;

  let html = `
    <p class="quote">${retrievedRandomQuote.quote}</p>
    <p class="source">${retrievedRandomQuote.source}`

  if ("citation" in retrievedRandomQuote) {
    html += `<span class="citation">${retrievedRandomQuote.citation}</span>`
  }

  if ("year" in retrievedRandomQuote) {
    html += `<span class="year">${retrievedRandomQuote.year}</span>`
  }

  if ("tags" in retrievedRandomQuote) {
    html += `<span class="tags"> -${retrievedRandomQuote.tags}</span>`
  }
  `</p>

  `
  document.getElementById('quote-box').innerHTML = html;
  return html;
}

// setInterval function calls printQuote function every 10 seconds
setInterval(function() {
  printQuote()
}, 10000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);