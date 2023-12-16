  document.addEventListener("DOMContentLoaded", function() {

        localStorage.setItem('previousPage', document.referrer);

    // Получаем URL предыдущей страницы из localStorage
    var previousPage = localStorage.getItem('previousPage');
    var bskhrtPresent = localStorage.getItem('bskhrtPresent');

// Получаем URL предыдущей страницы из localStorage
var previousPage = localStorage.getItem('previousPage');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productName = urlParams.get("title") || "Название книги";
    const productPrice = urlParams.get("price") || "RUB";
    const productImage = urlParams.get("image") || "url-to-your-book-image";
    const productDescription = urlParams.get("description") || "Описание книги и другая информация...";
    document.getElementById("productName").innerText = productName;
    document.getElementById("productPrice").innerText = `Цена: ${productPrice} RUB`;
    document.getElementById("productImage").src = productImage;
    document.getElementById("productDescription").innerText = productDescription;

    document.getElementById("buyButton").addEventListener("click", function() {
      if(bskhrtPresent === 'true')
      {
      // Вызываем функцию для добавления товара в корзину
      addItemToCart(productName, productPrice, productImage, productDescription);
      }
    else alert("Для начала войдите в аккаунт!");
    });
    document.getElementById("addToFavoriteButton").addEventListener("click", function() {
      if(bskhrtPresent === 'true')
      alert(`Вы добавили книгу "${productName}" в избранное!`);
      else
        alert("Для начала войдите в аккаунт!");
    });
    // Функция для добавления товара в корзину
    function addItemToCart(productName, productPrice, productImage, productDescription) {
      // Получаем текущую корзину из локального хранилища
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      // Добавляем новый товар в корзину
      const newItem = {
        name: productName,
        price: productPrice,
        image: productImage,
        description: productDescription
      };
      cart.push(newItem);
      // Обновляем локальное хранилище
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`Товар "${productName}" добавлен в корзину!`);
    }
    document.getElementById("addToFavoriteButton").addEventListener("click", function() {
      if(bskhrtPresent === 'true')
      {
      // Получаем текущий список избранных товаров из локального хранилища
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      // Добавляем текущий товар в избранное
      const newItem = {
        name: productName,
        price: productPrice,
        image: productImage,
        description: productDescription
      };
      favorites.push(newItem);
      // Обновляем локальное хранилище
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keydown", function (event) {
      // Проверяем, что нажата клавиша ESC (код 27)
      if (event.keyCode === 27) {
        // Выполняем переход на предыдущую страницу
        history.back();
      }
    });
  });
