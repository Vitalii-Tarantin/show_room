// const data = [
//     // {
//     //     imgSrc: 'images/product_1.jpg',
//     //     rating: 4,
//     //     name: `Women's shorts`,
//     //     price: 45.00,
//     //     id: 'womens_shorts'
//     // },
//     // {
//     //     imgSrc: 'images/product_2.jpg',
//     //     rating: 3,
//     //     name: `Women's T-shirts`,
//     //     price: 55.00,
//     //     id: 'womens_t_shirts'
//     // },
//     // {
//     //     imgSrc: 'images/product_3.jpg',
//     //     rating: 3,
//     //     name: `Women's shirts`,
//     //     price: 25.00,
//     //     id: 'womens_shirts'
//     // },
//     // {
//     //     imgSrc: 'images/product_4.jpg',
//     //     rating: 5,
//     //     name: `2 Piece Swimsuit`,
//     //     price: 35.00,
//     //     id: 'two_piece_swimsuit'
//     // },
//     // {
//     //     imgSrc: 'images/product_5.jpg',
//     //     rating: 4,
//     //     name: `Womens long dress`,
//     //     price: 145.00,
//     //     id: 'womens_long_dress'
//     // },
//     // {
//     //     imgSrc: 'images/product_6.jpg',
//     //     rating: 4,
//     //     name: `Women jeans`,
//     //     price: 55.00,
//     //     id: 'women_jeans'
//     // },
//     // {
//     //     imgSrc: 'images/product_7.jpg',
//     //     rating: 3,
//     //     name: `Glasses for women`,
//     //     price: 15.00,
//     //     id: 'glasses_for_women'
//     // },
//     // {
//     //     imgSrc: 'images/product_8.jpg',
//     //     rating: 5,
//     //     name: `Women's shoes`,
//     //     price: 245.00,
//     //     id: 'womens_shoes'
//     // },
//     // {
//     //     imgSrc: 'images/product_9.jpg',
//     //     rating: 5,
//     //     name: `Womens short dresses`,
//     //     price: 85.00,
//     //     id: 'womens_short_dresses'
//     // },
//     // {
//     //     imgSrc: 'images/product_10.jpg',
//     //     rating: 3,
//     //     name: `Women's leather jackets`,
//     //     price: 345.00,
//     //     id: 'womens_leather_jackets'
//     // },
//     // {
//     //     imgSrc: 'images/product_11.jpg',
//     //     rating: 4,
//     //     name: `Womens summer dresses`,
//     //     price: 95.00,
//     //     id: 'womens_summer_dresses'
//     // },
//     // {
//     //     imgSrc: 'images/product_12.jpg',
//     //     rating: 3,
//     //     name: `Man Red Jacket`,
//     //     price: 145.00,
//     //     id: 'man_red_jacket'
//     // }
    
// ]
let data
let error 

const cart = {
    // 'key1': 'foo',
    // 'key2': 'bar'
}

function addToCart(productId) {
    const count = cart[productId]

    if (count) {
        cart[productId] = count + 1
    }else{
        cart[productId]  = 1
    }

    // localStorage.setItem('cart', cart)

       render() 
}

function removeFromCart(productId) {
    const count = cart[productId]
    if (count) {
        if (count > 1) {
            cart[productId] = count - 1
        } else {
            delete cart[productId] 
        }
    }

    render()
}

function createPlaceholderElement() {
    const div = document.createElement('div')
    div.className = 'placeholder'

    div.innerHTML = `
    <div class="loader">Loading...</div>
    `
    return div
}

