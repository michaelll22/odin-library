const bookForm = document.querySelector("#book-form");
const bookList = document.querySelector(".books");
const addBookBtn = document.querySelector(".add");
const closeButton = document.querySelector(`.close-btn`);
const dialog = document.querySelector("dialog");

let myLibrary = [];

function Book(title, author, pages, status) {
  this.uid = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const status = document.querySelector("#status").value;

  let newBook = new Book(title, author, pages, status);

  myLibrary.push(newBook);
  addBookCard(newBook);
}

function addBookCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");

  const cardTitle = document.createElement("h4");
  const cardAuthor = document.createElement("p");
  const cardPages = document.createElement("p");
  const cardStatus = document.createElement("p");

  const cardRemove = document.createElement("button");
  cardRemove.textContent = "Remove";

  cardTitle.textContent = book.title ? `Title: ${book.title}` : "Unknown Title";
  cardAuthor.textContent = `Author: ${book.author}`;
  cardPages.textContent = `Pages: ${book.pages}`
    ? `${book.pages} pages`
    : "Page count missing";
  cardStatus.textContent = `Status: ${book.status}`;

  bookCard.appendChild(cardTitle);
  bookCard.appendChild(cardAuthor);
  bookCard.appendChild(cardPages);
  bookCard.appendChild(cardStatus);
  bookCard.appendChild(cardRemove);

  bookList.appendChild(bookCard);

  cardRemove.addEventListener("click", () => removeBook(bookCard, book.uid));
}

function removeBook(bookElement, bookId) {
  bookElement.remove();
  myLibrary = myLibrary.filter((book) => book.uid !== bookId);
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
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
