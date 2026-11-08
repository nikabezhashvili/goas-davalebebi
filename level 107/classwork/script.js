class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }
    getInfo(){
        return `წიგნი ${this.title}; ავტორი: ${this.author}; გვერდები: ${this.pages}`
    }
    isLong() {
        return this.pages > 300;
    }
}
const book1 = new Book('Harry Potter', 'არ მახსოვს', 500)

console.log(book1.getInfo());
console.log(book1.isLong());
