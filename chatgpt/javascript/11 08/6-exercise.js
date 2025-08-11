const PRODUCTS = [
  { name: "Mouse",     price: 25  },
  { name: "Teclado",   price: 75  },
  { name: "Monitor",   price: 300 },
  { name: "Cabo HDMI", price: 40  }
];

// const FILTEREDPRODUCTS = PRODUCTS.filter(product => product["price"] > 50);
// FILTEREDPRODUCTS.map( product => {
//   console.log(product["name"])
// })

PRODUCTS
  .filter(product => product.price > 50)
  .map(product => product.name)
  .forEach(name => console.log(name));