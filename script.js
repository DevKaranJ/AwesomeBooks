// DOM elements
let addForm = document.querySelector('#books');
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let bookList = document.querySelector('#book-list');

// Saving & Accessing Data to local storage 
let books = JSON.parse(localStorage.getItem('books')) || [];

// Function to display books
function displayBooks() {
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    let li = document.createElement('li');
    li.textContent = `${book.title} by ${book.author}`;
    
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeBook(index);
    });

    li.appendChild(removeButton);
    bookList.appendChild(li);
  });
}

// Function to add a bookadd your code below

// Function to remove a book add your code below 

// Event listener Submit Button
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let title = titleInput.value;
  let author = authorInput.value;
  addBook(title, author);
  titleInput.value = '';
  authorInput.value = '';
});

displayBooks();
