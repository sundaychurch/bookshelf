function pikcha()
{
  var image = generateRandomString(5);
  let answer = prompt(image);
  if(image === answer)
  {
    alert("Вы не робот, бип-боп");
  }
  else if(isEmpty(answer))
  {
    alert("Пустой ввод");
  }
  else
  {
    var n = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    var m = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    let answer = prompt(n + " + " + m);
    if(answer == n+m)
    {
      alert("Урааа");
    }
    else if(isEmpty(answer))
    {
      alert("Пустой ввод");
    }
    else
    {
        alert("Ошибка");
    }
  }

}
function generateRandomString(size) {
  let abc = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

  if (size === 0) {
    return abc[Math.floor(Math.random() * abc.length)];
  } else {
    return abc[Math.floor(Math.random() * abc.length)] + generateRandomString(size - 1);
  }
}
function isEmpty(s)
{
    return s === "";
}
