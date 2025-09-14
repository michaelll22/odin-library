const bookForm = document.querySelector("#book-form");
const bookList = document.querySelector(".book-list");
const addBookBtn = document.querySelector(".add");
const closeButton = document.querySelector(`.close-btn`);
const dialog = document.querySelector("dialog");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");

  let book = new Book(titleInput.value, authorInput.value, pagesInput.value);
  addBookToLibrary(book);
  console.table(myLibrary);
  dialog.close();
});

const myLibrary = [];

function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  // take params, create a book then store it in the array
  myLibrary.push(book);
  const addBook = document.createElement("p");
  addBook.textContent = `${book.title} by ${book.author}`;
  bookList.appendChild(addBook);
}

addBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
