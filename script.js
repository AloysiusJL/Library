let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function(){
    console.log(title + " by " + author + ", " + pages + " pages ")
  }
}

function addBookToLibrary() {
  myLibrary.push(book1, book2)
}

const book1 = new Book('Harry Potter', 'J. K. Rowling', 500, false)
const book2 = new Book('The Hobbit', 'J.R.R. Tolkien', 700, false)


book1.info()
book2.info()

addBookToLibrary()
console.table(myLibrary)

