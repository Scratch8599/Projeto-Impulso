let array = [ "Aba", "Abb", "Abc"]

array.forEach((Elemento) => {
  console.log(Elemento)
})


function funcaoDeTeste () {return [ "a", "b", "c"]}
array = [ ...funcaoDeTeste( )] 
// array = [ funcaoDeTeste () ] // [ [ "a", "b", "c" ] ]
console.log(array) // [ "a", "b", "c" ]