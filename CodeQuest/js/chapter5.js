function displayChapter5Content() {
    // Display content for Chapter 5 (DOM Manipulation)
    let gameContent = document.getElementById("gameContent");
    gameContent.innerHTML = `
        <h2>Chapter 5: DOM Manipulation</h2>
        <p>DOM manipulation allows you to interact with the HTML elements of your webpage. Let's see how it works.</p>
        <button id="changeColorButton">Change Color</button>
        <button id="displayTextButton">Display Text</button>
        <div id="outputContainer"></div>
    `;

    document.getElementById("changeColorButton").addEventListener("click", function() {
        changeColor();
    });

    document.getElementById("displayTextButton").addEventListener("click", function() {
        displayText();
    });

    function changeColor() {
        let clueParagraph = document.getElementById("clue");
        clueParagraph.style.color = "green";
    }

    function displayText() {
        let outputContainer = document.getElementById("outputContainer");
        let newParagraph = document.createElement("p");
        newParagraph.textContent = "This is a dynamically added text.";
        outputContainer.appendChild(newParagraph);
    }
}