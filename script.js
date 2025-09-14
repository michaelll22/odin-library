const bookForm = document.querySelector("#book-form");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");

  let book = new Book(titleInput.value, authorInput.value, pagesInput.value);
  addBookToLibrary(book);
  console.table(myLibrary);
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
}
