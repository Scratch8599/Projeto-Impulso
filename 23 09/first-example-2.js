class Shop {
  constructor(name, price, quantity, shopCost) {
    this.name = "";
    this.price = 0.0;
    this.quantity = 0;
    this.shopCost = 0;
  }

  calcularValorTotal() {
    if (this.shopCost == 0) this.shopCost = this.price * this.quantity;
    return this.shopCost;
  }

  getProductData () {
    this.name = prompt("Insira o nome do produto:\n");
    if (this.name == "") throw new Error("O nome do produto não pode ser vazio");

    this.quantity = Number(prompt(`Insira a quantidade de ${this.name}s a serem comprados:\n`));
    if (this.quantity <= 0) throw new Error("Você precisa comprar pelo menos um produto");

    this.price = Number(prompt("Insira o preço do produto:\n"));
    if (this.price <= 0 ) throw new Error("O preço do produto não pode ser negativo, igual a zero ou vazio")

    return [ this.name, this.price, this.quantity ]
  }  
}

try {
  const PRODUCT = new Shop();
  PRODUCT.getProductData()
  console.log(`O valor total da compra de ${PRODUCT.quantity} ${PRODUCT.name}s é ${PRODUCT.calcularValorTotal()}`);
} catch (error) {
  console.error(error.message);
}