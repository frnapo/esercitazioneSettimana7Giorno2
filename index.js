// ------------------ESERCIZIO 1------------------
class User {
  constructor(name, surname, age, location) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.location = location;
  }

  ageComparator(anotherUser) {
    if (this.age > anotherUser.age) {
      return `${this.firstName} e' piu grande di ${anotherUser.firstName}`;
    } else if (this.age < anotherUser.age) {
      return `${this.firstName} e' piu piccolo di ${anotherUser.firstName}`;
    } else {
      return `${this.firstName} e ${anotherUser.firstName} hanno la solita eta'`;
    }
  }
}

Pippo = new User("Pippo", "de' Pippis", 18, "Topolinia");
Paperino = new User("Paperino", "Paolino", 36, "Topolinia");
Pluto = new User("Pluto", "Bho", 23, "Topolinia");

console.log(Pippo.ageComparator(Paperino));
console.log(Paperino.ageComparator(Pluto));

// ------------------ESERCIZIO 2------------------

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  ownerChecker(anotherPet) {
    if (this.ownerName === anotherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

let nomeAnimale = document.getElementById("nomeAnimale");
let nomeProprietario = document.getElementById("nomeProprietario");
let specieAnimale = document.getElementById("specieAnimale");
let razzaAnimale = document.getElementById("razzaAnimale");
let listaAnimali = document.getElementById("listaAnimali");
let nuovoAnimale = document.getElementById("aggiungi");

let pets = [];

nuovoAnimale.onclick = () => {
  let newPet = new Pet(nomeAnimale.value, nomeProprietario.value, specieAnimale.value, razzaAnimale.value);
  pets.push(newPet);
  console.log(newPet);
  console.log(pets);
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText = `
                        Nome Animale: ${pet.petName}
                        Nome Proprietario: ${pet.ownerName}
                        Specie Animale: ${pet.species}
                        Razza Animale: ${pet.breed}
    `;
    listaAnimali.appendChild(newLi);
  });
};
