const toggleCartStatus = () => {

    const cartWrapper = document.querySelector('.basket__wrap');

    const cartWrap = document.querySelector('.basket__item');
    
    const orderForm = document.querySelector('.form-fields');


    const btn = document.querySelectorAll('.main__slider-text');
    console.log(btn);
    btn.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Hello');
        });
    });

    // orderForm.style.display = 'none';

    if (cartWrapper.children.length > 0) {

        orderForm.style.display = 'block';

    } else {

        orderForm.style.display = 'none';

    }
};



export default toggleCartStatus;