User Browse History Tracker (Frontend Only)

Project Overview:

This is a simple frontend web application that tracks a user's Browse history using localStorage. It demonstrates how to record page visits, display them on a dedicated history page, and provide functionality for users to clear their history.

Key Features:

Page Visit Tracking: Records the URL, title, and timestamp of each page visited.

History Page: Displays a chronological list of visited pages.
Clear History: Allows users to delete all their recorded Browse history.
Frontend Only: All data storage and logic are handled entirely within the user's browser using localStorage. No backend server or database is required.

Technologies Used

HTML5: For structuring the web pages (index.html and history.html).
CSS3: For styling and visual presentation (style.css).
JavaScript (ES6+): For all the core logic, including localStorage interactions, DOM manipulation, and event handling (script.js).

How to Run Locally
To get this project up and running on your local machine:

Clone the repository:
Bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
# Replace YOUR_USERNAME and YOUR_REPOSITORY_NAME with your actual GitHub details

Navigate to the project directory:
Bash
cd YOUR_REPOSITORY_NAME
Open index.html: Simply open the index.html file in your web browser. You can do this by double-clicking the file in your file explorer or by typing file:///path/to/your/project/index.html in your browser's address bar.

How It Works

index.html: This file serves as the main entry point and simulates various "pages" (Home, About Us, Products, Contact Us) by using URL query parameters (?page=). Every time you navigate to one of these links, the script.js records the visit.

history.html: This is the dedicated page where the user's Browse history is displayed. It fetches data from localStorage and renders it dynamically.

script.js:
On every page load (except history.html), it retrieves the current page's details and adds them to an array stored in localStorage under the key 'userPageHistory'.

On history.html, it reads the 'userPageHistory' array from localStorage, sorts it by timestamp, and dynamically creates list items to display the history.

It also handles the "Clear All History" button, which removes the 'userPageHistory' item from localStorage, effectively wiping the user's history.

localStorage: This browser-based storage mechanism is used to persistently store the Browse history. Data stored here remains even after the browser is closed, providing a continuous history experience.