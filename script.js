function changeSize() {
    var scroll = window.scrollY;
    var width = Math.min(100, scroll / 5); // Maximum width of 100%
    var height = Math.min(400, scroll); // Maximum height of 400 pixels
  
    document.getElementById('expand').style.width = width + '%';
    document.getElementById('expand').style.height = height + 'px';
  }
  
  window.addEventListener('scroll', function() {
    requestAnimationFrame(changeSize);
  });
  