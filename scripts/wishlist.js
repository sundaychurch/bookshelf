document.addEventListener("DOMContentLoaded", function() {
     // Получение элемента списка избранного
     const favoritesItemsList = document.getElementById("favoritesItems");
     // Инициализация избранного из локального хранилища или создание нового
     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
     // Отображение содержимого избранного
     displayFavoritesItems();
     // Функция для отображения товаров в избранном
     function displayFavoritesItems() {
       favoritesItemsList.innerHTML = '';
       // Проход по каждому товару в избранном
       favorites.forEach((item, index) => {
         // Создание элемента для отдельного товара в избранном
         const favoritesItem = document.createElement("li");
         favoritesItem.innerHTML = `
           <div class="wishlist-item" data-info="Цена: ${item.price} RUB">
             <div class="item-details">
               <div class="image-container">
                 <img src="${item.image}" alt="${item.name}">
               </div>
               <div class="item-info">
                 <div class="item-name">${item.name}</div>
                 <div class="item-price">${item.price} RUB</div>
               </div>
             </div>
             <div class="item-actions">
               <button class="add-to-cart-button" onclick="addToCart(${index})">Добавить в корзину</button>
               <button class="remove-button" onclick="removeFromFavorites(${index})">Удалить из избранного</button>
             </div>
           </div>
         `;
         // Добавление товара в список избранного
         favoritesItemsList.appendChild(favoritesItem);
       });
     }
     // Функция для удаления товара из избранного
     window.removeFromFavorites = function(index) {
       favorites.splice(index, 1);
       localStorage.setItem("favorites", JSON.stringify(favorites));
       displayFavoritesItems();
     };
     // Функция для очистки избранного
     window.clearFavorites = function() {
       favorites.length = 0;
       localStorage.removeItem("favorites");
       displayFavoritesItems();
     };
     // Функция для сортировки товаров в избранном по цене
     window.sortFavorites = function() {
       const sortedFavorites = [...favorites].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
       favorites.length = 0;
       favorites.push(...sortedFavorites);
       localStorage.setItem("favorites", JSON.stringify(favorites));
       displayFavoritesItems();
     };
     // Инициализация корзины из локального хранилища или создание новой
     let cart = JSON.parse(localStorage.getItem("cart")) || [];
     // Функция для добавления товара в корзину
     window.addToCart = function(index) {
       const product = favorites[index];
       const isProductInCart = cart.some(item => item.name === product.name);
       if (!isProductInCart) {
         const newProduct = { ...product };
         cart.push(newProduct);
         localStorage.setItem("cart", JSON.stringify(cart));
         displayCartItems();
         window.location.href = "bskt.html"; // Переход на страницу корзины
       } else {alert("Товар уже в корзине!");}
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
