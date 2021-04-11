 const passwordLength = () => {
    let rangeInput = document.getElementById('customRange1');
    let screenRangeOut = document.getElementById('rangeOut');
    let result = screenRangeOut.value = rangeInput.value;
    return result;
 }

 const randomGenerate = length => {
    let result = [];
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const strLength = str.length;
    for (let i = 0; i < length; i++) {
       result.push(str.charAt(Math.floor(Math.random() *
          strLength)));
    }
    return result.join('');
 }

 const lowUpperCase = () => {
    let chUpper = document.getElementById('inlineCheckboxUppercase');
    let chLower = document.getElementById('inlineCheckboxLowercase');
    if (chUpper.checked && chLower.checked) {
       document.getElementById("passwordForm").value = randomGenerate(passwordLength());
    }
    if (chUpper.checked && !chLower.checked) {
       document.getElementById("passwordForm").value = randomGenerate(passwordLength()).toUpperCase();
    }
    if (chLower.checked && !chUpper.checked) {
       document.getElementById("passwordForm").value = randomGenerate(passwordLength()).toLowerCase();
    }
    if (!chLower.checked && !chUpper.checked) {
       document.getElementById("passwordForm").value = "Select case of letters";
    }
 }

 const textCopy = () => {
    const copyText = document.getElementById("passwordForm");
    copyText.select();
    document.execCommand("copy");
 }

