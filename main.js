// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  let modal = document.querySelector('.hidden');
 
  document.body.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.className === "like-glyph") {
      mimicServerCall()
      .then(() => {
        e.target.innerText = FULL_HEART
        e.target.className = "activated-heart"
      })
      .catch(function(error) {
        console.log(error)
        modal.removeAttribute("class");
        modal.innerHTML = error
        setTimeout(() => {
          modal.className = "hidden"
          modal.innerHTML = "Error!"
        }, 5000);
      })
    }
    if (e.target.className === "activated-heart") {
      e.target.innerText = EMPTY_HEART
      e.target.className = "like-glyph"
    }
  });

   // function goodbyeError() {
  //   modal.className = "hidden"
  //   modal.innerHTML = "Error!"
  // };

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
