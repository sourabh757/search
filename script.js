// script.js

// Select DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchHistoryList = document.getElementById('search-history');
const clearHistoryButton = document.getElementById('clear-history');

// Load search history from localStorage on page load
document.addEventListener('DOMContentLoaded', loadSearchHistory);

// Event listeners
searchButton.addEventListener('click', handleSearch);
clearHistoryButton.addEventListener('click', clearSearchHistory);

// Function to handle search action
function handleSearch() {
    const query = searchInput.value.trim();
    if (query === '') {
        alert('Please enter a search term.');
        return;
    }

    // For demonstration, we'll just log the search query
    // In a real search engine, you'd perform the search here
    console.log(Searching for: ${query});

    // Store the search query in history
    addToSearchHistory(query);

    // Clear the search input
    searchInput.value = '';
}

// Function to add a query to search history
function addToSearchHistory(query) {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    
    // Optional: Prevent duplicate entries
    if (!history.includes(query)) {
        history.push(query);
        localStorage.setItem('searchHistory', JSON.stringify(history));
        appendToHistoryList(query);
    }
}

// Function to load search history from localStorage
function loadSearchHistory() {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    history.forEach(query => appendToHistoryList(query));
}

// Function to append a query to the history list in the DOM
function appendToHistoryList(query) {
    const li = document.createElement('li');
    li.textContent = query;
    searchHistoryList.appendChild(li);
}

// Function to clear search history
function clearSearchHistory() {
    if (confirm('Are you sure you want to clear your search history?')) {
        localStorage.removeItem('searchHistory');
        searchHistoryList.innerHTML = '';
    }
}