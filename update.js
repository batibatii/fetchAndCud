document
  .getElementById('updatePostForm')
  .addEventListener('submit', updatePost);

function updatePost(e) {
  e.preventDefault();
  const postTitle = document.getElementById('postTitle').value;

  const postBody = document.getElementById('postBody').value;

  const titleRegex = /^(?!.*[<>])[\p{L}\p{N}\p{P} ]{3,100}$/u
  const contentRegex = /^[^<>]{20,1000}$/;

  if (!titleRegex.test(postTitle || postTitle === "")) {
    const titleError = document.getElementById('titleError');
    titleError.textContent = 'Input is invalid or empty';
    return;
  } else {
    titleError.textContent = '';
  }

  if (!contentRegex.test(postBody)) {
    const textareaError = document.getElementById('textareaError');
    textareaError.textContent = ' Input is invalid or minimum length required: 20 characters.';
    return;
  } else {
    textareaError.textContent = '';
  }


  fetch(`${URL}/1`, {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
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

      console.log(json);

      const statusContainer = document.getElementById('statusContainer');
      statusContainer.classList.remove('hidden')

      const status = document.getElementById('status');
      status.innerText = 'Post is updated successfully!';

      const postPreview = document.getElementById('postPreview');
      postPreview.classList.remove('hidden');

      const newPostTitle = document.getElementById('newPostTitle');
      newPostTitle.innerText = json.title;

      const newPostBody = document.getElementById('newPostBody');
      newPostBody.innerText = json.body;

    });
}

