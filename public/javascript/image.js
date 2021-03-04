async function uploadImage(event) {
    event.preventDefault();
    const imageData = document.getElementById("image-save")
    const imageInfo = document.getElementById("imageInfo")
   
    console.log(new FormData(imageData))
    
    let response = await fetch('/api/users/images', {
        method: 'PUT',
        body: new FormData(imageData)
      });

      location.reload();
      console.log(response)

    // const response = await fetch('api/users/images', {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //       post_id: id
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
      
    //   if (response.ok) {
    //     document.location.reload();
    //   } else {
    //     alert(response.statusText);
    //   }
  }

 
  document.getElementById("image-save").addEventListener("submit", uploadImage);