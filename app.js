/* 
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.
C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method

Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response. 
100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300.. - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
500... - Service error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/

document
  .getElementById('fetchAllPosts')
  .addEventListener('click', getPosts);

function getPosts() {
  fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      json.map(post => {
        const iconHTML = `<button class="delete">
  <svg xmlns="http://www.w3.org/2000/svg" 
       width="24" height="24" viewBox="0 0 24 24">
    <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/>
  </svg>
</button>`

        const updateButtonHTML = `<button class="update-button">UPDATE
</button>`

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

        // TODO: add update post <a> element with a link to update.html page containing a form element. Add query parameter (?id=post.id) to the url

        // TODO: add delete post button with event listener to call deletePost (make sure to provide correct post id to it).

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
      });

      showCloseButton();
    });
}

function showCloseButton() {

  let closeButton = document.getElementById('closeButton');

  if (!closeButton) {

    closeButton = document.createElement('button');
    closeButton.id = 'closeButton';
    closeButton.className = 'close-button';

    const container = document.getElementById('container');
    container.appendChild(closeButton);
  }
  
  closeButton.style.display = 'flex';
}

function getPostById() { }

function updatePost() { }

function deletePost() { }