
const productControls = document.querySelectorAll('.product__quantity-controls');
const addProduct = document.querySelectorAll('.product__add');

productControls.forEach(product => {
    const productPlus = product.querySelector('.product__quantity-control_inc');
    const productMinus = product.querySelector('.product__quantity-control_dec');
    const productQuantity = product.querySelector('.product__quantity-value');

    productPlus.addEventListener('click', () => {
        productQuantity.textContent = +(productQuantity.textContent) + 1;
    });

    productMinus.addEventListener('click', () => {
        productQuantity.textContent = +(productQuantity.textContent) - 1;
        if (productQuantity.textContent <= 0) {
            productQuantity.textContent = 1;
        }
    });
});



addProduct.forEach(product => {
    product.addEventListener('click', (e) => {
        const product = e.target.closest('.product');
        const id = product.dataset.id;
        const img = product.querySelector('.product__image').src;
        const productCount = +(product.querySelector('.product__quantity-value').textContent);
        let cartProduct = document.querySelector(`.cart__product[data-id="${id}"]`);
        if (cartProduct) {
            let cartProductCount = +(cartProduct.querySelector('.cart__product-count').textContent) + productCount;
            cartProduct.querySelector('.cart__product-count').textContent = cartProductCount;
        }else {
            const cartProduct = document.querySelector('.cart__products')
            cartProduct.insertAdjacentHTML('beforeEnd',
            `<div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${productCount}</div>
            </div>`);
            console.log(cartProduct)
        }

    });
});



