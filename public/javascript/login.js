//const test


// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );

async function userCreate(test) {
    console.log('pass')
    console.log(test)
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

// document.querySelector('.user-form').addEventListener('submit', userCreate);
// $(".user-form").on('submit', userCreate)

// $(".user-form").click(function(){
//     console.log('pass')
// })

$(".user-form").click('submit', userCreate)
