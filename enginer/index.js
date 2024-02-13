document.addEventListener("DOMContentLoaded" , function(){

    const addToCartButtons = document.querySelectorAll(".add-to-card");
    const cartItemsList = document.querySelector(".cart-items");
    const checkoutButton = document.querySelector(".checkout");
    let valorTotal = 0;
    
    addToCartButtons.forEach(function(button){
    
        button.addEventListener("click", function(){
            const product =button.parentElement;
            const productName = product.querySelector("h2").textContent;
            const productPrice = product.querySelector("p:nth-of-type(2)").textContent;
            const cartItem = document.createElement("li");
            cartItem.textContent = `${productName} - ${productPrice}`;
            cartItemsList.appendChild(cartItem);
            valorTotal += parseFloat(productPrice.replace("R$ ","").trim());
    
        },);
    });
    
    checkoutButton.addEventListener("click", function(){
        alert(`Compra realizada com sucesso!\nValor Total: R$`+ valorTotal.toFixed(2));
        cartItemsList.innerHTML = "";
        valorTotal = 0;
    });
    
    
    
    
    })