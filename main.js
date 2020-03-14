// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll('li.like span');

  //Errors
  function showError(set = false) {
  const errorBox = document.querySelector('div#modal');
  if (set === true) {
    errorBox.hidden = false;
    errorBox.removeAttribute('class', 'hidden');
    setTimeout(function(){
      errorBox.hidden = true;
      errorBox.setAttribute('class', 'hidden');
    }, 5000)
  } else {
    errorBox.hidden = true;
    errorBox.setAttribute('class', 'hidden');
  };
  }; showError();

  function renderError(error) {
    const errorDiv = document.querySelector('div#modal');
    const p = document.createElement('p');
    p.innerHTML = `<p style="color:red;"><strong>${error.message}</strong></p>`;
    if (errorDiv.hidden === false) {
    errorDiv.appendChild(p);
      setTimeout(function () { errorDiv.removeChild(p); }, 5000)
    }
    console.log(error.message);
  };

  // Like post
  let addLike = false;
  
  function likePost(event) {
    let sym = event.target;
    if (addLike === false) {
      mimicServerCall().catch((error) => {
        showError(true); 
        renderError(error);
      }).then(() => {
        sym.innerHTML = FULL_HEART;
        sym.setAttribute('class', 'like-glyph activated-heart');
      });
    } else {
      sym.innerHTML = EMPTY_HEART;
      sym.removeAttribute('class', 'like-glyph activated-heart');
    }
    addLike = !addLike;
    console.log(event.target)
  };

  
  hearts.forEach(heart => {
    heart.addEventListener('click', likePost);
  });

});

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
