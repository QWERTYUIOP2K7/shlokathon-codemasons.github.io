// Fetch Books from books.json and Display
document.addEventListener("DOMContentLoaded", () => {
    fetch("books.json")
        .then(response => response.json())
        .then(data => displayBooks(data));
});

// Display Books on Page
function displayBooks(books) {
    let bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    
    books.forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.classList.add("book");
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
        `;
        document.getElementById("show-loading").addEventListener("click", function() {
            document.getElementById("loading").classList.remove("hidden");
        
            // Simulate a delay (e.g., fetching data)
            setTimeout(function() {
                document.getElementById("loading").classList.add("hidden");
                document.getElementById("book-list").innerHTML = "<p>Books loaded!</p>";
            }, 3000); // Adjust time as needed
        });

        bookCard.addEventListener("click", () => {
            showLoading(); 
            setTimeout(() => {
                window.location.href = `book.html?id=${book.id}`;
            }, 1500); // 1.5 sec delay to simulate loading
        });

        bookList.appendChild(bookCard);
    });
}

// Show Loading Animation
function showLoading() {
    document.getElementById("loading").classList.remove("hidden");
}

// Search Books
function searchBooks() {
    let query = document.getElementById("search").value.toLowerCase();
    fetch("books.json")
        .then(response => response.json())
        .then(books => {
            let filtered = books.filter(book => book.title.toLowerCase().includes(query));
            displayBooks(filtered);
        });
}

// Filter Books by Genre
function filterBooks(genre) {
    fetch("books.json")
        .then(response => response.json())
        .then(books => {
            let filtered = genre ? books.filter(book => book.genre === genre) : books;
            displayBooks(filtered);
        });
}