# Etch-a-Sketch

This project is part of The Odin Project curriculum, specifically within the Foundations path. The goal of this exercise is to create a dynamic webpage with a grid of div elements, generated entirely through JavaScript, using Flexbox for layout, and adding interactive features with hover effects and color changes.

## Features

* A 16x16 grid of square divs generated via JavaScript.
* Divs are contained within a container div.
* The layout is managed using Flexbox, rather than CSS Grid, to maintain consistency with the lessons from The Odin Project.
* Each square in the grid changes color when hovered over, leaving a pixelated trail.
* A button allows the user to generate a new grid with custom dimensions (up to a maximum of 100 squares per side).
* Dynamic resizing ensures the new grid maintains the same total width (e.g., 960px) regardless of the number of squares.
* Added extra credit features:
    * Randomized RGB values for each square when interacted with.
    * Progressive darkening effect: squares darken by 10% with each hover interaction, reaching full black after ten interactions.

## Technologies Used

* HTML: Structure of the webpage, including the container and button elements.
* CSS: Styling, including Flexbox for the grid layout, and hover effects.
* JavaScript: DOM manipulation to dynamically create the grid, handle button prompts, and manage interactive effects such as color changes  and grid resetting.

## Key Learnings

From this project, I practiced and implemented several key concepts:

* JavaScript DOM Manipulation: Creating and inserting elements into the DOM dynamically.
* Flexbox: Managing grid layout without using CSS Grid, which will be covered in later lessons.
* Event Listeners: Handling user interactions, such as mouse hover and button clicks.
* CSS Hover Effects: Changing styles of elements when the user hovers over them.
* User Input Handling: Using prompt() to capture user input for grid size and ensuring proper input validation.
* Random Colors and Progressive Darkening: Enhancing user interaction by changing div colors randomly and progressively darkening on each interaction.
