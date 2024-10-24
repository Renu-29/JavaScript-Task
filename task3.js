function actualPrice(costPrice) {
    const discount = 0.20;  // 20% discount
    const discountAmount = costPrice * discount;
    const sellingPrice = costPrice - discountAmount;

    console.log(`The selling price after a 20% discount is: ${sellingPrice}`);
}

// Example usage:
const costPrice = 1000;  // Example cost price
actualPrice(costPrice);
