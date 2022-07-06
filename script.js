 let userName = prompt("Enter your username")

function validateUserName(userName) {
  if (userName.length < 10 && userName.length > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(validateUserName(userName))

let email = prompt("Enter your email address")

function validateEmail(email) {
  const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  emailCheckResult = emailCheck.test(email);
  if (emailCheckResult == true) {
    return true;
  } else {
    return false;
  }
}

console.log(validateEmail(email))

let phoneNumber = prompt("Enter your phone number")

function validatePhoneNumber(phoneNumber) {
  if (phoneNumber.length == 11) {
    return true;
  }else {
    return false;
  }
}