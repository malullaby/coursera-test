(function(window){
	var helloSpeaker = {};
	helloSpeaker.name = window;
	var speakWord = "Hello";
	helloSpeaker.speak = function () {
	  console.log(speakWord + " " + helloSpeaker.name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);