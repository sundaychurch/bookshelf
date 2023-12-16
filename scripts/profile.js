function saveData() {
  // Получаем значения из полей
  var telInput = document.getElementById('tel');
  var passwordInput = document.getElementById('password');

  // Проверяем, что значения корректны
  var telValue = telInput.value;
  var passwordValue = passwordInput.value;

  if (isValidPhoneNumber(telValue) && isValidPassword(passwordValue)) {

    // Сохраняем данные в sessionStorage
    sessionStorage.setItem('tel', telValue);
    sessionStorage.setItem('password', passwordValue);
    localStorage.setItem('bskhrtPresent', true);
  } else {
    alert('Некорректный номер телефона или пароль!');
    event.preventDefault(); // Отменяем отправку формы, если данные некорректны
  }
}

function isValidPhoneNumber(phoneNumber) {
  return /^\+7\d{10}$/.test(phoneNumber);
}

function isValidPassword(password) {
  return /.{6,}/.test(password);
}
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (event) {
    // Проверяем, что нажата клавиша ESC (код 27)
    if (event.keyCode === 27) {
      // Выполняем переход на предыдущую страницу
      history.back();
    }
  });
});
