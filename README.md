🚀 Dev Stack

📌 Project Description

Dev Stack is a modern React-based technology stack builder application.

It helps developers explore different web development technologies and create their own customized technology stack by selecting required tools and frameworks.

The application provides a clean interface where users can browse technologies, filter them by category, and manage their selected stack easily.

🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Vite
- HTML5
- CSS3

✨ Features

1. Technology Exploration

- Users can browse different frontend, backend, database, language, and tool technologies.

2. Category Based Filtering

- Users can filter technologies based on categories like Frontend, Backend, Database, DevOps, and Tools,Tailwind CSS.

3. Personal Stack Builder
- Users can add technologies to their own stack and remove them when needed.


⚛️ React Questions & Answers


1. What is JSX, and why is it used in React?

JSX is a syntax that allows developers to write HTML-like code inside JavaScript.
It makes React components easier to create and understand.


2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.State is used to store and manage changing data inside a component.


3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to create and manage component state.In this project, useState was used to manage the selected technology stack and category selection.


4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects after rendering a component.It can be used for loading external data, API calls, or running code when data changes.


5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list and update the UI efficiently without unnecessary re-rendering.


6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI based on a condition.

Example:
When no technology is selected, the application shows:

"No technologies added yet."


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props.A child component can send data back by calling a function passed from the parent through props.
