// chapter4.js
function runChapter4Code() {
    let output = "";

    // Example code for conditionals
    let isEnemySpotted = true;

    if (isEnemySpotted) {
        output += "Take cover!\n";
    } else {
        output += "Proceed with caution.\n";
    }

    let securityLevel = 3;

    if (securityLevel === 1) {
        output += "Security Level 1: Minimal threats.\n";
    } else if (securityLevel === 2) {
        output += "Security Level 2: Moderate threats.\n";
    } else if (securityLevel === 3) {
        output += "Security Level 3: High threats.\n";
    } else {
        output += "Unknown security level.\n";
    }

    // Display the output in the game
    document.getElementById("chapter4Output").textContent = output;
}
