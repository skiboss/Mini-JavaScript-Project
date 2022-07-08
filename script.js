// object to store details
let userDetailsDatabase = {}


function getUserDetails() {
  // Username Validation
  let userName = prompt("Enter your username")

  if (userName == null) {
    return;
  }
  
  function validateUserName(userName) {
    if (userName.length < 10 && userName.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  
  while(validateUserName(userName) == false) {
    userName = prompt("Username must be less than 10 and greater than 0")
  }

  userDetailsDatabase["UserName"] = userName;
  
  // Email Address Validation
  let email = prompt("Enter your email address")

  if (email == null) {
    return;
  }
  
  function validateEmail(email) {
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    emailCheckResult = emailCheck.test(email);
    if (emailCheckResult == true) {
      return true;
    } else {
      return false;
    }
  }
  
  while (validateEmail(email) == false) {
    email = prompt("Enter a valid email")
  }

  userDetailsDatabase["Email"] = email;
  
  // Phone Number Validation
  let phoneNumber = prompt("Enter your phone number")

  if (phoneNumber == null) {
    return;
  }
  
  function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length == 11) {
      return true;
    }else {
      return false;
    }
  }
  
  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt("Enter a valid(11 digits) phone Number")
  }

  userDetailsDatabase["PhoneNumber"] = phoneNumber;
  
  // password
  let password = prompt("Enter your password")

  if (password == null) {
    return;
  }
  
  function validatePassword(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }
  
 while (validatePassword == false) {
   password = prompt("Password should be at least 6 digits")
 }

  userDetailsDatabase["Password"] = password;
  
  // confirm password
  let confirmPassword = prompt("Confirm your password")

  if (confirmPassword == null) {
    return;
  }
  
  function validateConfirmPassword(confirmPassword) {
    if (confirmPassword != password) {
      return false;
    } else {
      return true;
    }
  }
  
  while (validateConfirmPassword == false) {
    confirmPassword = prompt("Confirm password does not match password, try again!")
  }

  userDetailsDatabase["Confirm Password"] = confirmPassword;

} 


// function to display user details
function displayUserDetails(){
  alert(`Your Details\n\nUsername: ${userDetailsDatabase.UserName}\n
Phone Number: ${userDetailsDatabase.PhoneNumber}\n
Email: ${userDetailsDatabase.Email}`);
}