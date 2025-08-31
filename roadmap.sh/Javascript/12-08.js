// 1. Variáveis descritivas
let productName,
  productAvailableQuantity,
  productUnitPrice;
// 2. Função com ação
// calculateTotalShopValue = (productAvailableQuantity, productUnitPrice) => productAvailableQuantity * productUnitPrice
const calculateTotalShopValue = (productAvailableQuantity, productUnitPrice) => productAvailableQuantity * productUnitPrice
// 3. Constantes bem nomeadas
const MAXIMUM_PRODUCTS_QUANTITY = 0;
// 4. Função que retorna informação
// getProductInformations = (productName, productAvailableQuantity, productUnitPrice) => `Produto: ${productName}, Quantidade: ${productAvailableQuantity}, Preço: ${productUnitPrice}`
const getProductDescription = (productName, productAvailableQuantity, productUnitPrice) => `Produto: ${productName}, Quantidade: ${productAvailableQuantity}, Preço: ${productUnitPrice}`