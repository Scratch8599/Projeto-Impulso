// const CLASSIFIEDAGE  = (age) => {
//   const STATUS = age < 12?
//     "Criança":
//     age < 18?
//     "Adolescente":
//     "Adulto"
//   return STATUS
// };

// console.log(CLASSIFIEDAGE(5))
// console.log(CLASSIFIEDAGE(15))
// console.log(CLASSIFIEDAGE(24))

const classifiedAge = (age) => {
  return age < 12
    ? "Criança"
    : age < 18
      ? "Adolescente"
      : "Adulto";
};

console.log(classifiedAge(5));   // Criança
console.log(classifiedAge(15));  // Adolescente
console.log(classifiedAge(24));  // Adulto
