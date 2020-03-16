// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here
function toggleModal(error) {
  let modal = document.querySelector("#modal");
  if (modal.style.display === "none") {
    modal.style.display = "block";
    modal.innerText = error 
    setTimeout(function() {
      let modal = document.querySelector("#modal");
      modal.style.display = "none"
    }, 5000)
  } else {
    modal.style.display = "none";
  }
}

let hearts = document.querySelectorAll('.like-glyph')
hearts.forEach(heart => {
  heart.addEventListener('click', e => {
    mimicServerCall()
    .then((res)  => {
        if (e.target.innerText === EMPTY_HEART) {
        e.target.innerText = FULL_HEART
        e.target.classList.add("activated-heart")
      } else { 
        e.target.innerText = EMPTY_HEART
        e.target.classList = "like-glyph"
      }
      return res
    })
    .catch((error) => {
      toggleModal(error)
    });
  })
})


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
        // reject("Random server error. Try again.");
      }
    }, 300);
  });
}
