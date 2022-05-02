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
        let item = {
            id: itemsSelect.parentElement.children[3].innerText,
            itemsName: itemsSelect.parentElement.children[2].innerText,
            price: itemsSelect.parentElement.children[1].children[0].innerText,
            quantity: 1
        };
        // window.location.reload();
        if((flag = exitItems(item, cart_items)) >= 0){
            cart_items[flag].quantity++;
            localStorage.setItem('cart_items', JSON.stringify(cart_items));
            
        }
        else{
            cart_items.push(item);
            localStorage.setItem('cart_items', JSON.stringify(cart_items));
            
        }
        const items = JSON.parse(localStorage.getItem('cart_items')).length;
        if(items !== null){
            document.getElementById("sc_text").hidden = true;
            document.getElementById("sup_cart_items").hidden = false;
            document.getElementById("cart_btn").hidden = false;
        }
    });
}

function showItems(){
    const show = JSON.parse(localStorage.getItem('cart_items'));
    for(i = 0; i < show.length; i++){

    }
}

function addEL(name, quantity){
    const tr = document.getElementsByClassName("cart_items_table");
    tr.
}

