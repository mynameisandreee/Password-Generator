// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Generate password function
function generatePassword(){
  //options for the password
  var charLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']//lowercase array/storage
  var charUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']//uppercase storage
  var charSpecialChar = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"] // special character storage

  var charNums = ['0','1','2','3','4','5','6','7','8','9'] // numbers storage
  var chars = [] //new array to store the selected options 

  //var numOfChar = prompt("How many characters?")
  //console.log(numOfChar)
  // asks the user to input between 8 and 128 for the password length, if user put alphabet or  does not input number between that scope it will loop until the user input the correct number
  do {
    numOfChar = prompt("How many characters? (Must be between 8 and 128)")
    numOfChar = parseInt(numOfChar);
  } while (numOfChar < 8 || numOfChar > 128 || isNaN(numOfChar))
  
  //to confirm what options the user want for the password 
  var lowercase = confirm("Do you want to include lowercase letters?")
  var uppercase = confirm("Do you want to include upprercase letters?")
  var specialChar = confirm("Do you want to include special characters?")
  var nums = confirm("Do you want to include numbers?")
  var selectedOptions = []

  if (!lowercase && !uppercase && !specialChar && !nums) {
    alert("You must select at least one option for the password generation.");
    return generatePassword(); // Restart the process
  }

  //statements to include each selected options by the user to the new array
  if (lowercase === true) {
    chars = chars.concat(charLowercase)
    selectedOptions.push("lowercase")
  }

  if (uppercase === true) {
    chars = chars.concat(charUppercase)
    selectedOptions.push("Uppercase")
  }

  if (specialChar === true) {
    chars = chars.concat(charSpecialChar)
    selectedOptions.push("Special Character")

  }

  if (nums === true) {
    chars = chars.concat(charNums)
    selectedOptions.push("Numbers")

  }

  alert("You selected, " + selectedOptions)
 // console.log(chars)

  var newArr = []
//for loop to randomly choose from the concatenated array 
  for(var i = 0; i < numOfChar; i++){
    password = chars[Math.floor(Math.random()*chars.length)]
    newArr.push(password)
  }
  //to make the elements of the new array to join into one string 
  password = newArr.join('')
  //console.log(password)

  return password

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
