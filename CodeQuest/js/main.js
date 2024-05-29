// main.js
document.addEventListener("DOMContentLoaded", function() {
    let titleElement = document.getElementById("title");
    let startButton = document.getElementById("startButton");
    let clueParagraph = document.getElementById("clue");
    let gameContent = document.getElementById("gameContent");

    startButton.addEventListener("click", function() {
        console.log("Game Started!");
        clueParagraph.textContent = "Use your programming skills to unlock the secrets.";
        loadChapter(1);
    });

    function loadChapter(chapterNumber) {
        switch (chapterNumber) {
            case 1:
                loadScript('js/chapter1.js', function() {
                    console.log("Chapter 1 Loaded");
                    displayChapter1Content();
                });
                break;
            case 2:
                loadScript('js/chapter2.js', function() {
                    console.log("Chapter 2 Loaded");
                    displayChapter2Content();
                });
                break;
            case 3:
                loadScript('js/chapter3.js', function() {
                    console.log("Chapter 3 Loaded");
                    displayChapter3Content();
                });
                break;
            case 4:
                loadScript('js/chapter4.js', function() {
                    console.log("Chapter 4 Loaded");
                    displayChapter4Content();
                });
                break;
            case 5:
                loadScript('js/chapter5.js', function() {
                    console.log("Chapter 5 Loaded");
                    displayChapter5Content();
                });
                break;
            case 6:
                loadScript('js/chapter6.js', function() {
                    console.log("Chapter 6 Loaded");
                    displayChapter6Content();
                });
            // Additional chapters will be added here
            default:
                console.log("All chapters loaded");
        }
    }

    function loadScript(src, callback) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = callback;
        document.head.appendChild(script);
    }

    function displayChapter1Content() {
        gameContent.innerHTML = `
            <h2>Chapter 1: Variables</h2>
            <p>Variables are used to store data values. Let's create some variables to begin your journey.</p>
            <pre><code>
let playerName = "Alex";
let playerLevel = 1;
let hasKeyCard = false;
            </code></pre>
            <button id="runChapter1Code">Run Code</button>
            <pre id="chapter1Output"></pre>
            <button id="nextToChapter2">Next Chapter</button> <!-- Button to proceed to Chapter 2 -->
        `;

        document.getElementById("runChapter1Code").addEventListener("click", function() {
            runChapter1Code();
        });

        document.getElementById("nextToChapter2").addEventListener("click", function() {
            loadChapter(2);
        });
        document.getElementById("nextToChapter3").addEventListener("click", function() {
            loadChapter(3);
        });
        document.getElementById("nextToChapter4").addEventListener("click", function() {
            loadChapter(4);
        });
        document.getElementById("nextToChapter5").addEventListener("click", function() {
            loadChapter(5);
        });
    }

    function displayChapter2Content() {
        gameContent.innerHTML = `
            <h2>Chapter 2: Loops</h2>
            <p>Loops allow you to repeat a block of code multiple times. Let's explore how loops work.</p>
            <pre><code>
    for (let i = 0; i < 5; i++) {
        console.log("Loop iteration:", i);
    }
    
    let mazePath = ["start", "turn left", "move forward", "turn right", "exit"];
    for (let step of mazePath) {
        console.log("Step:", step);
    }
    
    let energy = 10;
    while (energy > 0) {
        console.log("Energy level:", energy);
        energy--;
    }
            </code></pre>
            <button id="runChapter2Code">Run Code</button>
            <pre id="chapter2Output"></pre>
            <button id="nextToChapter3">Next Chapter</button>
        `;
    
        document.getElementById("runChapter2Code").addEventListener("click", function() {
            runChapter2Code();
        });
    
        document.getElementById("nextToChapter3").addEventListener("click", function() {
            loadChapter(3);
        });
    }
    function displayChapter3Content() {
        gameContent.innerHTML = `
            <h2>Chapter 3: Functions</h2>
            <p>Functions are reusable blocks of code. Let's learn how to define and call functions.</p>
            <pre><code>
    function greet(name) {
        return "Hello, " + name + "!";
    }
    
    let message = greet("Alex");
    console.log(message);
            </code></pre>
            <button id="runChapter3Code">Run Code</button>
            <pre id="chapter3Output"></pre>
            <button id="nextToChapter4">Next Chapter</button>
        `;
    
        document.getElementById("runChapter3Code").addEventListener("click", function() {
            runChapter3Code();
        });
    
        document.getElementById("nextToChapter4").addEventListener("click", function() {
            loadChapter(4);
        });
    }
    function displayChapter4Content() {
        gameContent.innerHTML = `
            <h2>Chapter 4: Conditionals</h2>
            <p>Conditionals allow your code to make decisions based on certain conditions. Let's explore some examples.</p>
            <pre><code>
    let isEnemySpotted = true;
    
    if (isEnemySpotted) {
        console.log("Take cover!");
    } else {
        console.log("Proceed with caution.");
    }
    
    let securityLevel = 3;
    
    if (securityLevel === 1) {
        console.log("Security Level 1: Minimal threats.");
    } else if (securityLevel === 2) {
        console.log("Security Level 2: Moderate threats.");
    } else if (securityLevel === 3) {
        console.log("Security Level 3: High threats.");
    } else {
        console.log("Unknown security level.");
    }
            </code></pre>
            <button id="runChapter4Code">Run Code</button>
            <pre id="chapter4Output"></pre>
            <button id="nextToChapter5">Next Chapter</button>
        `;
    
        document.getElementById("runChapter4Code").addEventListener("click", function() {
            runChapter4Code();
        });
    
        document.getElementById("nextToChapter5").addEventListener("click", function() {
            loadChapter(5); // Updated to load Chapter 5
        });
    }
        

    function displayChapter5Content() {
        // Display content for Chapter 5 (DOM Manipulation)
        let gameContent = document.getElementById("gameContent");
        gameContent.innerHTML = `
            <h2>Chapter 5: DOM Manipulation</h2>
            <p>DOM manipulation allows you to interact with the HTML elements of your webpage. Let's see how it works.</p>
            <button id="changeColorButton">Change Color</button>
            <button id="displayTextButton">Display Text</button>
            <div id="outputContainer"></div>
            <button id="nextToChapter6">Next Chapter</button>
        `;
    
        document.getElementById("changeColorButton").addEventListener("click", function() {
            changeColor();
        });
    
        document.getElementById("displayTextButton").addEventListener("click", function() {
            displayText();
        });
    
        function changeColor() {
            let clueParagraph = document.getElementById("clue");
            clueParagraph.style.color = "red";
        }
    
        function displayText() {
            let outputContainer = document.getElementById("outputContainer");
            let newParagraph = document.createElement("p");
            newParagraph.textContent = "This is a dynamically added paragraph.";
            outputContainer.appendChild(newParagraph);
        }
        document.getElementById("nextToChapter6").addEventListener("click", function() {
            loadChapter(6); // Updated to load Chapter 5
        });
    }
    function displayChapter6Content() {
        // Display content for Chapter 5 (DOM Manipulation)
        let gameContent = document.getElementById("gameContent");
        gameContent.innerHTML = `
            <h2> Greetings!!</h2>
    <p>Congratulations! You successfully completed this game.</p>
    
            <div id="outputContainer"></div>
        `;
    }
});
