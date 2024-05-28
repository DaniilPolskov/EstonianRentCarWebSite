document.addEventListener('DOMContentLoaded', function() {
const followButton = document.querySelector('.buttton-follow-product');

followButton.addEventListener('click', function() {
    followButton.classList.toggle('like-off');
    followButton.classList.toggle('like-on');
});
});