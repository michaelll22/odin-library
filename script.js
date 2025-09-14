const bookForm = document.querySelector("#book-form");
const bookList = document.querySelector(".books");
const addBookBtn = document.querySelector(".add");
const closeButton = document.querySelector(`.close-btn`);
const dialog = document.querySelector("dialog");

let myLibrary = [];

function removeBook(bookElement, bookObj) {
  bookList.removeChild(bookElement);
  myLibrary = myLibrary.filter((b) => b !== bookObj);
}

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  const bookInfo = document.createElement("li");
  const bookRemove = document.createElement("button");

  bookInfo.textContent = `${book.title} by ${book.author}`;
  bookRemove.textContent = "Remove";

  bookList.appendChild(bookInfo);
  bookInfo.appendChild(bookRemove);

  bookRemove.addEventListener("click", () => {
    removeBook(bookInfo, book);
  });
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleInput = document.querySelector("#title").value;
  const authorInput = document.querySelector("#author").value;
  const pagesInput = document.querySelector("#pages").value;

  let book = new Book(titleInput, authorInput, pagesInput);
  addBookToLibrary(book);
  console.table(myLibrary);
  dialog.close();
  bookForm.reset();
});

addBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
  bookForm.reset();
});
