fetch('https://api.quotable.io/quotes/random')
  .then(response => response.json())
  .then(data => {
    const quote = data[0].content;
    const author = data[0].author;

    // Create paragraph elements
    const quoteParagraph = document.createElement('p');
    const authorParagraph = document.createElement('p');

    // Set the text content of the paragraphs
    quoteParagraph.textContent = `"${quote}"`;
    authorParagraph.textContent = `- ${author}`;

    // Append the paragraphs to the body
    document.body.appendChild(quoteParagraph);
    document.body.appendChild(authorParagraph);
  })
  .catch(error => console.error('Error fetching the quote:', error));
