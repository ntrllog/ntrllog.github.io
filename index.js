function displayAnswer() {
    var text;
    var guess = prompt("There's likely a better way to ask for a guess");
    if (guess == "112114") {
      text = "Yep";
    }
    else {
      text = "Nope";
    }
    document.getElementById("answer").innerHTML = text;
  }