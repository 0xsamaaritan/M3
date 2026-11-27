
/*
 * M3 - Mnemonic Learning Engine
 * Version: 0.2
 *
 * Educational demonstration only.
 * No user passwords or private phrases are collected.
 */

"use strict";

// Select the interface elements
const phraseSelector =
    document.getElementById("phraseSelector");

const transformButton =
    document.getElementById("transformButton");

const learningResult =
    document.getElementById("learningResult");

const mnemonicResult =
    document.getElementById("mnemonicResult");


// Convert a phrase into a first-letter mnemonic
function createMnemonic(phrase) {

    return phrase
        .trim()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase())
        .join("");

}


// Handle the user's selection
transformButton.addEventListener("click", () => {

    // Read the selected fictional phrase
    const selectedPhrase = phraseSelector.value;

    // Generate the mnemonic pattern
    const result = createMnemonic(selectedPhrase);

    // Display the result safely as text
    mnemonicResult.textContent = result;

    // Reveal the learning explanation
    learningResult.hidden = false;

});
