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
      const div = document.createElement('div');
      div.classList.add('post');
      const h3 = document.createElement('h3');
      h3.innerText = post.title;

      const p = document.createElement('p');
      p.innerText = post.body;

      div.appendChild(h3);
      div.appendChild(p);

      // TODO: add update post <a> element with a link to update.html page containing a form element. Add query parameter (?id=post.id) to the url


      // TODO: add delete post button with event listener to call deletePost (make sure to provide correct post id to it).

      const container = document.getElementById('container');
      container.appendChild(div);
    })
  });
}

function getPostById() {}

function updatePost() {}

function deletePost() {}
