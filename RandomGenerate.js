export default class RandomGenerate {
   constructor() {

   }

   static randomGenerate(length) {
      let result = [];
      const vowels = "AEIOUYaeiouy";
      const consonants = "BCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz";
      const vowelsLength = vowels.length;
      const consonantsLength = consonants.length;
      for (let i = 0; i < length; i++) {
         result.push(vowels.charAt(Math.floor(Math.random() *
            vowelsLength))) + result.push(consonants.charAt(Math.floor(Math.random() *
            consonantsLength)));
      }
      return result.join('').substr(0, RandomGenerate.passwordLength());

   }

   static passwordLength() {
      let rangeInput = document.getElementById('customRange1');
      let screenRangeOut = document.getElementById('rangeOut');
      let result = screenRangeOut.value = rangeInput.value;
      return result;
   }

   static lowUpperCase() {
      let chUpper = document.getElementById('inlineCheckboxUppercase');
      let chLower = document.getElementById('inlineCheckboxLowercase');
      if (chUpper.checked && chLower.checked) {
         document.getElementById("passwordForm").value = (RandomGenerate.randomGenerate(RandomGenerate.passwordLength()));
      }
      if (chUpper.checked && !chLower.checked) {
         document.getElementById("passwordForm").value = (RandomGenerate.randomGenerate(RandomGenerate.passwordLength())).toUpperCase();
      }
      if (chLower.checked && !chUpper.checked) {
         document.getElementById("passwordForm").value = (RandomGenerate.randomGenerate(RandomGenerate.passwordLength())).toLowerCase();
      }
      if (!chLower.checked && !chUpper.checked) {
         document.getElementById("passwordForm").value = "Select case of letters";
      }
   }


   static textCopy() {
      const copyText = document.getElementById("passwordForm");
      copyText.select();
      document.execCommand("copy");
   }


}
