document
  .getElementById('fetchAllPosts')
  .addEventListener('click', getPosts);

function getPosts() {
  fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      json.map(post => {
        const iconHTML = `<button data-post-id="${post.id}" class="delete" aria-label="Delete post: ${post.title}">
    <svg xmlns="http://www.w3.org/2000/svg" aria-label="delete this post"
        width="24" height="24" viewBox="0 0 24 24">
      <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/>
    </svg>
  </button>`

        const updateButtonHTML = `<a href="./update.html" class="update-button" aria-label="Update post: ${post.title}">UPDATE
  </a>`

        const outerWrapper = document.createElement('div');
        outerWrapper.classList.add('post-wrapper', 'flex');


        const postDiv = document.createElement('div');
        postDiv.classList.add('post', 'flex', 'justify-between');

        const contentWrapper = document.createElement('div');
        contentWrapper.classList.add('flex', 'flex-col', 'gap--8', 'wrapper')

        const h3 = document.createElement('h3');
        h3.innerText = post.title;
        h3.classList.add('post-title')

        const p = document.createElement('p');
        p.innerText = post.body;
        p.classList.add('post-body');

        const iconContainer = document.createElement('div');
        const updateButtonContainer = document.createElement('div');


        postDiv.appendChild(contentWrapper);
        contentWrapper.appendChild(h3);
        contentWrapper.appendChild(p);
        postDiv.appendChild(iconContainer);

        outerWrapper.appendChild(postDiv);
        outerWrapper.appendChild(updateButtonContainer);

        const container = document.getElementById('container');
        container.appendChild(outerWrapper);
        const heading = document.getElementById('heading')
        const buttonContainer = document.getElementById('buttonContainer');
        heading.classList.remove('hidden');
        buttonContainer.classList.remove('items-center', 'min-vh');
        iconContainer.classList.add('icon-container');
        iconContainer.innerHTML = iconHTML;
        updateButtonContainer.classList.add('update-button-container');
        updateButtonContainer.innerHTML = updateButtonHTML;
        const fetchedContainer = document.getElementById('container');
        fetchedContainer.classList.remove('hidden');

        const deleteButton = iconContainer.querySelector('.delete');
        deleteButton.addEventListener('click', (e) => {
          const postId = e.target.closest('.delete').getAttribute('data-post-id');
          deletePost(postId, outerWrapper);
        });


      });

      showCloseButton();
      document.getElementById('closeButton').addEventListener('click', hideFetchedPosts);
    });
}

function showCloseButton() {

  let closeButton = document.getElementById('closeButton');

  if (!closeButton) {

    closeButton = document.createElement('button');
    closeButton.id = 'closeButton';
    closeButton.classList.add('close-button')
    closeButton.setAttribute('aria-label', 'Close button');

    closeButton.setAttribute('tabindex', '0');

    const container = document.getElementById('container');
    container.appendChild(closeButton);
  }

  closeButton.style.display = 'flex';
}

function hideFetchedPosts() {
  const fetchedContainer = document.getElementById('container');
  fetchedContainer.classList.add('hidden');
  const heading = document.getElementById('heading');
  heading.classList.add('hidden')
  const buttonContainer = document.getElementById('buttonContainer');
  buttonContainer.classList.add('items-center', 'min-vh');
}


function deletePost(postId, postElement) {
  fetch(`${URL}/${postId}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        postElement.remove();
        console.log(`Post ${postId} deleted successfully`);
      } else {
        console.error('Failed to delete post');
      }
    })
    .catch((error) => {
      console.error('Error deleting post:', error);
    });
}