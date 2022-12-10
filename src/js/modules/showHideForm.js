const showHideForm = () => {

    const socialBtn = document.querySelector('.social__btn');
    const form = document.querySelector('.contacts-form');
    const closeBtn = document.querySelector('.form-header__icon');
    const formInput = form.querySelectorAll('input');
    const formTextarea = form.querySelector('.contacts-form__textarea');
    const scroll = calcScroll();


    // Показ формы
    socialBtn.addEventListener('click', () => {
        form.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `17px`;
    });

    // Скрытие формы
    closeBtn.addEventListener('click', () => {
        form.style.display = 'none';
        document.body.style.overflow = '';
        formInput.forEach(input => {
            input.value = '';
        });
        formTextarea.value = '';
        document.body.style.marginRight = '0px';
    });

    // Скрытие формы кликом на подложку
    window.addEventListener('click', (e) => {
        if (e.target === form) {
            form.style.display = 'none';
            document.body.style.overflow = '';
            formInput.forEach(input => {
                input.value = '';
            });
            formTextarea.value = '';
            document.body.style.marginRight = '0px';
        }
    });

    // Функция по динмическому раасчету ширины скрола в зависимости от брузера
    function calcScroll() {
        let div = document.createElement('div');
    
        // Чтобы этот блок у нас существовал на странице нам необходимо задать ему определенные параметры
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
    
        document.body.appendChild(div);     // помещаем наш вновь созданный блок в body
    
        let scrollWidth = div.offsetWidth - div.clientWidth;           // div.offsetWidth это полная ширина вместе с бордерами, div.clientWidth - это включает в себя только паддинги и самый главный контент который есть внутри (и главное что сюда не включается прокрутка)
        div.remove();           // после того как мы узнали ширину нашей прокрутки мы можем удалить этот блок, он нам уже не нужен
        return scrollWidth;     // мы будем возвращать полученное значение scrollWidth
    }
};

export default showHideForm;