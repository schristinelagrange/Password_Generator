// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseBox = document.getElementById("#lowerCase");
var upperCaseBox = document.getElementById("#upperCase");
var numericBox = document.getElementById("#numeric");
var specialBox = document.getElementById("#special");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function allowLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() *26) +97);
}


function allowUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() *26) +65);
}


function allowNumeric() {
  return String.fromCharCode(Math.floor(Math.random() *10) +48);
}


function allowSpecial() {
  var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~'[";
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}


