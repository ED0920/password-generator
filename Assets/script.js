// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Write password to the #password input
function generatePassword() {
  const minPasswordLength = 8;
  const maxPasswordLength = 128;
  const specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  const letters = "abcdefghijklmnopqrstuvwxyz"
  const numeric = "1234567890"
  
    // Ask user for their choice
  var numChars = window.prompt("How many charaters would you like your password to contain?");
      

if(numChars < minPasswordLength){
  console.log("min length 8 characters");
  window.alert("min length 8 characters");
  return null
}

if(numChars > maxPasswordLength){
  console.log("max length 128 characters");
  window.alert("max length 128 characters");
  return null
}

var requireLowercase = window.prompt("Do you require a lowercase? (Y/N)");
if (requireLowercase !== "Y" || requireLowercase !== "N" ){
  return null
}

var requireUppercase = window.prompt("Do you require an uppercase?");
if (requireUppercase !== "Y" || requireUppercase !== "N" ){
  return null
}
var requireNumeric = window.prompt("Do you require a numbers? (Y/N)");
if (requireNumeric !== "Y" || requireNumeric !== "N" ){
  return null
}
var requireSpecialChar = window.prompt("Do you require special characters?");
if (requireSpecialChar !== "Y" || requireSpecialChar !== "N" ){
  return null
}


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


