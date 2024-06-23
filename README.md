# Meal Planner App

Welcome to the Meal Planner App! This application allows users to plan their meals, track nutritional intake, and earn rewards for balanced nutrition.

## Features

- **Meal Planner Section:**
  - Display meal categories: Breakfast, Lunch, Dinner, Snacks.
  - Select foods from a predefined list with nutritional information.
  - Add multiple items to each meal category.
  
- **Food Database:**
  - Predefined list of foods with calories, protein, carbs, fats loaded from JSON.
  - Foods displayed in scrollable or searchable list.
  
- **Selected Foods Display:**
  - Show selected foods for each meal category.
  - Display nutritional information for each selected food item.
  
- **Nutritional Summary:**
  - Calculate and display total nutritional intake for the day.
  - Includes totals for calories, protein, carbs, and fats.
  - Compare totals against recommended daily values.
  
- **Save and Reset Buttons:**
  - Save current meal plan to LocalStorage.
  - Reset clears all selected foods and resets the meal planner.
  
- **Rewards Mechanism:**
  - Provides rewards for balanced meal planning based on points earned:
    - 10 points for 200-500 calories.
    - 20 points for 500-800 calories.
    - 30 points for over 800 calories.
    - Displays reward points earned with color-coded messages:
    - Light red for 10 points.
    - Light blue for 20 points.
    - Light green for 30 points.

## Technical Details

- **React JS:**
  - Implements meal planner logic using modern JavaScript (ES6).
  - Uses original and modular code (ES6 classes or modules) for maintainability.
  
- **HTML and CSS:**
  - Structured using semantic HTML5 elements.
  - Styled for visual appeal and consistency using CSS.
  - Responsive design for various screen sizes.

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sachinjha228/mealplanner.git
   cd mealplanner


## Available Scripts
 
###  `npm install`


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run deploy`
To deploy on github pages
