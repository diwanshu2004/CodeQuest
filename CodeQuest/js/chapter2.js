// chapter2.js
function runChapter2Code() {
    let output = "";

    // For Loop Example
    for (let i = 0; i < 5; i++) {
        output += "Loop iteration: " + i + "\n";
    }

    // Using Loops to Navigate a Maze
    let mazePath = ["start", "turn left", "move forward", "turn right", "exit"];
    for (let step of mazePath) {
        output += "Step: " + step + "\n";
    }

    // While Loop Example
    let energy = 10;
    while (energy > 0) {
        output += "Energy level: " + energy + "\n";
        energy--;
    }

    output += "Out of energy, maze navigation complete.\n";

    // Display the output in the game
    document.getElementById("chapter2Output").textContent = output;
}
