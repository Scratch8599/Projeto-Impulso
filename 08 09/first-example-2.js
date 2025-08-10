class Shop {
  constructor (productName, productCost, productQuantity, shopCost){
    this.productName = productName;
    this.productCost = productCost;
    this.productQuantity = productQuantity;
    this.shopCost = shopCost;
  };

  calcularValorTotal() {
    this.shopCost = (this.productCost * this.productQuantity);
    return this.shopCost
  }
}

product = new Shop("Teclado", 20.0, 2)
console.log(product.calcularValorTotal())