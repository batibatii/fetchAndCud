
document
  .getElementById('createPostForm')
  .addEventListener('submit', createPost);

function createPost(e) {
  e.preventDefault();
  const postTitle = document.getElementById('postTitle').value;

  const postBody = document.getElementById('postBody').value;

  // TODO: add input validation for  both inputs

  fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      title: postTitle,
      body: postBody,
      userId: 1,
    }), 
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      // TODO: Show confirmation to the user on the screen that the post was created and the content of the post.
      console.log(json);

      const statusContainer = document.getElementById('statusContainer');
      statusContainer.classList.remove('hidden')

      const postPreview = document.getElementById('postPreview');
      postPreview.classList.remove('hidden');

      const status = document.getElementById('status');
      status.innerText = 'Post is created successfully!';


      const newPostTitle = document.getElementById('newPostTitle');
      newPostTitle.innerText = json.title;

      const newPostBody = document.getElementById('newPostBody');
      newPostBody.innerText = json.body;

    });
}
