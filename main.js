const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//  Add callback to like els
const likeEls = document.querySelectorAll('.like');
likeEls.forEach(el => {
  el.addEventListener('click', e => likeCallback(e))
});


function likeCallback(e){

  const heartEl = e.target.childNodes[1];
  const isHeartEmpty = (heartEl.innerText === EMPTY_HEART) ? true : false;

  if (isHeartEmpty) {
    mimicServerCall()
      .then(resp => {
        //  Display Like
        heartEl.innerText = FULL_HEART;
        heartEl.classList.add('activated-heart');
      })
      .catch(error => {
        //  Display error message
        const modalEl = document.querySelector('#modal');
        modalEl.textContent = error;
        modalEl.classList.remove("hidden");

        //  Remove error message after 2 seconds
        setTimeout(error => {
          modalEl.classList.add("hidden");
        }, 2000)
      })
  } else {
    //  Remove Like
    heartEl.classList.remove('activated-heart')
    heartEl.innerText = EMPTY_HEART;
  }
}

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
