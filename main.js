// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener( "DOMContentLoaded", () => {

  document.querySelector("#modal").classList.add("hidden");

  const likes = document.getElementsByClassName("like");

  for (let i = 0; i < likes.length; i++) {
    let like = likes[i]
    like.addEventListener("click", () => {
      mimicServerCall()
        .then(resp => {
          likeGlyph = like.querySelector(".like-glyph");
          if (likeGlyph.classList.contains("activated-heart")) {
            likeGlyph.classList.remove("activated-heart");
            likeGlyph.innerText = EMPTY_HEART;
          } else {
            likeGlyph.innerText = FULL_HEART;
            likeGlyph.classList.add("activated-heart");
          }
        })
        .catch(error => {
          modal = document.querySelector("#modal");
          modalMsg = document.querySelector("#modal-message");
          modal.classList.remove("hidden");
          modalMsg.innerText = error;
          setTimeout( () => {
            modal.classList.add("hidden");
          }, 5000)
        });
    })
  }

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
