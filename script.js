const table = document.querySelector('.table')
const tableBody = document.querySelector('tbody')
const form = document.querySelector('.modal')
const titleInput = form.querySelector('#title')
const authorInput = form.querySelector('#author')
const pagesInput = form.querySelector('#pages')
const sunmitButton = form.querySelector('#submit')

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
  let title = titleInput.value
  let author = authorInput.value
  let pages = pagesInput.value
  let read = getReadValue()
  let newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
}

sunmitButton.addEventListener('click', () => {
  addBookToLibrary()
  closeModal(modal)  
  buildTable(myLibrary)
})

function getReadValue(){
  if (form.querySelector('input[name="read"]:checked').value == 'yes') return true;
  else return false;
}

const book1 = new Book('Harry Potter', 'J. K. Rowling', 500, false)
const book2 = new Book('The Hobbit', 'J.R.R. Tolkien', 700, false)


book1.info()
book2.info()
myLibrary.push(book1)
myLibrary.push(book2)

console.table(myLibrary)

function buildTable(data){
  let table =document.getElementById('tableBody')

  for (var i = 0; i < data.length; i++){
    let row = `<tb>
                  <td>${data[i].title}</td>
                  <td>${data[i].author}</td>
                  <td>${data[i].pages}</td>
                  <td>${data[i].read}</td>
                  <td><button>Edit</button></td>
                  <td><button>Delete</button></td>
              </tb>`
    table.innerHTML += row
  }
}

buildTable(myLibrary)

// open and close modal
const openMadalButtons = document.querySelectorAll('[data-modal-target]')
const closeMadalButtons = document.querySelectorAll('#return')
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
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

overlay.addEventListener('click', () => {
  const modal = document.querySelectorAll('.modal.active')
  modal.forEach(modal => {
    closeModal(modal)
  })
})




