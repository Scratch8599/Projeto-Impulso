const SALES = [50, 100, 30, 200];
// const SUM = SALES.reduce((total, valor) => {return total + valor;}, 0)
// console.log(SUM)

const SUM = SALES.reduce((total, valor) => total + valor, 0);
console.log(SUM);
