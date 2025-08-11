const SALES = [
  { produto: "Mouse", preco: 25, quantidade: 4 },
  { produto: "Teclado", preco: 75, quantidade: 2 },
  { produto: "Monitor", preco: 300, quantidade: 1 },
  { produto: "Cabo HDMI", preco: 40, quantidade: 3 }
];

// // console.log(SALES.filter(sale => sale.preco > 30).map(sale => sale.preco * sale.quantidade ))

const FILTEREDPRICES = SALES
.filter(sale => sale.preco > 30)
.map(sale => sale.preco * sale.quantidade)
.reduce((totalValue, value) => totalValue + value, 0);

console.log(FILTEREDPRICES);