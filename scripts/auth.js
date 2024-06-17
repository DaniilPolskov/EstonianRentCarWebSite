document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const closeBtn = modal.querySelector('.close');
  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');
  const signUpLink = document.getElementById('singup');
  const showRegisterLink = document.getElementById('show-register');
  const showLoginLink = document.getElementById('show-login');

  // Функция для проверки, авторизован ли пользователь
  function isAuthenticated() {
    // Проверяем, установлен ли флаг авторизации в сессии (здесь предполагается, что он будет установлен сервером)
    // Вместо PHP использован JavaScript, чтобы показать, что пользователя можно авторизовать.
    return sessionStorage.getItem('authenticated') === 'true';
  }

  // Функция для обновления текста ссылки SIGN UP в зависимости от состояния авторизации
  function updateSignUpLinkText() {
    if (isAuthenticated()) {
      signUpLink.textContent = 'LOG OUT';
    } else {
      signUpLink.textContent = 'SIGN UP';
    }
  }

  // Начальный вызов для установки текста ссылки в зависимости от текущего состояния
  updateSignUpLinkText();

  // Функция для открытия формы регистрации
  function openRegistrationForm(event) {
    event.preventDefault();
    modal.style.display = 'block';
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
  }

  // Функция для открытия формы входа
  function openLoginForm(event) {
    event.preventDefault();
    modal.style.display = 'block';
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  }

  // Функция для закрытия модального окна
  function closeModal() {
    modal.style.display = 'none';
  }

  // Установка обработчиков событий
  signUpLink.addEventListener('click', function(event) {
    if (isAuthenticated()) {
      // Очистить сеанс и переустановить текст ссылки
      sessionStorage.removeItem('authenticated');
      updateSignUpLinkText();
    } else {
      openRegistrationForm(event);
    }
  });

  showRegisterLink.addEventListener('click', openRegistrationForm);
  showLoginLink.addEventListener('click', openLoginForm);
  closeBtn.addEventListener('click', closeModal);
});
