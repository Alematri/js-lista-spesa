// Array della lista
const listaDellaSpesa = [
  "Pasta",
  "Pecorino",
  "Nduja",
  "Cipolle rosse",
  "Sale",
  "Olio",
  "Vino",
  "Caffè",
  "Amaro",
  "Tiramisù",
];

// Ottiengo il riferimento all'elemento UL
const ulElement = document.getElementById("listaSpesa");

// Inizializzo il contatore
let i = 0;

// Ciclo while per stampare gli elementi della lista
while (i < listaDellaSpesa.length) {

  // Crea un nuovo elemento li per ogni elemento della lista
  const liElement = document.createElement("li");

  // Aggiungi l'elemento li alla lista ul
  ulElement.append(liElement);
  
  // Inserisco il testo con l'elemento corrispondente della lista
  liElement.textContent = listaDellaSpesa[i];
  
  // Incremento il contatore
  i++;
}