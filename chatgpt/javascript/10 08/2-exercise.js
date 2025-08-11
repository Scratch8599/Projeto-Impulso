// // let studentGrade = Number(prompt("Digite a sua nota"));
// let studentGrade = 4
// const STATUS = studentGrade >= 7? "Aprovado": studentGrade >= 5? "Recuperação": "Reprovado";
// console.log(STATUS);

// Entrada do usuário (ou valor fixo para teste)
let studentGrade = 4; // ou Number(prompt("Digite a sua nota"));

// Determina o status usando ternário aninhado
const STATUS = studentGrade >= 7
  ? "Aprovado"
  : studentGrade >= 5
    ? "Recuperação"
    : "Reprovado";

// Exibe o resultado
console.log(STATUS);
