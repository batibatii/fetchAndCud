
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
      document.getElementById('status').innerText = 'Post is created successfully!';

      document.getElementById('newPostTitle').innerText = json.title;
    });
}
