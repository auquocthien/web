function exitItems(item, cart_items){
    let flag = -1;
    cart_items.forEach((itemCart, index) => {
        if(itemCart.id == item.id){
            flag = index;
        }
    });
    return flag;
}
const add_cart = document.getElementsByClassName('add_items');
const cart_items = [];
for (i = 0; i < add_cart.length; i++) {
    var button = add_cart[i];
    button.addEventListener('click', function(event) {
        var itemsSelect = event.target;
        // console.log('id: ' + itemsSelect.parentElement.children[3].innerText);
        // console.log('name: ' + itemsSelect.parentElement.children[2].innerText);
        // console.log('price: ' + itemsSelect.parentElement.children[1].children[0].innerText);
        let item = {
            id: itemsSelect.parentElement.children[3].innerText,
            itemsName: itemsSelect.parentElement.children[2].innerText,
            price: itemsSelect.parentElement.children[1].children[0].innerText,
            quantity: 1
        };
        if((flag = exitItems(item, cart_items)) >= 0){
            cart_items[flag].quantity++;
            localStorage.setItem('cart_items', JSON.stringify(cart_items));
        }
        else{
            cart_items.push(item);
            localStorage.setItem('cart_items', JSON.stringify(cart_items));
        }
    });
}