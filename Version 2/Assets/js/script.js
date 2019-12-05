function focusOnBuy() {
    const buyingInfo = document.getElementById("book__note");
    buyingInfo.classList.add('foucusNotice');

    setTimeout(() => {
        buyingInfo.classList.remove('foucusNotice')

    }, 5000);
}

window.onload = function() {
    const buyBtn = document.getElementById("buy");

    buyBtn.onclick = focusOnBuy;
}