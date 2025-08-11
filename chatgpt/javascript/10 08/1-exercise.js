// var liveCity = "Itapajé-CE";
// const BIRTHYEAR = 2008;
// var age = (2025- 2008);
// console.log(`Meu nome é Gabriel, moro em ${liveCity} e tenho ${age} anos.`)


// Cidade onde moro (não muda, então const)
const liveCity = "Itapajé-CE";

// Ano de nascimento (não muda)
const BIRTHYEAR = 2008;

// Idade atual calculada a partir do ano de nascimento
let age = 2025 - BIRTHYEAR;

// Exibe mensagem formatada usando template string
console.log(`Meu nome é Gabriel, moro em ${liveCity} e tenho ${age} anos.`);


let currentYear = new Date()
console.log(currentYear)