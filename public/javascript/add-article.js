async function newFormHandler(event) {
    event.preventDefault();
  
    const header = document.querySelector('input[name="header"]').value;
    const title = document.querySelector('input[name="title"]').value;
    const article_text = document.querySelector('input[name="article_text"]').value;
  
    const response = await fetch(`/api/articles`, {
      method: 'GET',
      body: JSON.stringify({
        header,
        title,
        article_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
}
  
// document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);