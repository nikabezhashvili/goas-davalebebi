const inventory = {
    prod_101: { name: "Laptop", price: 1200, category: "Electronics", stock: 15 },
    prod_102: { name: "Shoes", price: 80, category: "Apparel", stock: 50 },
    prod_103: { name: "Coffee Maker", price: 150, category: "Appliances", stock: 0 },
    prod_104: { name: "Book", price: 20, category: "Books", stock: 100 }
};

// 1
function getAllProductIds(inventory) {
    return Object.keys(inventory);
}

// 2

function calculateTotalStock(inventory){
    return Object.values(inventory).reduce((sum, prod) => sum + prod.stock, 0)
}

// 3
function getOutOfStockProducts(inventory) {
    return Object.keys(inventory).filter(id => inventory[id].stock === 0);
}

// 4

function updateProductPrice(inventory, id, newPrice) {
    let newInventory = Object.assign({}, inventory);

    newInventory[id] = Object.assign({}, inventory[Id], {
        price: newPrice
    });

    return newInventory;
}

// 5
function freezeInventory(inventory) {
    return Object.freeze(inventory)
}

