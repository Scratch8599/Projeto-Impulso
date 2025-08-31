class Product {
  constructor(nome = "", preco = 0.0, quantidade = 0) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.valorCompra = this.calculateShopCost(preco, quantidade);
  };
  calculateShopCost (preco, quantidade){
    return preco * quantidade;
  };
  getProductInfos () {
    this.nome = prompt("Insira o nome do produto: ");
    while (!this.nome) {
      console.error("Nome do produto inválido!");
      this.nome = prompt("Insira o nome do produto: ");
    }
    this.preco = Number(prompt("Insira o preço do produto: "));
    while (isNaN(this.preco) || this.preco <= 0) {
      console.error("Preço do produto inválido!");
      this.preco = Number(prompt("Insira o preço do produto: "));
    }
    this.quantidade = Number(prompt("Insira a quantidade de produtos: "));
    while (isNaN(this.quantidade) || this.quantidade <= 0) {
      console.error("Quantidade de produtos inválido!");
      this.quantidade = Number(prompt("Insira a quantidade de produtos: "));
    }

    this.calculateShopCost(this.preco, this.quantidade)
  };
};

let camisa;
try {
  camisa = new Product;
  camisa.getProductInfos();
  console.log(camisa);
}catch (error) {
  console.log(error);
};