  document.addEventListener("DOMContentLoaded", function() {
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
      // Вызываем функцию для добавления товара в корзину
      addItemToCart(productName, productPrice, productImage, productDescription);
    });
    document.getElementById("addToFavoriteButton").addEventListener("click", function() {
      alert(`Вы добавили книгу "${productName}" в избранное!`);
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
    });
  });
