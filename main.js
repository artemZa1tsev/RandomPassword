import RandomGenerate from "./RandomGenerate.js";


document.querySelector('.checkboxes').addEventListener('click', function() {
    RandomGenerate.lowUpperCase();
});


document.querySelector('.checkboxes1').addEventListener('click', function() {
    RandomGenerate.lowUpperCase();
});


document.getElementById('btn-copy').addEventListener('click', function() {
     RandomGenerate.textCopy();
}); 

document.getElementById('customRange1').addEventListener('input', function() {
    RandomGenerate.passwordLength();
    RandomGenerate.lowUpperCase();

}); 




