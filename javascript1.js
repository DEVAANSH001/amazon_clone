
//nested object

const poduct2 = {
    name: 'shirt',
    'delivery-time':'1 day',
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function function1(){
        console.log("function inside objects")
    }
};
console.log(product2);
console.log(product2.name);
console.log(product2['name']);
poduct2.fun();git 