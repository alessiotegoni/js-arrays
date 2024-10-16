const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers.at(3);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
const newTeachers = teachers.with(4, "Patrick")
// teachers[4] = "Patrick"
console.log(newTeachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.splice(-1, 1);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.splice(0, 1);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa")

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah")

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio")

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.findIndex(t => t === "Lewis");

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(", ");

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = !!!teachers.length;
