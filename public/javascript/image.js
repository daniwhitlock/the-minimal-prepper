async function uploadImage(event) {
  event.preventDefault();
  const imageData = document.getElementById("image-save")

  let response = await fetch('/api/users/images', {
    method: 'PUT',
    body: new FormData(imageData)
  });

  location.reload();
}


document.getElementById("image-save").addEventListener("submit", uploadImage);
