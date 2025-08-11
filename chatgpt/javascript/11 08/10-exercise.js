const BOOKS = [
  { titulo: "Livro A", genero: "Ficção" },
  { titulo: "Livro B", genero: "Fantasia" },
  { titulo: "Livro C", genero: "Ficção" },
  { titulo: "Livro D", genero: "Romance" },
  { titulo: "Livro E", genero: "Fantasia" }
];

const GENDERSCOUNTER = 
  BOOKS.reduce((books, book) => {
    books[book.genero]
    ? books[book.genero] += 1
    : books[book.genero] = 1
    return books
  }, {})

console.log(GENDERSCOUNTER)