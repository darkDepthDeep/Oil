const toggleCartStatus = () => {

    const cartWrapper = document.querySelector('.basket__wrap')
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

export default toggleCartStatus;