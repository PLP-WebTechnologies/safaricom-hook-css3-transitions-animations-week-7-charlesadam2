// Part 1: Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Example usage: Calculate area of rectangle with length 5 and width 10
let area = calculateArea(5, 10);
console.log(`Area of the rectangle: ${area}`);

// Part 2: Scope Example (Local vs Global Variables)
let globalVar = "This is a global variable!"; // Global variable

function testScope() {
    let localVar = "This is a local variable."; // Local variable
    console.log(localVar); // Can access local variable inside the function
    console.log(globalVar); // Can access global variable inside the function
}

testScope();
// console.log(localVar); // Uncommenting this line will result in an error since localVar is out of scope

// Part 3: Toggle Modal Visibility
function toggleModal() {
    const modal = document.querySelector('.modal');
    modal.classList.toggle('visible');
}

// Modal close button functionality
document.querySelector('.close-btn').addEventListener('click', () => {
    toggleModal();
});

// Button click triggers animation
function triggerAnimation() {
    const button = document.querySelector('.cta-button');
    button.classList.add('animate');
    
    // Reset the animation after it finishes
    button.addEventListener('animationend', () => {
        button.classList.remove('animate');
    });
}

// Event listener for the CTA button
document.querySelector('.cta-button').addEventListener('click', () => {
    toggleModal(); // Show the modal
    triggerAnimation(); // Trigger animation on the button
});




