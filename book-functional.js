const bookSubmit = () => {
    const bookInput = document.getElementById('book-input');
    const bookInputText = bookInput.value;
    bookInput.value = '';
    if (bookInputText !== '' && bookInputText !== 'number') {
        const url = `https://openlibrary.org/search.json?q=${bookInputText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayBookDetails(data))
    }
    else {
        return alert('Please Type Valid Name');
    }
}

const displayBookDetails = BookDetails => {
    const divContainer = document.getElementById('div-container');
    divContainer.innerHTML = '';
    const resultCount = document.getElementById('result-count');
    resultCount.innerText = `${BookDetails.numFound}`

    const books = BookDetails.docs;
    books.forEach(book => {
        {
            const div = document.createElement('div');
            div.classList.add('col')
            div.innerHTML = `
                    <div class="card">
                    <img height="200px"  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card - img - top" alt="...">
                    <div class= "card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Author Name: ${book.author_name}</p>
                    <p class="card-text">Publisher Name: ${book.publisher}</p>
                    <p class="card-text">Publish date : ${book.publish_date}</p>
                    </div >`;
            divContainer.appendChild(div)
        }


    });

}
