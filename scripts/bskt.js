document.addEventListener("DOMContentLoaded", function() {
  // Инициализация корзины из локального хранилища или создание новой
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  // Отображение содержимого корзины
  displayCartItems();
  // Функция для отображения товаров в корзине
  function displayCartItems() {
    const cartItemsList = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");
    cartItemsList.innerHTML = '';
    totalPriceElement.innerText = '';
    let totalPrice = 0;
    // Проход по каждому товару в корзине
    cart.forEach((item, index) => {
      // Создание элемента для отдельного товара
      const cartItem = document.createElement("li");
      cartItem.innerHTML = `
        <div class="cart-item" data-info="Цена: ${item.price} RUB">
          <div class="item-details">
            <img src="${item.image}" alt="${item.name}" width="50em">
            <div class="item-info">
              <div class="item-name">${item.name}</div>
              <div class="item-price">${item.price} RUB</div>
            </div>
          </div>
          <div class="item-actions">
            <button class="delete-button" onclick="removeCartItem(${index})">Удалить</button>
          </div>
        </div>
`;
      // Добавление товара в список корзины
      cartItemsList.appendChild(cartItem);
      // Обновление общей суммы
      totalPrice += parseFloat(item.price);
    });
    // Отображение общей суммы
    totalPriceElement.innerText = `Общая сумма: ${totalPrice.toFixed(2)} RUB`;
  }
  // Функция для добавления товара в корзину
  window.addProductToCart = function(product) {
    const isProductInCart = cart.some(item => item.name === product.name);
    if (!isProductInCart) {
      const newProduct = { ...product };
      cart.push(newProduct);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCartItems();
    } else {alert("Товар уже в корзине!");}
  };
  // Функция для удаления товара из корзины
  window.removeCartItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
  };

  // Функция для очистки корзины
  window.clearCart = function() {
    cart = [];
    localStorage.removeItem("cart");
    displayCartItems();
  };

  // Функция для сортировки товаров в корзине по цене
  window.sortCart = function() {
    const sortedCart = cart.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    cart = [...sortedCart];
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
  };
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
