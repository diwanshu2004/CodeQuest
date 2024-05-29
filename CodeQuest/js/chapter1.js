// chapter1.js
function runChapter1Code() {
    let output = "";

    // Define variables
    let playerName = "Alex";  // string variable
    let playerLevel = 1;      // number variable
    let hasKeyCard = false;   // boolean variable

    // Output initial values
    output += "Player Name: " + playerName + "\n";
    output += "Player Level: " + playerLevel + "\n";
    output += "Has Key Card: " + hasKeyCard + "\n";

    // Check and update variables
    if (hasKeyCard) {
        output += "Door unlocked!\n";
    } else {
        output += "Find the key card to unlock the door.\n";
    }

    playerLevel += 1;
    hasKeyCard = true;

    // Output updated values
    output += "Player Level: " + playerLevel + "\n";
    output += "Has Key Card: " + hasKeyCard + "\n";

    if (hasKeyCard) {
        output += "Door unlocked!\n";
    }

    // Display the output in the game
    document.getElementById("chapter1Output").textContent = output;
}
