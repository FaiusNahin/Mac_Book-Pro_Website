// Get All Product price
function getProductPrice(product, price) {
    const productAmount = document.getElementById(product + '-cost');
    productAmount.innerText = price;
    calculateTotalCost();
}

// Get Product price Value for Total Amount
function getProductPriceValue(productId) {
    const productPriceValue = document.getElementById(productId + '-cost');
    const productPrice = parseInt(productPriceValue.innerText);
    return productPrice;
}

// Calculate Total Amount
function calculateTotalCost() {
    const memoryCost = getProductPriceValue('memory');
    const storageCost = getProductPriceValue('storage');
    const deliveryCost = getProductPriceValue('delivery');

    const totalAmount = (memoryCost + storageCost + deliveryCost) + 1299;
    const totalCost = document.getElementById('total-cost').innerText = totalAmount;
    document.getElementById('total').innerText = totalCost;
}

// For Promotions & Discount Calculation
function getPromotion() {
    const totalCostValue = document.getElementById('total-cost');
    const totalCost = parseInt(totalCostValue.innerText);
    const total = document.getElementById('total');

    const promoValue = document.getElementById('promo-code');
    const promoCode = 'stevekaku';
    // Check Promo Code
    if (promoValue.value.toLowerCase() == promoCode.toLowerCase()) {
        // Calculate Discount
        total.innerText = totalCost - (totalCost * (20 / 100));
    }
    promoValue.value = '';
}

// Get Promotions & Discount
document.getElementById('promo-check-btn').addEventListener('click', function () {
    getPromotion();
})