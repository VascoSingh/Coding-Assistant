import React from 'react';

const Highlight = ({ text }) => {
    // Define the regular expression to search for quotes
    const quoteRegex = /"([^"]*)"/g;
  
    // Search for the quotes in the text
    const quotes = text.match(quoteRegex);
  
    // Map over the array of quotes
    const highlightedText = quotes.map(quote => {
      // Wrap the quote in a span element with the desired class
      return <span className="highlight">{quote}</span>;
    });
    const highlightedTextString = highlightedText.join("");
    // Replace the quotes in the text with the highlighted span elements
    const updatedText = text.replace(quoteRegex, highlightedText);
  
    return <div>{updatedText}</div>;
  };
  
  export default Highlight;