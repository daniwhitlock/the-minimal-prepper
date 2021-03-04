// async function newArticleHandler() {
//     // event.preventDefault();
//     console.log("I'm here");
  
//     // const title = document.querySelector('input[name="articles.title"]').value;
//     // const post_url = document.querySelector('input[name="post-url"]').value;
  
//     const response = await fetch(`/api/articles`, {
//       method: 'GET',
//       body: JSON.stringify({
//         header,
//         title,
//         article_url,
//         article_text
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
  
//     if (response.ok) {
//     //   document.location.replace('/');
//         console.log("made it");
//     } else {
//       alert(response.statusText);
//       console.log("didn't make it");
//     }
// }

// newArticleHandler();