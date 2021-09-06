
var initState = [
    {
        id: 1,
        name: 'Iphone XS Max',
        image: 'https://www.didongmy.com/vnt_upload/product/07_2020/thumbs/(600x600)_apple_iphone_xs_gold_7.png',
        description: '',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Iphone 11 Pro Max',
        image: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg',
        description: '',
        price: 1000,
        inventory: 10,
        rating: 3
    },
    {
        id: 3,
        name: 'Xiaomi Mi 11 Lite',
        image: 'https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-mi-11-lite-5g-2_10.png',
        description: '',
        price: 450,
        inventory: 10,
        rating: 5
    },
];

const products = (state = initState, action) => {
    switch(action.type){
        default: 
            return [...state];
    }
}

export default products;
