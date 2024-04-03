// Get pagination container
const paginationContainer = document.getElementById('pagination-container');

// Number of pages
const totalPages = 10;

// Display pagination buttons
for (let i = 1; i <= totalPages; i++) {
  const button = document.createElement('button');
  button.textContent = i;
  button.classList.add('pagination-button');
  paginationContainer.appendChild(button);
}

// Test suite
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageNumber = document.getElementById('page-number');

let currentPage = 1;
pageNumber.textContent = `Page ${currentPage}`;

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    pageNumber.textContent = `Page ${currentPage}`;
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    pageNumber.textContent = `Page ${currentPage}`;
  }
});
