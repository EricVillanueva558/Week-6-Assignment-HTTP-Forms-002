# Assignment 8: Customizable Webpage

## Overview

This project demonstrates how to create a customizable webpage where users can set their preferences for:
- A personalized greeting based on their name.
- Background and foreground (text) colors of the page.

The project uses `localStorage` to persist the user's preferences so they are saved across visits. Users can adjust their preferences via a form and immediately see their changes applied.

## Files in This Repository

1. **index.html**: Contains the structure of the webpage and the form for setting preferences.
2. **style.css**: Defines the styles for the form elements and other components of the page.
3. **script.js**: Contains the JavaScript code to:
   - Capture user input.
   - Save preferences to `localStorage`.
   - Apply saved preferences on page load.
4. **README.md**: This file, which explains the repository contents and functionality.

## How It Works

- Users input their name and select their preferred background and text colors using a form.
- Upon form submission, preferences are saved to `localStorage`, and a notification informs the user.
- Preferences are automatically applied every time the page loads, ensuring a personalized experience.

## Getting Started

1. Clone the repository to your local machine.
2. Open `index.html` in any web browser.
3. Set your preferences using the form and see your customizations instantly.
