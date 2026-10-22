const par = document.getElementById('par')
const apiInfo = async () => {
    const data1 = await fetch("https://greenlitbooks.com/api/v1/books")
    const data2 = await data1.json()
    books = data2.books
    console.log(books);
    books.map(book =>{
        par.innerHTML += `
        <h2>${book.title}</h2>
        <img src ='${book.coverImage}' width="150">
        <h2>${book.readerLevel}</h2>
        <h2>${book.subtitle}</h2>
        <h2>${book.imprint}</h2>
        `
    })
}

apiInfo()