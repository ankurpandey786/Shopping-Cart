let currUser = localStorage.getItem('currUser');
if(currUser){


let colors=["red","black","green","blue"];
let sizes=["xs","s","m","lg","xl"]
if (localStorage.getItem("products")){
    let products=JSON.parse(localStorage.getItem("products"));
    console.log(products)
    let mens=products.filter((item)=>item.category=="men's clothing")
    console.log(mens);
    
 }else {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let newData=data.map((item)=>{
            item.colors=colors.slice(Math.floor(Math.random()*4));
            item.sizes=sizes.slice(Math.floor(Math.random*4));
            return item;
        })
        console.log(newData);
        localStorage.setItem("products",JSON.stringify(newData));
    });
} 
}else{
    window.location.href="/index.html"
}
let cartCount = 0;

function changeTab(clickedTab) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    clickedTab.classList.add('active');
}

function addToCart() {
    cartCount++;
    document.getElementById('cart').textContent = `My Cart (${cartCount})`;
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const product = this.closest(".product");
            const productData = {
                id: product.getAttribute("data-id"),
                name: product.getAttribute("data-name"),
                price: product.getAttribute("data-price"),
                image: product.querySelector("img").src
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            if (!cart.some(item => item.id === productData.id)) {
                cart.push(productData);
                localStorage.setItem("cart", JSON.stringify(cart));
                alert(productData.name + " added to cart!");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll("button");
    addToCartButtons.forEach(button => {
        if (button.textContent === "Add to Cart") {
            button.addEventListener("click", addToCart);
        }
    });
});