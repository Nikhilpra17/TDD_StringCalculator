# String Calculator with TDD and React

![String Calculator Demo](/demo.gif)

A web-based **String Calculator** application built using **React** and **Tailwind CSS**, following **Test-Driven Development (TDD)** principles. This project demonstrates modular, maintainable code with a focus on readability, reusability, and testability using **Jest** for unit testing.

---

**🚀 Features**

-  Add numbers from a comma-separated string input.

-  Supports multiple delimiters (e.g., ,, \n, custom delimiters like //;).

-  Handles negative numbers with clear error messages.

-  Dynamic UI for user interaction and result display.

-  Responsive design using Tailwind CSS.

-  TDD approach with comprehensive Jest test cases.

-  Deployed for public access.

---

**🛠️ Project Setup Instructions**

**Prerequisites**

Ensure you have the following installed on your system:

-  Node.js (v14 or later)

-  npm or yarn

**Installation Steps**

1.  Clone the repository:

2.  Install dependencies:

3.  Run tests:

4.  Start the development server:

5.  Open the app in your browser:

---

**📋 Explanation of Approach**

**TDD Workflow**

1.  **Understand the Requirements**: Break down the functionality into incremental steps.

2.  **Write a Failing Test**: Start by writing test cases for the smallest feature (e.g., an empty string returns 0).

3.  **Implement Code to Pass the Test**: Write the minimal logic needed to make the test pass.

4.  **Refactor the Code**: Improve code readability, structure, and reusability without breaking functionality.

5.  Repeat for additional features, like:

-  Handling multiple numbers.

-  Supporting custom delimiters.

-  Handling errors with negative numbers.

6.  **Frontend Integration**: Design a user-friendly interface and connect it with the logic.
---

**Code Structure**

-  src/components/Calculator.jsx: Main React component for UI and state management.

-  src/utils/add.js: Core function for string parsing and calculation.

-  src/utils/add.test.js: Comprehensive Jest test cases.

-  tailwind.config.js: Custom configuration for Tailwind CSS.

---

**🌐 Deployed Application**

Access the deployed application here: [String Calculator](https://tdd-string-calculator-ten.vercel.app/)

---

**🖌️ Design**

**Highlights**

-  Clean, responsive design using Tailwind CSS.

-  Divided UI:

-  **Left Section**: Title, input field, example usage text, and calculate button.

-  **Right Section**: Result displayed with bold and visually appealing effects.

-  Dynamic error and result handling.

---

**🧪 Testing**

**Test Cases**

-  Handles empty string input ("") → 0.

-  Single number input ("1") → 1.

-  Multiple numbers input ("1,2") → 3.

-  Custom delimiters ("//;\n1;2") → 3.

-  Throws errors for negative numbers ("-1,2") → Error: negative numbers not allowed: -1.

Run tests using:

```ruby
npm test
```
