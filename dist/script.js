/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ "./src/js/modules/cart.js");
/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/counter */ "./src/js/modules/counter.js");
/* harmony import */ var _modules_toggleCartStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/toggleCartStatus */ "./src/js/modules/toggleCartStatus.js");



window.addEventListener("DOMContentLoaded", () => {
  'use strict';

  Object(_modules_cart__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_counter__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_toggleCartStatus__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/modules/cart.js":
/*!********************************!*\
  !*** ./src/js/modules/cart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cart = () => {
  const cartProductList = document.querySelector('.basket__wrap');
  const basketIcon = document.querySelector('.cart__icon');
  const basketCart = document.querySelector('.basket');
  const basketClose = document.querySelector('.basket__close');
  const basketInput = basketCart.querySelectorAll('input');
  const basketTextarea = basketCart.querySelector('#comment');
  const formResetBtn = basketCart.querySelector('.form__footer-btn');
  const basketPrice = document.querySelector('.basket__price');
  const quantityItem = document.querySelector('.basket__num');

  // Добавление товара в корзину //////////////////////////////////////////////////////////////////////////////////////

  // Отслеживаем клик на странице
  window.addEventListener('click', e => {
    // Проверяем что клик был на кнопке в корзину
    if (e.target.hasAttribute('data-cart')) {
      // Находим карточку с товаром, внутри которой был совершен клик
      const card = e.target.closest('.oil__card');

      // Собираем данные с этого товара и записываем их в единый объект productInfo
      const productInfo = {
        id: card.dataset.id,
        imgSrc: card.querySelector('.oil__img').getAttribute('src'),
        title: card.querySelector('.oil__subtitle').innerText,
        weight: card.querySelector('.oil__volume').innerText,
        price: card.querySelector('.oil__price').innerText,
        counter: card.querySelector('[data-counter]').innerText
      };

      // Проверять есть ли такой товар в корзине
      const itemInCart = cartProductList.querySelector(`[data-id="${productInfo.id}"]`);

      // Если товар есть в корзине
      if (itemInCart) {
        const counterElement = itemInCart.querySelector('[data-counter-2]');
        counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
      } else {
        // Если товара нет в корзине

        // Собранные данные подставим в шаблон для товара в корзине
        const cartItemHTML = `
            <li class="basket__item" data-id=${productInfo.id}>
                <arcticle class="basket__product">
                    <div class="basket__subtitle">${productInfo.title}”<span>${productInfo.weight.replace(/[a-zA-ZА-Яа-яЁё]/gi, '')} мл</span></div>
                    <div class="basket__wrapper">
                        <img src=${productInfo.imgSrc} alt="Масло" class="basket__img">
                        <div class="basket__counter">
                            <div class="basket__minus">
                                <img src="assets/icons/main/minus.png" alt="Минус" data-basket="minus">
                            </div>
                            <div class="basket__num" data-counter-2>${productInfo.counter}</div>
                            <div class="basket__plus">
                                <img src="assets/icons/main/plus.png" alt="Плюс" data-basket="plus">
                            </div>
                        </div>
                        <div class="basket__text">
                            <div class="basket__price">${productInfo.price.replace(/[a-zA-ZА-Яа-яЁё]/gi, '')}</div>
                            <span>грн</span>
                        </div>
                    </div>
                    <img src="assets/icons/basket/close.svg" alt="Крестик" class="basket__delete" data-close>
                </arcticle>
            </li>
        `;

        // Отобразим товар в корзине
        cartProductList.insertAdjacentHTML('beforeEnd', cartItemHTML);
      }

      // Сбрасываем счетчи кдобавленного товара на '1'
      card.querySelector('[data-counter]').innerText = '1';
    } else if (e.target.hasAttribute('data-cart-1')) {
      // Находим карточку с товаром, внутри которой был совершен клик
      const card = e.target.closest('.main__wrap');

      // Собираем данные с этого товара и записываем их в единый объект productInfo
      const productInfo = {
        id: card.dataset.id,
        imgSrc: document.querySelector('.oil__img').getAttribute('src'),
        title: card.querySelector('.main__subtitle').innerText,
        weight: document.querySelector('.oil__volume').innerText,
        price: document.querySelector('.oil__price').innerText,
        counter: card.querySelector('[data-counter-1]').innerText
      };

      // Проверять есть ли такой товар в корзине
      const itemInCart = cartProductList.querySelector(`[data-id="${productInfo.id}"]`);

      // Если товар есть в корзине
      if (itemInCart) {
        const counterElement = itemInCart.querySelector('[data-counter-2]');
        counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
      } else {
        // Собранные данные подставим в шаблон для товара в корзине
        const cartItemHTML = `
            <li class="basket__item" data-id=${productInfo.id}>
                <arcticle class="basket__product">
                    <div class="basket__subtitle">${productInfo.title}”<span>${productInfo.weight.replace(/[a-zA-ZА-Яа-яЁё]/gi, '')} мл</span></div>
                    <div class="basket__wrapper">
                        <img src=${productInfo.imgSrc} alt="Масло" class="basket__img">
                        <div class="basket__counter">
                            <div class="basket__minus">
                                <img src="assets/icons/main/minus.png" alt="Минус" data-basket="minus">
                            </div>
                            <div class="basket__num" data-counter-2>${productInfo.counter}</div>
                            <div class="basket__plus">
                                <img src="assets/icons/main/plus.png" alt="Плюс" data-basket="plus">
                            </div>
                        </div>
                        <div class="basket__text">
                            <div class="basket__price">${productInfo.price.replace(/[a-zA-ZА-Яа-яЁё]/gi, '')}</div>
                            <span>грн</span>
                        </div>
                    </div>
                    <img src="assets/icons/basket/close.svg" alt="Крестик" class="basket__delete" data-close>
                </arcticle>
            </li>
        `;

        // Отобразим товар в корзине
        cartProductList.insertAdjacentHTML('beforeEnd', cartItemHTML);
      }

      // Сбрасываем счетчикдобавленного товара на '1'
      card.querySelector('[data-counter-1]').innerText = '1';
    }
  });

  ////////////////  Корзина /////////////////////////////////////////////////////////////////////////////

  // Показ корзины

  const showBasket = () => {
    basketIcon.addEventListener('click', () => {
      basketCart.style.display = 'block';
      document.body.style.overflow = 'hidden';
      basketCart.scrollTo(0, 0);
    });
  };

  // Скрытие корзины

  const closeBasket = () => {
    basketClose.addEventListener('click', () => {
      basketCart.style.display = 'none';
      document.body.style.overflow = '';
      basketTextarea.value = '';
      basketInput.forEach(element => {
        element.value = '';
      });
      basketInput.forEach(input => {
        input.checked = false;
      });
    });
  };

  // Закрытие корзины кликая на подложку

  window.addEventListener('click', e => {
    if (e.target == basketCart) {
      basketCart.style.display = 'none';
      document.body.style.overflow = '';
      basketTextarea.value = '';
      basketInput.forEach(element => {
        element.value = '';
      });
      basketInput.forEach(input => {
        input.checked = false;
      });
    }
  });

  // Сброс данных в корзине 

  const clearForm = () => {
    formResetBtn.addEventListener('click', e => {
      basketTextarea.value = '';
      basketInput.forEach(element => {
        element.value = '';
      });
      basketInput.forEach(input => {
        input.checked = false;
      });
      e.preventDefault();
    });
  };
  clearForm();
  showBasket();
  closeBasket();
};
/* harmony default export */ __webpack_exports__["default"] = (cart);

/***/ }),

/***/ "./src/js/modules/counter.js":
/*!***********************************!*\
  !*** ./src/js/modules/counter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const counter = () => {
  // const oilMinusBtn = document.querySelector('[data-action="minus"]');
  // const oilPlusBtn = document.querySelector('[data-action="plus"]');
  // const oilCounter = document.querySelector('[data-counter]');

  // // Отслеживаем клик на кнопку oilMinusBtn
  //     const oilMinus = () => {
  //         oilMinusBtn.addEventListener('click', () => {

  //             // Проверяем чтобы счетчик был больше 1
  //             if (parseInt(oilCounter.innerText) > 1) {
  //                 // изменяем  текст в счетчике уменьшая его на 1
  //                 oilCounter.innerText = --oilCounter.innerText;
  //             }
  //         });
  //     };

  // // Отслеживаем клик на кнопку oilPlusBtn
  //     const oilPlus = () => {
  //         oilPlusBtn.addEventListener('click', () => {
  //             // изменяем текст в счетчике увеличивая его на 1
  //             oilCounter.innerText = ++oilCounter.innerText;
  //         });
  //     };

  //     oilPlus();
  //     oilMinus();

  window.addEventListener('click', e => {
    // Объявляем переменную для счетчика
    let counter;
    let counterBig;
    let counterBasket;

    // Проверяем клик строго по кнопкам Плюс либо Минус
    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
      // Находим обертку счетчика
      const counterWrapper = e.target.closest('.oil__counter');

      // Находим див с числом счетчика
      counter = counterWrapper.querySelector('[data-counter]');
    } else if (e.target.dataset.button === 'plus' || e.target.dataset.button === 'minus') {
      // Находим обертку счетчика
      const counterWrap = e.target.closest('.main__counter');

      // Находим див с числом счетчика
      counterBig = counterWrap.querySelector('[data-counter-1]');
    } else if (e.target.dataset.basket === 'plus' || e.target.dataset.basket === 'minus') {
      // Находим обертку счетчика
      const counterWrapBasket = e.target.closest('.basket__counter');

      // Находим див с числом счетчика
      counterBasket = counterWrapBasket.querySelector('[data-counter-2]');
    }

    // Проверяем является ли элемент по которому был совершён клик кнопкой Плюс
    if (e.target.dataset.action === 'plus') {
      counter.innerText = ++counter.innerText;
    } else if (e.target.dataset.button === 'plus') {
      counterBig.innerText = ++counterBig.innerText;
    } else if (e.target.dataset.basket === 'plus') {
      counterBasket.innerText = ++counterBasket.innerText;
    }

    // Проверяем является ли элемент по которому был совершён клик кнопкой Минус
    if (e.target.dataset.action === 'minus') {
      if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
      }
    } else if (e.target.dataset.button === 'minus') {
      if (parseInt(counterBig.innerText) > 1) {
        counterBig.innerText = --counterBig.innerText;
      }
    } else if (e.target.dataset.basket === 'minus') {
      if (parseInt(counterBasket.innerText) > 0) {
        counterBasket.innerText = --counterBasket.innerText;
      }

      // Проверка на товар который находится в корзине
      if (e.target.closest('.basket__product') && parseInt(counterBasket.innerText) === 0) {
        // Удаляем товар из корзины
        e.target.closest('.basket__item').remove();
      }
    }

    // Проверяем является ли элемент по которому был совершён клик Крестиком
    if (e.target.closest('.basket__delete')) {
      // Удаляем товар из корзины
      e.target.closest('.basket__item').remove();
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (counter);

/***/ }),

/***/ "./src/js/modules/toggleCartStatus.js":
/*!********************************************!*\
  !*** ./src/js/modules/toggleCartStatus.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const toggleCartStatus = () => {
  const cartWrapper = document.querySelector('.basket__wrap');
  console.log(cartWrapper.children);
  const cartWrap = document.querySelector('.basket__item');
  const orderForm = document.querySelector('.form-fields');

  // orderForm.style.display = 'none';

  if (cartWrapper.children.length > 0) {
    orderForm.style.display = 'block';
  } else {
    orderForm.style.display = 'none';
  }
};
/* harmony default export */ __webpack_exports__["default"] = (toggleCartStatus);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map