let productName = localStorage.getItem("productName");
let productPrice = localStorage.getItem("productPrice");

document.getElementById("product-name").innerText = productName;
document.getElementById("product-price").innerText = productPrice;