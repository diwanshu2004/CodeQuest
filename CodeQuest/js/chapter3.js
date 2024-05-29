// chapter3.js
function runChapter3Code() {
    let output = "";

    // Define and Call Function Example
    function greet(name) {
        return "Hello, " + name + "!";
    }

    let message = greet("Alex");
    output += message + "\n";

    // Display the output in the game
    document.getElementById("chapter3Output").textContent = output;
}
