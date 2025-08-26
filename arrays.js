document.addEventListener("DOMContentLoaded", function () {
  let catsArray = [
    "Ollie",
    "Sophie",
    "Salem",
    "Tiger",
    "Binx",
    "Pumpkin",
    "Penny",
    "Lenny",
  ];
  let dogsArray = [
    "Barney",
    "Molly",
    "Baxter",
    "Polly",
    "Buddy",
    "Suki",
    "Watson",
  ];
  let fruitsArray = [
    "Banana",
    "Orange",
    "Pineapple",
    "Mango",
    "Plum",
    "Apricot",
  ];
  let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21];

  // --- Løs opgaverne herunder ---
  //opgave 1: Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle de tal som er større end 20.
  const myArray = numbersArray.filter((num) => num > 20);
  console.log("Opgave 1", myArray);
  // Opgave 2
  // Tilføj katten "Sniffles" til catsArray.
  // Udskriv arrayet i konsollen.
  // console.log("Opgave 2", ...)

  //
  catsArray.push("Sniffles");
  console.log("Opgave 2", catsArray);

  // Opgave 3a
  // Check om der i dogsArray er en hund som hedder "Trixie".
  // Udskriv "true" eller "false" i konsollen afhængig af svaret.
  // console.log("Opgave 3a", ...)

  const hasTrixie = dogsArray.includes("Trixie");

  console.log("Opgave 3a", hasTrixie);

  // Opgave 3b
  // Check om der i dogsArray er en hund som hedder "Baxter".
  // Udskriv "true" eller "false" i konsollen afhængig af svaret.
  // console.log("Opgave 3b", ...)

  const hasBaxter = dogsArray.some((dog) => dog === "Baxter");

  console.log("Opgave 3b", hasBaxter);

  //     Opgave 4a
  // Check om der i catsArray er en kat som hedder "Bagheera".
  // Udskriv katten i konsollen hvis den findes og ellers "undefined".

  const bagheera = catsArray.find((cat) => cat === "Bagheera");
  // console.log(bagheera);
  console.log("Opgave 4a", bagheera);

  // Opgave 4b
  // Check om der i catsArray er en kat som hedder "Salem".
  // Udskriv katten i konsollen hvis den findes og ellers "undefined".
  // console.log("Opgave 4b", ...)
  const foundCat = catsArray.find((cat) => cat === "Salem");
  console.log("Opgave 4b", foundCat);

  //     Opgave 5
  // Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle tallene i arrayet ganget med 3.
  // Udskriv det nye array i konsollen:
  // console.log("Opgave 5", ...)

  const multipliedArray = numbersArray.map((num) => num * 3);
  console.log("Opgave 5", multipliedArray);

  //     Opgave 6
  // Udskriv alle hundene i dogsArray i én lang streng.
  // (Sådan her: BarneyMollyBaxter...)
  // Udskriv strengen konsollen:
  // console.log("Opgave 6", ...)

  const allDogs = dogsArray.join("");
  console.log("Opgave 6", allDogs);
  //     Opgave 7a
  // Find ud af hvilket index "Mango" har i fruitsArray.
  // Udskriv indexet i konsollen.
  const mangoIndex = fruitsArray.indexOf("Mango");
  console.log("Opgave 7a", mangoIndex);

  // Opgave 7b
  // Find ud af hvilket index "Blåbær" har i fruitsArray.
  // Udskriv indexet i konsollen.
  const blueberryIndex = fruitsArray.indexOf("Blåbær");
  console.log("Opgave 7b", blueberryIndex);

  // Opgave 8
  // Lad os forestille os, at dogsArray er en liste af tilmeldte hunde til en udstilling.
  // Den familie der har hunden "Polly" er desværre blevet forhindret i at deltage i udstillingen.
  // Fjern hunden "Polly" fra dogsArray og udskriv det nye array i konsollen
  //  ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
}); // ends DOMContentLoaded

// const pollyIndex = dogsArray.indexOf("Polly");
// if (pollyIndex !== -1) {
//   dogsArray.splice(pollyIndex, 1);
// }
// console.log("Opgave 8", dogsArray);
