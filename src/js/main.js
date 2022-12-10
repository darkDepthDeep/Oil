

import cart from "./modules/cart";
import counter from './modules/counter';
import toggleCartStatus from './modules/toggleCartStatus';
import showHideForm from './modules/showHideForm';

window.addEventListener("DOMContentLoaded", () => {
    'use strict';
    
    cart();
    counter();
    toggleCartStatus();
    showHideForm();
});