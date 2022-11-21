let btns = document.querySelectorAll(".product-button")

//saving product data to local storage in order to show about product page

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        localStorage.setItem("productName", btns[i].previousElementSibling.innerText);
        localStorage.setItem("productPrice", btns[i].previousElementSibling.getAttribute('data'));
        window.location = "./aboutProduct.html";
    })
}