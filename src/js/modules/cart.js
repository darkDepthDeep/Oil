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
window.addEventListener('click', (e) => {


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
            counter: card.querySelector('[data-counter]').innerText,
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
            counter: card.querySelector('[data-counter-1]').innerText,
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

    window.addEventListener('click', (e) => {
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
        formResetBtn.addEventListener('click', (e) => {
            
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

export default cart;