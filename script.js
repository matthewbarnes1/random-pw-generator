var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() { 

  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numeric = "1234567890"
  var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~ "

  var lowerCaseArray = lowerCase.split("")
  var upperCaseArray = upperCase.split("")
  var numericArray = numeric.split("")
  var specialArray = special.split("")
  var combinedArray = [];

  var selectLength = parseInt(window.prompt("Choose a character length from 8 to 128."));

  if (!selectLength) {
    return;

  } if (selectLength < 8 || selectLength > 128) {
    window.alert("The character length must be a number between 8 and 128. Try again!");
    generatePassword();
  } if (window.confirm("Include lowercase characters?")) {
    combinedArray = combinedArray.concat(lowerCaseArray);
  } if (window.confirm("Include uppercase characters?")) {
    combinedArray = combinedArray.concat(upperCaseArray);
  } if (window.confirm("Include numbers")) {
    combinedArray = combinedArray.concat(numericArray)
  } if (window.confirm("Include special characters?")) {
    combinedArray = combinedArray.concat(specialArray)
  }

var password = "";
for (var i = 0; i < selectLength; i++) {
  passwordIndex = Math.floor(Math.random() * combinedArray.length);
  password = password + combinedArray[passwordIndex];
}
  return password;
}
generateBtn.addEventListener("click", writePassword);

