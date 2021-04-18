
export class PassGen {

   static getPassword(length, chUpper, chLower) {
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
      const randomLetters = result.join('').substr(0, length);
      if (chUpper && chLower) {
         return randomLetters;
      }
      if (chUpper && !chLower) {
         return randomLetters.toUpperCase();
      }
      if (!chUpper && chLower) {
         return randomLetters.toLowerCase();
      }
      if (!chUpper && !chLower) {
         return "Select case of letters";
      }
   }
}
