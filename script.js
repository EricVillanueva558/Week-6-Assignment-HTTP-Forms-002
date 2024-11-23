// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.


// Function to save user preferences from the form to localStorage
function savePreferences(event) {
    // Prevent the form from reloading the page upon submission
    event.preventDefault();

    // Retrieve values from the form fields
    const name = document.getElementById('name').value; // Get the user's name
    const backgroundColor = document.getElementById('background-color').value; // Get the chosen background color
    const foregroundColor = document.getElementById('foreground-color').value; // Get the chosen text color

    // Save these values to localStorage
    localStorage.setItem('name', name); // Save the name
    localStorage.setItem('backgroundColor', backgroundColor); // Save the background color
    localStorage.setItem('foregroundColor', foregroundColor); // Save the text color

    // Apply the preferences immediately after saving
    applyPreferences();

    // Notify the user that preferences have been saved
    alert('Your preferences have been saved!');
}

// Function to apply saved preferences from localStorage
function applyPreferences() {
    // Retrieve saved preferences from localStorage
    const name = localStorage.getItem('name'); // Retrieve the name
    const backgroundColor = localStorage.getItem('backgroundColor'); // Retrieve the background color
    const foregroundColor = localStorage.getItem('foregroundColor'); // Retrieve the text color

    // If a name is saved, personalize the greeting
    if (name) {
        document.getElementById('greeting').textContent = `Welcome, ${name}!`; // Set the greeting
    }

    // Apply background and text color preferences if they exist
    if (backgroundColor) {
        document.body.style.backgroundColor = backgroundColor; // Set the background color
    }
    if (foregroundColor) {
        document.body.style.color = foregroundColor; // Set the text color
    }
}

// Attach event listener to the form's submit button
document.getElementById('preferences-form').addEventListener('submit', savePreferences);

// Apply preferences whenever the page loads
applyPreferences();
