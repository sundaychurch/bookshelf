// Ожидаем события, когда DOM полностью загружен, и затем вызываем функцию loadAccount
document.addEventListener('DOMContentLoaded', loadAccount);

// Функция для сохранения данных аккаунта в локальное хранилище
function saveAccount() {
  // Собираем данные из формы в объект formData
  const formData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    country: document.getElementById('country').value,
    favoriteGenre: document.getElementById('favoriteGenre').value,
    age: document.getElementById('age').value,
    gender: document.getElementById('gender').value
  };

  // Преобразуем объект formData в JSON и сохраняем в локальное хранилище под ключем 'accountData'
  localStorage.setItem('accountData', JSON.stringify(formData));

  // Выводим уведомление об успешном сохранении данных
  alert('Данные сохранены!');
}

// Функция для загрузки данных аккаунта из локального хранилища и заполнения соответствующих полей формы
function loadAccount() {
  // Получаем сохраненные данные из локального хранилища, если они есть, иначе создаем пустой объект
  const formData = JSON.parse(localStorage.getItem('accountData')) || {};

  // Заполняем соответствующие поля формы значениями из сохраненных данных
  document.getElementById('firstName').value = formData.firstName || '';
  document.getElementById('lastName').value = formData.lastName || '';
  document.getElementById('country').value = formData.country || '';
  document.getElementById('favoriteGenre').value = formData.favoriteGenre || '';
  document.getElementById('age').value = formData.age || '';
  document.getElementById('gender').value = formData.gender || '';
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
