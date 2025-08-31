// let palavra,
//   PALAVRA;

// console.log(palavra, PALAVRA)

// let integerNumber = 10,
// 	floatNumber = 5.0;
	
// console.log(typeof integerNumber) // Number
// console.log(typeof floatNumber) // Number

// let string1 = "Primeiro tipo",
// 	string2 = 'Segundo tipo',
// 	string3 = `Terceiro tipo`;

// console.log(typeof string1) // String
// console.log(typeof string2) // String
// console.log(typeof string3) // String

// console.log(string1.length) // 13
// console.log(string2.length) // 12
// console.log(string3.length) // 13

// console.log(string1[0]) // P
// console.log(string2[0]) // S
// console.log(string3[0]) // T

// var str = 'Autoboxing';
// var strBoxed = new String(str);
// console.log(strBoxed.length);
// strBoxed = undefined;

// let trueBoolean = true,
//   falseBoolean = false;

// console.log(typeof trueBoolean)
// console.log(typeof falseBoolean)

// let array1 = ["String", 10, 5.2, [ "Outra Array" ]],
// 	array2 = new Array();
// // 
// console.log(array1) // [ "String", 10, 5.2, [ " Outra Array "] ]
// console.log(array2) // []
// // 
// console.log(array1.length) // 4
// console.log(array2.length) // 0

// console.log(array1[0]) // "String"
// console.log(array1[5]) // Undefined

// let objeto = {
// 	name: "Gabriel",
// 	age: 17
// };

// console.log(objeto.name); // "Gabriel"

// objeto.work = "Estagiário";
// console.log(objeto.work); // "Estagiário"
// console.log(objeto) // { name: 'Gabriel', age: 17, work: 'Estagiário' }

// let hash = {
//   name: "Gabriel",
//   age: 17,

//   full_expression: () => {
//     console.log(hash.name, hash.age)
//   }
// };

// hash.full_expression()

// const number = 0,
//   string = "String",
//   boolean = true,
//   array = [ "array "],
//   funcao = new Function(),
//   objeto = new Object();

// console.log(typeof number) // number
// console.log(typeof string) // string
// console.log(typeof boolean) // boolean
// console.log(typeof array) // object
// console.log(typeof funcao) // function
// console.log(typeof objeto) // object

// const array = new Array();
// console.log(Array.isArray(array))


// const ID = Symbol("Id"),
//  car = {
//   year: 2000,
//   brand: "Chevrolet",
//   [ID]: 2
// };

// console.log(Object.keys(car), car[ID]);


// console.log(120319032102948109248109248)


// console.log("Texto\vTexto")


// let guestList = `Guests:
//   John
//   Pete
//   Mary
// `;

// console.log(guestList)


// for (let idade = 10; idade < 100; idade+=10) {
//   if (idade < 18){
//     resultado = "Menor de idade";
//   }else if (18>=idade < 60){
//     resultado = "Adulto";
//   }else {
//     resultado = "Idoso";
//   };
  
//   console.log(resultado)
// }

let idade = 20;

if (idade<18) {
  console.log("Menor de idade");
}
else if (18<=idade && idade<60) {
  console.log("Adulto");
}else{
  console.log("Idoso");
};