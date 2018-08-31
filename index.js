function enter() {
  document.getElementById("overlay").style.height = "0";
  document.getElementById("overlay_text").style.visibility = "hidden";
}

(function() {
  var visited = sessionStorage.getItem('visited');
  if (!visited) {
    sessionStorage.setItem('visited', true);
  }
  else {
    document.getElementById("overlay").style.transition = "0s";
    document.getElementById("overlay").style.height = "0";
    var element2 = document.getElementById("overlay_text");
    element2.parentNode.removeChild(element2);
  }
})();
