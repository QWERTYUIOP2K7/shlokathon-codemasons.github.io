// Prompt the user for their name before anything else
let myName;
while (!myName) {
    myName = prompt("कृपया अपना नाम लिखें।").trim();
}

// Save the name in localStorage
localStorage.setItem("name", myName);

// Now create and display the elements dynamically
document.body.innerHTML = `
    <h1>${myName}, इस पुस्तकालय में आपका स्वागत है।</h1>
    
`;

// Add event listener to the button
document.querySelector("button").addEventListener("click", () => {
    location.reload(); // Reload page to ask for a new name
});