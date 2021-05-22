let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Red',
        tag: '',
        price: $15,
        inCart: 0
    },
    {
        name: 'Orange',
        tag: '',
        price: $15,
        inCart: 0
    },
    {
        name: 'Yellow',
        tag: '',
        price: $15,
        inCart: 0
    },
    {
        name: 'Green',
        tag: '',
        price: $15,
        inCart: 0
    },
    {
        name: 'Blue',
        tag: '',
        price: $15,
        inCart: 0
    },
    {
        name: 'Violet',
        tag: '',
        price: $15,
        inCart: 0
    },
]
for (let i=0; i < carts.length; i ++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
       localStorage.setItem('cartNumbers', productNumbers + 1); 
       document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1); 
        document.querySelector('.cart span').textContent = 1;
        
    }

}

onLoadCartNumbers();