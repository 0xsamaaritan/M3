
/*
 * M3 - Password Memorability Coach
 * Version: 0.1
 *
 * Educational demonstration only.
 * No user passwords or private phrases are collected.
 */

"use strict";

// Fixed fictional educational example
const samplePhrase =
    "Every New Beginning Creates Another Opportunity";

// Get HTML elements
const transformButton =
    document.getElementById("transformButton");

const resultArea =
    document.getElementById("resultArea");

const mnemonicResult =
    document.getElementById("mnemonicResult");


// Convert a sentence into its first-letter pattern
function createMnemonic(phrase) {

    return phrase
        .trim()
        .split(/\s+/)
        .map(word => word[0].toUpperCase())
        .join("");

}


// Handle demonstration button
transformButton.addEventListener("click", () => {

    const result = createMnemonic(samplePhrase);

    mnemonicResult.textContent = result;

    resultArea.hidden = false;

    transformButton.textContent = "Mnemonic revealed";

    transformButton.disabled = true;

});
