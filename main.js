// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likes = document.getElementsByClassName("like-glyph");
const thisAlert = document.getElementById("modal");

document.addEventListener('DOMContentLoaded', (event) => {
  for (let element of likes) {
    mimicServerCall("url")
      .then(() => {
        element.addEventListener("click", () => {
          if (element.innerText === "♡") {
            element.innerText = "♥"; 
            console.log(element.innerText);
          }
          else {
            element.innerText = "♡"; 
            console.log(element.innerText);
          }
        });
      })
      .catch(() => { 
        thisAlert.className = "";
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
