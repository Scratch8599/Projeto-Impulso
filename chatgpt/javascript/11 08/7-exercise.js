const USERS = [
  { name: "Ana", age: 17 },
  { name: "Bruno", age: 22 },
  { name: "Carla", age: 15 },
  { name: "Diego", age: 30 }
];

const FILTEREDUSERS = USERS
.filter(user => user.age >= 18)
.map(user => user.name)

console.log(FILTEREDUSERS)