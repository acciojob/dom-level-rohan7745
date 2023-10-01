//your JS code here. If required.
// Find the element with the id "level"
const targetElement = document.getElementById("level");

if (targetElement) {
    let domLevel = 0;
    let currentNode = targetElement;

    // Traverse up the DOM tree until we reach the root (html) element
    while (currentNode !== document.documentElement) {
        domLevel++;
        currentNode = currentNode.parentElement;
    }

    // Display the DOM level using the alert() function
    alert("The level of the element is: " + domLevel);
} else {
    alert("Element with id 'level' not found.");
}

