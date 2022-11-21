let btns = document.querySelectorAll(".product-button")

for (let i = 0; i<btns.length; i++) {
    btns[i].addEventListener("click", () => {
        localStorage.setItem("productName", btns[i].previousElementSibling.innerText);
        localStorage.setItem("productPrice", btns[i].previousElementSibling.getAttribute('data'));
        window.location = "../about product/index.html";
    })
}