document.addEventListener('DOMContentLoaded', () => {
    // --- Constants ---
    const HISTORY_STORAGE_KEY = 'userPageHistory';

    // --- Helper Function: Get Current Page Details ---
    function getCurrentPageDetails() {
        // Get the base filename (e.g., "index.html" or "history.html")
        const path = window.location.pathname;
        const filename = path.substring(path.lastIndexOf('/') + 1);

        // For index.html, we use URL parameters to simulate different "pages"
        if (filename === 'index.html' || filename === '') {
            const urlParams = new URLSearchParams(window.location.search);
            const pageName = urlParams.get('page') || 'home'; // Default to 'home' if no parameter
            const pageTitle = pageName.charAt(0).toUpperCase() + pageName.slice(1) + ' Page'; // Capitalize
            return {
                url: window.location.href, // Full URL with params
                title: pageTitle,
                isHistoryPage: false
            };
        } else if (filename === 'history.html') {
            return {
                url: window.location.href,
                title: 'Your History',
                isHistoryPage: true
            };
        }
        // Fallback for any other HTML files you might add
        return {
            url: window.location.href,
            title: document.title || filename.replace('.html', '').replace('-', ' ').toUpperCase(),
            isHistoryPage: false
        };
    }

    // --- Function to Load History from localStorage ---
    function loadHistory() {
        const historyJson = localStorage.getItem(HISTORY_STORAGE_KEY);
        try {
            return historyJson ? JSON.parse(historyJson) : [];
        } catch (e) {
            console.error("Error parsing history from localStorage:", e);
            return []; // Return empty array on error
        }
    }

    // --- Function to Save History to localStorage ---
    function saveHistory(history) {
        localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
    }

    // --- Function to Add a Page Visit to History ---
    function addPageToHistory(pageDetails) {
        // Do not record visits to the history page itself, or if pageDetails are invalid
        if (!pageDetails || pageDetails.isHistoryPage) {
            return;
        }

        let history = loadHistory();
        const now = new Date();

        // Optional: Prevent duplicate consecutive entries if needed
        // const lastEntry = history.length > 0 ? history[history.length - 1] : null;
        // if (lastEntry && lastEntry.url === pageDetails.url) {
        //     // Update timestamp if the same page is visited consecutively
        //     lastEntry.timestamp = now.toISOString();
        //     saveHistory(history);
        //     return;
        // }

        history.push({
            url: pageDetails.url,
            title: pageDetails.title,
            timestamp: now.toISOString() // ISO string for easy sorting/display
        });
        saveHistory(history);
        console.log("Added to history:", pageDetails.title);
    }

    // --- Function to Render History on the History Page ---
    function renderHistory() {
        const historyList = document.getElementById('historyList');
        const noHistoryMessage = document.getElementById('noHistoryMessage');
        if (!historyList) return; // Not on the history page

        const history = loadHistory();
        historyList.innerHTML = ''; // Clear previous entries

        if (history.length === 0) {
            noHistoryMessage.style.display = 'block';
            historyList.style.display = 'none';
            return;
        } else {
            noHistoryMessage.style.display = 'none';
            historyList.style.display = 'block';
        }

        // Sort history by timestamp (most recent first)
        history.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        history.forEach(entry => {
            const li = document.createElement('li');
            const date = new Date(entry.timestamp);
            const formattedDate = date.toLocaleDateString(undefined, {
                year: 'numeric', month: 'short', day: 'numeric'
            });
            const formattedTime = date.toLocaleTimeString(undefined, {
                hour: '2-digit', minute: '2-digit'
            });

            li.innerHTML = `
                <a href="${entry.url}">${entry.title}</a>
                <span class="timestamp">Visited on: ${formattedDate} at ${formattedTime}</span>
            `;
            historyList.appendChild(li);
        });
    }

    // --- Function to Clear All History ---
    function clearAllHistory() {
        if (confirm("Are you sure you want to clear all your Browse history? This action cannot be undone.")) {
            localStorage.removeItem(HISTORY_STORAGE_KEY);
            console.log("History cleared!");
            renderHistory(); // Re-render the history page to show it's empty
        }
    }

    // --- Main Logic on Page Load ---
    const currentPage = getCurrentPageDetails();

    if (currentPage.isHistoryPage) {
        // If on the history page, render history and set up clear button
        renderHistory();
        const clearBtn = document.getElementById('clearHistoryBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', clearAllHistory);
        }
    } else {
        // If on any other page (like index.html simulating other pages), record the visit
        addPageToHistory(currentPage);
        // Optionally update the current page display on index.html
        const currentPageNameSpan = document.getElementById('currentPageName');
        if (currentPageNameSpan) {
            currentPageNameSpan.textContent = currentPage.title.replace(' Page', ''); // Remove ' Page' for cleaner display
        }
    }
});