function onReady(callback) {
  var intervalID = window.setInterval(checkReady, 1000);
  document.getElementsByTagName('html')[0].style.overflow = "hidden";

  function checkReady() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalID);
      callback.call(this);
    }
  }
}

function show(id, value) {
  document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
  show('page', true);
  show('loading', false);
  document.getElementsByTagName('html')[0].style.overflowY = "scroll";
});
