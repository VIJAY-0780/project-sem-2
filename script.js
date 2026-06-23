
const products = [

{
id:1,
name:"iPhone 16",
price:79999,
image:"iphone 16.jpeg",
rating:"⭐⭐⭐⭐⭐"
},

{
id:2,
name:"Samsung S25 Ultra",
price:69999,
image:"s 25 ultra.jpeg",
rating:"⭐⭐⭐⭐"
},

{
id:3,
name:"Gaming Laptop",
price:89999,
image:"laptop.jpeg",
rating:"⭐⭐⭐⭐⭐"
},

{
id:4,
name:"Headphones",
price:2999,
image:"headphone.jpeg",
rating:"⭐⭐⭐⭐"
},

{
id:5,
name:"Smart Watch",
price:4999,
image:"smart watch.jpeg",
rating:"⭐⭐⭐⭐⭐"
},

{
id:6,
name:"Bluetooth Speaker",
price:1999,
image:"speaker.jpeg",
rating:"⭐⭐⭐⭐"
}

];

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

const productsContainer =
document.getElementById("products");

function displayProducts(list){

productsContainer.innerHTML="";

list.forEach(product=>{

productsContainer.innerHTML += `
<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<div class="rating">
${product.rating}
</div>

<div class="price">
₹${product.price}
</div>

<button class="btn"
onclick="addToCart(${product.id})">

Add to Cart

</button>

</div>
`;
});
}

function addToCart(id){

const item =
products.find(p=>p.id===id);

cart.push(item);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCart();
}

function updateCart(){

const cartItems =
document.getElementById("cart-items");

const totalElement =
document.getElementById("total");

cartItems.innerHTML="";

let total=0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `
<li>
${item.name}
- ₹${item.price}

<button onclick="removeItem(${index})">
❌
</button>

</li>
`;
});

document.getElementById(
"cart-count"
).innerText = cart.length;

totalElement.innerText = total;
}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCart();
}

document
.getElementById("search")
.addEventListener("input",(e)=>{

const value =
e.target.value.toLowerCase();

const filtered =
products.filter(product=>
product.name.toLowerCase()
.includes(value)
);

displayProducts(filtered);

});

displayProducts(products);
updateCart();