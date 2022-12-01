
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Check input to questions is valid
function isYNInputValid(input){
  const uppercaseInput = input.toUpperCase();
  if (uppercaseInput === "Y" || uppercaseInput === "N") {
    return true
  } else {
    alert("Must be Y or N")
    return false
  }
}

function myPrompt(question){
  return window.prompt(question).toUpperCase()
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
    if (isNaN(numChars)) {
      alert("Must input numbers")
      return null
    }
// Check if input is valid meets min/max requirement
  if(numChars < minPasswordLength) {
    window.alert("min length 8 characters");
    return null
  }

  if(numChars > maxPasswordLength) {
    window.alert("max length 128 characters");
    return null
  }
  
  var requireLowercase = myPrompt("Do you require a lowercase? (Y/N)");
    if (!isYNInputValid(requireLowercase)) {
      return null
    }

  var requireUppercase = myPrompt("Do you require an uppercase?");
    if (!isYNInputValid(requireUppercase)) {
      return null
    } 
  
  var requireNumeric = myPrompt("Do you require a numbers? (Y/N)");
    if (!isYNInputValid(requireNumeric)) {
      return null
  }

  var requireSpecialChar = myPrompt("Do you require special characters?");
    if (!isYNInputValid(requireSpecialChar)) {
      return null
  }
 
  var acceptedChars = ""
  if (requireLowercase === "Y") {
    acceptedChars += letters; 
  }
  if (requireUppercase === "Y") {
    acceptedChars += letters.toUpperCase();
  }
  if (requireNumeric === "Y") {
    acceptedChars += numeric
  }
  if (requireSpecialChar === "Y") {
    acceptedChars += specialChars
  }
 
  var password = ""
  for (var i = 0; i < parseInt(numChars); i++) {
    const randomIndex = Math.floor(Math.random() * acceptedChars.length)
    password += acceptedChars.charAt(randomIndex);
  
  }
  console.log(password)
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

