document.addEventListener('DOMContentLoaded', function() {
    var singupLink = document.getElementById('singup');
  
    var modal = document.getElementById('modal');
  
    var closeBtn = document.getElementsByClassName('close')[0];
  
    singupLink.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
  