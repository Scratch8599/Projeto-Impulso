const CITIES = [ "Itapajé", "Sobral", "Fortaleza"];
CITIES.push("Paracuru");
CITIES.shift();

CITIES.forEach( city => {
  console.log(city);
});