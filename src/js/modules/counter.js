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


window.addEventListener('click', (e) => {
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
    if(e.target.dataset.action === 'plus') {

        counter.innerText = ++counter.innerText;

    } else if (e.target.dataset.button === 'plus') {

        counterBig.innerText = ++counterBig.innerText;

    } else if (e.target.dataset.basket === 'plus') {

        counterBasket.innerText = ++counterBasket.innerText;
    }

    // Проверяем является ли элемент по которому был совершён клик кнопкой Минус
    if(e.target.dataset.action === 'minus') {

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
        if(e.target.closest('.basket__product') && parseInt(counterBasket.innerText) === 0) {
            
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

export default counter;