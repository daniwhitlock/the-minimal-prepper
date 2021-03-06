async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const articles_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    console.log('here');

    if (comment_text) {
        const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
            comment_text,
            articles_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
        });

        if (response.ok) {
        document.location.reload();
        } else {
        alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);