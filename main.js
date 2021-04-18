import {
    PassGen
} from "./passwordGenerator.js";



const characterAmountRange = document.getElementById('customRange1');
const characterAmountNumber = document.getElementById('rangeOut');
const generatedPassField = document.getElementById('passwordForm');
const lowercaseField = document.getElementById('inlineCheckboxUppercase');
const uppercaseField = document.getElementById('inlineCheckboxLowercase');
const copyBtn = document.getElementById('btn-copy');

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

document.addEventListener('input', () => {
    const newPass = PassGen.getPassword(
        characterAmountRange.value,
        lowercaseField.checked,
        uppercaseField.checked,
    );
    generatedPassField.value = newPass;
});

copyBtn.addEventListener('click', () => {
    generatedPassField.select();
    document.execCommand("copy");
});

document.addEventListener("DOMContentLoaded", function () {
    generatedPassField.value = PassGen.getPassword(25, true, true);
    characterAmountNumber.value = 25;
});

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
};



