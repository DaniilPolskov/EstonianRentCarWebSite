document.addEventListener('DOMContentLoaded', function() {
    var singupLink = document.getElementById('singup');
    var modal = document.getElementById('modal');
    var closeBtn = document.getElementsByClassName('close')[0];
    var body = document.querySelector('body');
  
    singupLink.addEventListener('click', function() {
        modal.style.display = 'block';
        body.classList.add('modal-open');
    });
  
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        body.classList.remove('modal-open');
    });
  
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            body.classList.remove('modal-open');
        }
    });
  });
  