function createProductElement(product) {
    const { imgSrc, name, rating, price, id } = product;
   

    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
    <div class="product_image"><img src="${imgSrc}" alt="${name}"></div>
		<div class="rating rating_${rating}" data-rating="${rating}"">
			<i class="fa fa-star"></i>
			<i class="fa fa-star"></i>
			<i class="fa fa-star"></i>
			<i class="fa fa-star"></i>
			<i class="fa fa-star"></i>
		</div>
		<div class="product_content clearfix">
			<div class="product_info">
				<div class="product_name"><a href="product.html?id=${id}">${name}</a></div>
				<div class="product_price">$${price}</div>
		    </div>
		<div class="product_options">
            <div class="product_fav product_option" onclick="removeFromCart('${id}')">-</div>
			<div class="product_buy product_option"><img src="images/shopping-bag-white.svg" alt=""></div>
			<div class="product_fav product_option" onclick="addToCart('${id}')">+</div>
		</div>
		</div>
    `

    const count = cart[id]

    if (count) {
        const productBuyElement = div.querySelector('.product_buy');
        const countElement = document.createElement('div');
        countElement.className = 'product_count';
        countElement.innerHTML = count;
        productBuyElement.appendChild(countElement);
    }

    return div
}

function createCartItemElement(product, quantity) {
    const { imgSrc, name, id, price } = product 

    const total = price * quantity

    const li = document.createElement('li')
    li.className = 'cart_product d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start'

    li.innerHTML = `
    <!-- Product Image -->
    <div class="cart_product_image"><img src="${imgSrc}" alt="${name}"></div>
    <!-- Product Name -->
    <div class="cart_product_name"><a href="product.html?id=${id}">${name}</a></div>
    <div class="cart_product_info ml-auto">
        <div class="cart_product_info_inner d-flex flex-row align-items-center justify-content-md-end justify-content-start">
            <!-- Product Price -->
            <div class="cart_product_price">$${price}</div>
            <!-- Product Quantity -->
            <div class="product_quantity_container">
                <div class="product_quantity clearfix">
                    <input id="quantity_input" type="text" pattern="[0-9]*" value="${quantity}">
                    <div class="quantity_buttons">
                        <div id="quantity_inc_button" class="quantity_inc quantity_control"><i class="fa fa-caret-up" aria-hidden="true"></i></div>
                        <div id="quantity_dec_button" class="quantity_dec quantity_control"><i class="fa fa-caret-down" aria-hidden="true"></i></div>
                    </div>
                </div>
            </div>
            <!-- Products Total Price -->
            <div class="cart_product_total">$${total}</div>
            <!-- Product Cart Trash Button -->
            <div class="cart_product_button">
                <button class="cart_product_remove"><img src="images/trash.png" alt=""></button>
            </div>
        </div>
    </div
    `
    return li
}

function render() {
    //Product
    const root = document.getElementById('root');

    root.innerHTML = ''

    if (data && !error) {
        for (const product of data) {
            const div = createProductElement(product);
            root.appendChild(div);
        }
    
    }else if (!data && !error){
        for(let index = 0; index < 6; index++) {
            const placeholderElement = createPlaceholderElement()
            root.appendChild(placeholderElement)
        } 
    }else{
        root.append(error)
    }
    const cartProductIds = Object.keys(cart);

    //Cart number
    const cartNumElement = document.querySelector('.cart_num');
    cartNumElement.innerHTML = cartProductIds.length;


    //Cart Item
    const cartProductsRoot = document.getElementById('cart_products_root');
     cartProductsRoot.innerHTML = ''

     let subtotal = 0

    for (const productId of cartProductIds) {
        const product = data.find(p => p.id === productId);
        const quantity = cart[productId]

        const cartItemElement = createCartItemElement(product, quantity);
        cartProductsRoot.appendChild(cartItemElement);

        subtotal = subtotal + product.price * quantity;
    }
    //Cart total
    const shipping = 5
    document.getElementById('cart_subtotal').innerHTML = `$${subtotal}`
    document.getElementById('cart_shipping').innerHTML = `$${shipping}`
    document.getElementById('cart_total').innerHTML = `$${subtotal + shipping}`
    
}

function toggleCartModal(event) {
    event.preventDefault()

    document
    .querySelector('.cart_overlay')
    .classList
    .toggle('cart_overlay_closed');
}

function mapProducts(data) {
    const { values: rows } = data

    const headerKeys = rows.shift()

   const products = rows.map(row => {
        const product = {}

        row.forEach((cell, cellIndex) => {
            const key = headerKeys[cellIndex]
            product[key] = cell
        }) 
        return product
    })
    return products
}

function loadProducts() {
    const sheetId = '140oW4R-nykWoVKflwtBTJwAuI4ZkmSspUKqGDQGAw34'
    const apiKey = 'AIzaSyBiVaiGupzfHmq0GMKqP4BVDNzFh38NviE'

    render()

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`)
    .then(response => {
        if(!response.ok) {
            throw new Error(response.statusText)
        }
        return response
    })
    .then(response => response.json())
    .then(responseData => {
        data = mapProducts(responseData)
      
    })
    .catch(responseError => {
        error = responseError
    })
    .finally(() => {
        render()
    })


   
   

  document
  .getElementById('cart_link')
  .addEventListener('click', toggleCartModal)

  document
  .getElementById('cart_close_area')
  .addEventListener('click', toggleCartModal);


  document.forms.checkoutForm.addEventListener('submit', placeOrder)

//   localStorage.getItem('cart')
}

function placeOrder(event) {
    event.preventDefault()

    const { checkoutForm } = document.forms
    const { nameInput, phoneInput } = checkoutForm

    const productStrings = []
    let subtotal = 0

    for (const productId of Object.keys(cart)) {
        const product = data.find(p => p.id === productId)
        const quantity = cart[productId];

      

        const { name, price } = product
        
        const productSubtotal = price * quantity
        subtotal = subtotal + productSubtotal

        productStrings.push(`
*${quantity}* x ${name}: $${productSubtotal}`)
    }

    const shipping = 5
    
    const message = 
`
User: ${nameInput.value}, *${phoneInput.value}*
Products: ${productStrings.join('')}
Subtotal: $${subtotal}
Shipping: $${shipping}
Total: $${subtotal + shipping}
`

    const body = {
        apiKey: 'secretKey',
        message
    }

    fetch('https://hay-show-room.herokuapp.com/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}

// localStorage.setItem('cart', )

window.addEventListener('load', loadProducts)
