(function speak(window) {
  var helloSpeaker = new Object();
  var speakword = "Hello";
  
  helloSpeaker.speak = function(name){
    console.log(speakWord + " " + name);
  }
  
  window.helloSpeaker = helloSpeaker;
  
})(window);
