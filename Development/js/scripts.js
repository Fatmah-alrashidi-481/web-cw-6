let name = ["sara", "fatma", "noor"];
name.forEach(logger);

function logger(value) {
  console.log(value);
}

let summerDeg = [47, 48, 53, 55];
console.log(summerDeg.filter(myFunction));
function myFunction(x) {
  return x > 50;
}

let books = [
  {
    name: "book1",
    ID: 1,
  },
  {
    name: "boo2",
    ID: 2,
  },
  {
    name: "book3",
    ID: 3,
  },
  {
    name: "book4",
    ID: 4,
  },
];

getBookbyId(books, 7);

function getBookbyId(books, ID) {
  for (i of books) {
    if (i.ID == ID) {
      console.log("متوفر");
      break; 
      
    //  } else {
    //   console.log("متوفر غير");
    }
//   }
}
