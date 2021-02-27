//const test


// const { JSDOM } = require( "jsdom" );
// const { window} = new JSDOM( "" );
// const $ = require( "jquery" )( window );

async function userCreate(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-data').value.trim();
    const password = document.querySelector('#password-data').value.trim();
    const underSeven = document.querySelector('#underSeven-data').value.trim();
    const overSeven = document.querySelector('#overSeven-data').value.trim();
    const weeksPrep = document.querySelector('#weeksPrep-data').value.trim();
    const diet = document.querySelector('#diet-data').value.trim();
    console.log('pass')
    console.log(username)
    console.log(email)
    console.log(password)
    console.log(underSeven)
    console.log(overSeven)
    console.log(weeksPrep)
    console.log(diet)
    // event.preventDefault();
  
    // const email = document.querySelector('#email-login').value.trim();
    // const password = document.querySelector('#password-login').value.trim();
  
    // if (email && password) {
    //   const response = await fetch('/api/users/login', {
    //     method: 'post',
    //     body: JSON.stringify({
    //       email,
    //       password
    //     }),
    //     headers: { 'Content-Type': 'application/json' }
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/');
    //   } else {
    //     alert(response.statusText);
    //   }
    // }
}
// console.log(document.querySelector('.user-form'))
document.querySelector('.user-form').addEventListener('submit', userCreate);

// $(".user-form").on('submit', userCreate)

// $(".user-form").click(function(){
//     console.log('pass')
// })

// $(".user-form").click('submit', userCreate)
