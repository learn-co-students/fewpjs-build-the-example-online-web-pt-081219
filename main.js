// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.querySelectorAll('.like');
likes.forEach(el => {
  el.addEventListener('click', heart => clickForLikes(heart))
});

function clickForLikes(heart){

  const heartEl = heart.target.childNodes[1];
  const isHeartEmpty = (heartEl.innerText === EMPTY_HEART) ? true : false;

  if (isHeartEmpty) {
    mimicServerCall()
      .then(resp => {
        // show like
        heartEl.innerText = FULL_HEART;
        heartEl.classList.add('activated-heart');
      })
      .catch(error => {
        //  display the error message above!!
        const modalEl = document.querySelector('#modal');
        modalEl.textContent = error;
        modalEl.classList.remove("hidden");

        //  error message will be removed after 5 sec
        setTimeout(error => {
          modalEl.classList.add("hidden");
        }, 5000)
      })
  } else {
    //  remove the like when clicked
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
