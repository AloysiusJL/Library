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


// open and close modal
const openMadalButtons = document.querySelectorAll('[data-modal-target]')
const closeMadalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


openMadalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)  
  })
})

closeMadalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)  
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  // overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  // overlay.classList.remove('active')
}



