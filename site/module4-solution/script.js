(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i];
  firstLetter = firstLetter.charAt(0);
  firstLetter = firstLetter.toLowerCase();
    if (firstLetter == "j") {
      byeSpeaker.name = names[i];
      byeSpeaker.speak();
    } else {
      helloSpeaker.name = names[i];
      helloSpeaker.speak(names[i]);
    }
}
})();