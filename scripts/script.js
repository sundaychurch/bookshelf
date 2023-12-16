function checkRegistration()
{
    var response = prompt("Желаете пройти регистрацию на сайте? (Да/Нет)");
    if (response && response.toLowerCase() === "да") {
        alert("Круто!");
    } else {
        alert("Попробуй ещё раз");
    }
}

function loginShow()
{
    let response = prompt("Введите логин ");

    if(response.toLowerCase() === "админ")
    {
      let password = prompt("Введите пароль ");
      if(password.toLowerCase() === "я главный")
        alert("Здравствуйте!");
      else if(password === "")
        alert("Отменено");
      else
        alert("Неверный пароль");
    }
    else
      alert("Я вас не знаю");
}
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const nav = document.querySelector("nav");

  checkbox.addEventListener("change", function () {
    nav.classList.toggle("active", this.checked);
  });
});
