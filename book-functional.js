const bookSubmit = () => {
    const bookInput = document.getElementById('book-input');
    const bookInputText = bookInput.value;

    // clear input value
    bookInput.value = '';
    // condition for number and empty string cheak
    if (bookInputText !== '' && isNaN(bookInputText)) {

        // api link
        const url = `https://openlibrary.org/search.json?q=${bookInputText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayBookDetails(data))
    }
    else {
        return alert('Please Type Valid Name');
    }
}

// displaying the search result
const displayBookDetails = BookDetails => {
    const divContainer = document.getElementById('div-container');

    // clear div element
    divContainer.innerHTML = '';
    const resultCount = document.getElementById('result-count');
    resultCount.innerText = `${BookDetails.numFound}`

    const books = BookDetails.docs;

    // loop for getting values from array books
    books.forEach(book => {

        const div = document.createElement('div');
        div.classList.add('col')

        // html code added
        div.innerHTML = `
                    <div class="card">
                    <img height="200px"  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card - img - top" alt="...">
                    <div class= "card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Author Name: ${book.author_name}</p >
                    <p class="card-text">Publisher Name: ${book.publisher}</p>
                    <p class="card-text">Publish Year : ${book.first_publish_year}</p>
                    </div > `;
        divContainer.appendChild(div)
    });
}
//end of js code
