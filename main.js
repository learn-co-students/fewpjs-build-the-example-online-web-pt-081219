// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let color = {
  "red" : "",
  "" : "red"
}

// Your JavaScript code goes here!
let hearts = document.querySelectorAll(".like")

function likeCallBack(e) {
  console.log(e)
  let heart = event.target
  mimicServerCall("url")
  .then(function(servermessage) {
    heart.innertext = glyphStates[heart.innertext]
    heart.style.color = color[heart.style.color]
  })
  .catch(function(error) {
    document.getElementById("modal").className = ""
  })
}


for(let glyph of hearts){
  glyph.addEventListener("click", likeCallBack)
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
