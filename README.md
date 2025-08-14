🚀 **Project Title & Tagline**
-------------------------

**Project Name:** Static Website (HTML, CSS, and JavaScript)
**Tagline:** A simple, customizable, and responsive website built using HTML, CSS, and JavaScript for personal or professional use.

📖 **Description**
----------------

This project is a static website built using HTML, CSS, and JavaScript. It is designed to be a simple, yet powerful, tool for creating custom websites. The website is divided into two main pages: the home page (index.html) and the history page (history.html). The home page displays a simple message, while the history page displays a list of previous pages visited by the user.

The website uses a CSS file (style.css) to define the layout and visual styling of the pages. The JavaScript file (script.js) adds interactivity to the website by storing and retrieving the user's page history.

The project is designed to be easy to customize and extend. You can add new pages, modify the existing layout, and add custom functionality to the website using JavaScript.

✨ **Features**
--------------

1. **Responsive Design**: The website is designed to be responsive, meaning it adapts to different screen sizes and devices.
2. **Customizable**: The website's layout and visual styling can be easily customized using CSS.
3. **Interactive**: The JavaScript file adds interactivity to the website, allowing you to store and retrieve the user's page history.
4. **Simple and Easy to Use**: The website is designed to be easy to use, with a simple and intuitive user interface.
5. **Offline Capable**: The website can be used offline, making it a great option for users who need to access the website without an internet connection.
6. **Cross-Browser Compatible**: The website is designed to be compatible with multiple browsers, including Chrome, Firefox, Safari, and Edge.
7. **Accessible**: The website is designed to be accessible, with features such as high contrast colors and font sizes that can be adjusted by the user.
8. **Extensible**: The website can be easily extended by adding new pages, modifying the existing layout, and adding custom functionality using JavaScript.

🧰 **Tech Stack**
--------------

| **Frontend** | **Backend** | **Tools** |
| --- | --- | --- |
| HTML | - | Git |
| CSS | - | Visual Studio Code |
| JavaScript | - | Chrome DevTools |

📁 **Project Structure**
-------------------------

* **index.html**: The home page of the website.
* **history.html**: The page that displays the user's page history.
* **style.css**: The CSS file that defines the layout and visual styling of the website.
* **script.js**: The JavaScript file that adds interactivity to the website.
* **README.md**: This file, which provides documentation and instructions for using the website.

⚙️ **How to Run**
----------------

### Setup

1. Clone the repository to your local machine using Git.
2. Open the project in Visual Studio Code or your preferred code editor.
3. Make any necessary changes to the code to customize the website.

### Environment

* The website can be run locally on a computer or device with a web browser.
* The website does not require any special software or hardware to run.

### Build

1. Open the project in Visual Studio Code or your preferred code editor.
2. Save the changes to the code.
3. The website will automatically rebuild and update in the browser.

### Deploy

1. The website can be deployed to a hosting service such as GitHub Pages or Netlify.
2. Follow the instructions for the hosting service to deploy the website.



How It Works

index.html: This file serves as the main entry point and simulates various "pages" (Home, About Us, Products, Contact Us) by using URL query parameters (?page=). Every time you navigate to one of these links, the script.js records the visit.

history.html: This is the dedicated page where the user's Browse history is displayed. It fetches data from localStorage and renders it dynamically.

script.js:
On every page load (except history.html), it retrieves the current page's details and adds them to an array stored in localStorage under the key 'userPageHistory'.

On history.html, it reads the 'userPageHistory' array from localStorage, sorts it by timestamp, and dynamically creates list items to display the history.

It also handles the "Clear All History" button, which removes the 'userPageHistory' item from localStorage, effectively wiping the user's history.

localStorage: This browser-based storage mechanism is used to persistently store the Browse history. Data stored here remains even after the browser is closed, providing a continuous history experience.


🧪 **Testing Instructions**
-------------------------

1. Open the website in a web browser.
2. Click on the links to navigate between the home page and the history page.
3. Test the website's responsiveness by resizing the browser window.
4. Test the website's accessibility by using different browsers and devices.
