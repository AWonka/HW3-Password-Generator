// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = 0;
var ifLowerCase = " ";
var ifUpperCase = " ";
var ifNumeric = " ";
var ifSpecial = " ";
var ifSelected = 0;

var chars = " ";


var generatePassword = function() {
  var passwordLength = window.prompt("Enter a number between 8 and 128.");

if (!passwordLength) {
  return;
}

if (passwordLength < 8) {
  window.alert("Please select a number between 8 and 128!");
  generatePassword();
} else if (
  passwordLength > 128) {
    window.alert("Please select a number between 8 and 128!");
    generatePassword();
  } else {
    length = passwordLength;
  }

console.log(length);  
 
var passwordLowerCase = window.prompt("Type Y for lowercase N for no lowercase.");

if (!passwordLowerCase) {
  return;
}

passwordLowerCase = passwordLowerCase.toUpperCase();

if (passwordLowerCase === "Y") {
  ifLowerCase = "Y";
  ifSelected++;
  chars += "abcdefghijklmnopqrstuvwxyz";
} else if (passwordLowerCase === "N") {
  ifLowerCase = "N";
} else {
  window.alert("Please select Y or N for lowercase!");
  generatePassword();
}

console.log(ifLowerCase);

var passwordUpperCase = window.prompt("Type Y for uppercase N for no uppercase.");

if (!passwordUpperCase) {
  return;
}

passwordUpperCase = passwordUpperCase.toUpperCase();

if (passwordUpperCase === "Y") {
  ifUpperCase = "Y";
  ifSelected++;
  chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
} else if (passwordUpperCase === "N"){
  ifUpperCase = "N";
} else {
  window.alert("Please select Y or N for uppercase!");
  generatePassword();
}

console.log(ifUpperCase);

var passwordNumeric = window.prompt("Type Y to include Numbers or N for no numbers.");

if (!passwordNumeric) {
  return;
}

passwordNumeric = passwordNumeric.toUpperCase();

if (passwordNumeric === "Y") {
  ifNumeric = "Y";
  ifSelected++;  
  chars += "0123456789";
} else if (passwordNumeric === "N") {
  ifNumeric = "N";
} else {
  window.alert("Please select Y to include numbers or N for no numbers!")
  generatePassword();
}

console.log(ifNumeric);

var passwordSpecial = window.prompt("Type Y to include special characters N for no special characters.");

if (!passwordSpecial) {
  return;
}

passwordSpecial = passwordSpecial.toUpperCase();

if (passwordSpecial === "Y") {
  ifSpecial = "Y";
  ifSelected++;
  chars += "!@#$%^&*()_+";
} else if (passwordSpecial === "N") {
  ifSpecial = "N";
} else {
  window.alert("Please select Y to include special characters or N for no special characters!")
  generatePassword();
}

console.log(ifSpecial);

console.log(ifSelected);

console.log(chars);

// Will this create a loop if I don't return on cancel or does cancel end function?
if (ifSelected >= 1) {
  window.confirm("Click OK to generate your random password!");
} else if (ifSelected === 0) {
  window.alert("Please select 'Y' for at least one of the options!");
  generatePassword();
}

var retVal = "";
for (var i = 0; i < length; i++) {
  retVal += chars.charAt(Math.floor(Math.random() * chars.length));
}

console.log(retVal);

return retVal;

}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);