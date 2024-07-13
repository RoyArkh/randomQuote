fetch('https://api.quotable.io/quotes/random')
  .then(response => response.json())
  .then(data => {
    const quote = data[0].content;
    const author = data[0].author;

    const quoteParagraph = document.createElement('p');
    const authorParagraph = document.createElement('p');

    quoteParagraph.textContent = `"${quote}"`;
    authorParagraph.textContent = `- ${author}`;

    document.body.appendChild(quoteParagraph);
    document.body.appendChild(authorParagraph);
  })
  .catch(error => console.error('Error fetching the quote:', error));
