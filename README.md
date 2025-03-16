# Mini Classroom Project

## Assignment Overview

This project was completed as part of an assignment. The objective was to implement a grading system with six functions in **classroom.ts**. Each function processes an array of grades and performs specific tasks related to grade management. The functionality includes calculating the number of grades, the sum of grades, the average grade, as well as categorizing grades based on passing, failing, and raised criteria.

### Functions Implemented:

1. **`getNumberOfGrades`**: Returns the number of grades in the array.
2. **`getSumGrades`**: Returns the sum of all grades in the array.
3. **`getAverageValue`**: Returns the average of all grades (sum of grades divided by the total number of grades).
4. **`getPassingGrades`**: Filters and returns all grades that are 10 or above (passing grades).
5. **`getFailingGrades`**: Filters and returns all grades that are 9 or below (failing grades).
6. **`getRaisedGrades`**: Returns all grades increased by 1, ensuring no grade exceeds a maximum of 20.

All the functions receive an array of grades, where each grade is a number (converted using `Number.parseInt`). The goal was to write these functions with proper types for better type safety in TypeScript.

## Technologies Used

- **TypeScript**: For writing the functions with proper types.
- **HTML/CSS**: For the user interface to interact with the form and submit grades.
- **JavaScript**: For frontend functionality, interacting with the form.

## Instructions to Run the App

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mohsinrony/mini-classroom-project.git
   ```

   Navigate to the project directory:

```bash
cd mini-classroom-project

```

Install dependencies (if any):

If you're using Node.js, run:

```bash
npm install

```

(Ensure that you have Node.js and npm installed.)

# Run the project:

Depending on your setup, you can either:

- Open the index.html file in a browser directly.

- If you have a development server setup (e.g., using webpack or Parcel), start the server by running:

```bash
npm run dev
```

or,

```bash
npm start
```

# Submit Your Grades:

- Open the UI in your browser.
- Interact with the form to submit your own grades on top of the ones provided.
- Check the output by interacting with the UI and reviewing the processed grades.

# Conclusion

This project demonstrates the use of TypeScript for building a grading system with clearly defined functions and types. The functions allow for dynamic manipulation of grades, such as categorizing them into passing, failing, and raised grades, making it a flexible tool for classroom or assignment-based grade tracking.
