function calculateTotal(basket) {
    const prices = {
        Apple: 35,
        Banana: 20,
        Melon: 50,
        Lime: 15
    };

    const itemCounts = basket.reduce((count, item) => {
        count[item] = (count[item] || 0) + 1;
        return count;
    }, {});

    let totalCost = 0;

    for (const item in itemCounts) {
        const quantity = itemCounts[item];

        switch (item) {
            case "Melon":
                totalCost += Math.ceil(quantity / 2) * prices[item];
                break;
            case "Lime":
                totalCost += Math.floor(quantity / 3) * 2 * prices[item] + (quantity % 3) * prices[item];
                break;
            default:
                totalCost += quantity * prices[item];
        }
    }

    return totalCost;
}

const basket = ["Apple", "Apple", "Banana", "Melon", "Melon", "Melon", "Lime", "Lime", "Lime", "Lime"];
console.log(`Total Cost: ${calculateTotal(basket)} pence`);
