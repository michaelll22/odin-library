const bookForm = document.querySelector("#book-form");
const bookList = document.querySelector(".books");
const addBookBtn = document.querySelector(".add");
const closeButton = document.querySelector(`.close-btn`);
const dialog = document.querySelector("dialog");

// let myLibrary = [];

// function Book(title, author, pages, status) {
//   this.uid = crypto.randomUUID();
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.status = status;
// }

class Book {
  constructor(title, author, pages, status) {
    this.uid = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  static bookList = [];

  static bookCount = 0;

  static viewBooks() {
    console.log(this.bookCount);
    console.log(this.bookList);
  }

  static addBook(book) {
    this.bookCount++;
    this.bookList.push(book);
    console.log(this.bookList);
  }

  static removeBook(index) {
    Book.bookList.splice(index, 1);
  }

  update() {
    
  }
}

const book1 = new Book("book1", "author1", 82, "Not Reading");
const book2 = new Book("book2", "author2", 102, "Reading");

Book.addBook(book1);
Book.addBook(book2);

// function addBookToLibrary() {
//   const title = document.querySelector("#title").value;
//   const author = document.querySelector("#author").value;
//   const pages = document.querySelector("#pages").value;
//   const status = document.querySelector("#status").value;

//   let newBook = new Book(title, author, pages, status);

//   myLibrary.push(newBook);
//   addBookCard(newBook);
// }

// function addBookCard(book) {
//   const bookCard = document.createElement("div");
//   bookCard.classList.add("bookCard");

//   const cardTitle = document.createElement("h4");
//   const cardAuthor = document.createElement("p");
//   const cardPages = document.createElement("p");
//   const cardStatus = document.createElement("p");

//   const cardRemove = document.createElement("button");
//   cardRemove.textContent = "Remove";

//   cardTitle.textContent = book.title ? `Title: ${book.title}` : "Unknown Title";
//   cardAuthor.textContent = `Author: ${book.author}`;
//   cardPages.textContent = book.pages
//     ? `Pages: ${book.pages}`
//     : "Page count missing";
//   cardStatus.textContent = `Status: ${book.status}`;

//   bookCard.appendChild(cardTitle);
//   bookCard.appendChild(cardAuthor);
//   bookCard.appendChild(cardPages);
//   bookCard.appendChild(cardStatus);
//   bookCard.appendChild(cardRemove);

//   bookList.appendChild(bookCard);

//   cardRemove.addEventListener("click", () => removeBook(bookCard, book.uid));
// }

// function removeBook(bookElement, bookId) {
//   bookElement.remove();
//   myLibrary = myLibrary.filter((book) => book.uid !== bookId);
// }

function handleBook() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const status = document.querySelector("#status").value;

  let newBook = new Book(title, author, parseInt(pages), status);

  Book.addBook(newBook);
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  handleBook();

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
