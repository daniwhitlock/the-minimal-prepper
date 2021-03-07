// error handling for username
const userErrorFunction = function() {

  const invalidUsername = document.querySelector('#username-signup');
  invalidUsername.value = 'Username already in use';
  invalidUsername.style.color = "red";
  
  const errorForm = document.querySelector('.user-form')
  errorForm.addEventListener('click', resetBox);
  
}

// resets boxes for user signup
const resetBox = function() {
  document.querySelector('.user-form').removeEventListener('click', resetBox);

  const invalidEmail = document.querySelector('#email-data');
  const invalidPassword = document.querySelector('#password-data');
  const invalidUsername = document.querySelector('#username-signup');

  invalidUsername.value = '';
  invalidUsername.style.color = "black";

  invalidEmail.value = '';
  invalidEmail.style.color = "black";

  invalidPassword.value = ''
  invalidPassword.style.color = "black";
  invalidPassword.type = 'password'
}

// error handling for email and password
const errorFunction = function() {
  console.log('yay')
  const invalidEmail = document.querySelector('#email-data');
  invalidEmail.value = 'Invalid Email or Password!';
  invalidEmail.style.color = "red";
  
  const invalidPassword = document.querySelector('#password-data');
  invalidPassword.value = 'Password must be at lease 4 characters long!'
  invalidPassword.style.color = "red";
  invalidPassword.type = "";

  const errorForm = document.querySelector('.user-form')
  errorForm.addEventListener('click', resetBox);
}

// regex for email validation
const ccEmailsAreValid = function(emails) {
  if (!emails.length) return true;
  const regexp = RegExp(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i);
  return regexp.test(emails)
}

// creates user when user information is submited
async function userCreate(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-data').value.trim();
  const password = document.querySelector('#password-data').value.trim();
  const underseven = document.querySelector('#underSeven-data').value.trim();
  const overSeven = document.querySelector('#overSeven-data').value.trim();
  const weeksPrep = document.querySelector('#weeksPrep-data').value.trim();
  const emailCheck = ccEmailsAreValid(email);

  // email validation
  if (!emailCheck) {
    return errorFunction();
  }

  // password validation
  if (password.length < 4){
    return errorFunction();
  }
  
  // if (username) {

    console.log(username);
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password,
        underseven,
        overSeven,
        weeksPrep,
        // diet
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      location.reload();
    } else {
     userErrorFunction();
    }
  // }

}
// console.log(document.querySelector('.user-form'));

async function loginForm(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.user-form').addEventListener('submit', userCreate);
document.querySelector('.user-login').addEventListener('submit', loginForm);

