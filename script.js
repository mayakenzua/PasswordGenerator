// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt the user for password criteria
  var length = prompt("Enter the length of the password (between 8 and 128 characters)");
  
  // Validate the length input
  while (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters");
    length = prompt("Enter the length of the password (between 8 and 128 characters)");
  }

  var useLowercase = confirm("Do you want to include lowercase letters?");


  var useUppercase = confirm("Do you want to include uppercase letters?");


  var useNumbers = confirm("Do you want to include numbers?");

  var useSpecialCharacters = confirm("Do you want to include special characters?");

  generatePassword ();
  writePassword ();
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr.split("");
}

// Function to generate password with user input
function generatePassword() {
  if (useLowercase) {
    password += getRandom(specialCharacters);
  }
  if (useUppercase) {
    password += getRandom(specialCharacters);
  }
  if (useNumbers) {
    password += getRandom(specialCharacters);
  }
  if (useSpecialCharacters) {
    password += getRandom(specialCharacters);
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var getPassword = getPasswordOptions()
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);