class VendingMachine {
  constructor() {
    this.credit = 0;
    this.stock = { A: {}, B: {}, C: {} };
  }

  addStock(newStock, position) {
    this.stock[position] = { ...newStock };
    this.stock[position].price = `${this.stock[position].price}p`;
  }

  addCredit(amount) {
    this.credit += amount;
  }

  purchaseItem(position) {
    const item = this.stock[position];
    const price = parseInt(item.price);
    if (price > this.credit) {
      return 'Insufficient credit!';
    }
    item.quantity--;
    this.credit -= price;
    return item.name;
  }
}

module.exports = { VendingMachine };
