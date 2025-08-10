// ** Variable declaration
let productName = "";
let productCost = 0.0;
let productQuantity = 0;
let shopCost = 0.0;

// ** Prompt doesn't work in node js
// productName = prompt("Insira o nome do produto", "");
// productCost = prompt("Insira o custo do produto", 0.0);
// productQuantity = prompt("Insira a quantidade de produtos", 0);

productName = "Teclado"
productCost = 120.50
productQuantity = 3
shopCost  = (productCost * productQuantity )

console.log(`Você comprou ${productQuantity} ${productName} por ${shopCost}`)