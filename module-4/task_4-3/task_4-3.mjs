"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", 
  "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "History", 
  "Horror", "Music", "Musical", "Mystery", "Romance", "Sci-Fi", "Short", 
  "Sport", "Superhero", "Thriller", "War", "Western",
];


//--- Part 1 ----------------------------------------------------------------------------------------------
function cmbTask1CalculateClick() {
  const txtTask1Output = document.getElementById("txtTask1Output");
  const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  
  const width = parseInt(txtRectWidth.value);
  const height = parseInt(txtRectHeight.value);
  
  /* Put your code below here!*/
  const area = width * height;
  const perimeter = 2 * (width + height);
  
  txtTask1Output.innerHTML = `Area: ${area}, Perimeter: ${perimeter}`;
}
// Get the button element and attach the click event listener
let cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
// Attach the click event listener to the button
cmbTask1Calculate.onclick = cmbTask1CalculateClick;


//--- Part 2 ----------------------------------------------------------------------------------------------
const task2Words = [];

function txtTask2WordKeyPress(aEvent) {
  const txtTask2Output = document.getElementById("txtTask2Output");
  const txtTask2Word = document.getElementById("txtTask2Word");
  
  txtTask2Output.innerHTML = `You pressed the key: ${aEvent.key}`;
  
  /* Put your code below here!*/
  if (aEvent.key === "Enter") {
    if (txtTask2Word.value.trim() !== "") {
      task2Words.push(txtTask2Word.value.trim());
      txtTask2Word.value = ""; // Clear input field
      
      txtTask2Output.innerHTML = `Number of words: ${task2Words.length}<br>Words: ${task2Words.join(", ")}`;
    }
  }
}
// Get the input element and attach the keypress event listener
const txtTask2Word = document.getElementById("txtTask2Word");
// Attach the keypress event listener to the input
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);


//--- Part 3 ----------------------------------------------------------------------------------------------
const chkTask3 = document.getElementsByName("chkTask3");
const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
const txtTask3Output = document.getElementById("txtTask3Output");

/* Put your code below here!*/
// 1. Create our function to handle the click event for the "Check Answer" button
function cmbTask3CheckAnswerClick() {
  let selected = [];
  for (let i = 0; i < chkTask3.length; i++) {
    if (chkTask3[i].checked) {
      selected.push(chkTask3[i].value);
    }
  }
  txtTask3Output.innerHTML = `Selected checkboxes: ${selected.join(", ")}`;
}

// 2. Attach the event listener to the button
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);


//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");

// 1. Create our function to handle the change event for the radio buttons
function radioButtonChange(aEvent) {
  txtTask4Output.innerHTML = `You selected: ${aEvent.target.value}`;
}

// 2. Loop through the CarTypes array and create radio buttons dynamically
for (let i = 0; i < CarTypes.length; i++) {
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "carRadio";
  radio.value = CarTypes[i].caption;
  radio.id = `car${CarTypes[i].value}`;
  
  // 3. Attach the event listener to each radio button
  radio.addEventListener("change", radioButtonChange);
  
  const label = document.createElement("label");
  label.htmlFor = radio.id;
  label.appendChild(document.createTextNode(CarTypes[i].caption));
  
  divTask4Cars.appendChild(radio);
  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(document.createElement("br"));
}


//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

// 1. Create a function to handle the change event for the select element
function SelectTask5AnimalsChange() {
  txtTask5Output.innerHTML = `You selected: ${selectTask5Animals.value}`;
}

// 2. Attach the event listener to the select element
selectTask5Animals.addEventListener("change", SelectTask5AnimalsChange);


//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");
 
// 1. Loop through the GirlsNames array and create option elements dynamically
for (let i = 0; i < GirlsNames.length; i++) {
  const option = document.createElement("option");
  option.value = GirlsNames[i];
  option.text = GirlsNames[i];
  selectTask6Girls.appendChild(option);
}

// 2. Create a function to handle the change event for the select element
function selectTask6GirlsChange() {
  txtTask6Output.innerHTML = `You selected: ${selectTask6Girls.value}`;
}

// 3. Attach the event listener to the select element
selectTask6Girls.addEventListener("change", selectTask6GirlsChange);


//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const txtMovieTitle = document.getElementById("txtMovieTitle");
const selectMovieGenre = document.getElementById("selectMovieGenre");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMovies = document.getElementById("tblMovies");
const tblMoviesBody = tblMovies.getElementsByTagName("tbody")[0];

// Helper function to create and append a row
function addMovieToTable(title, genre, director, rate) {
  const row = document.createElement("tr");
  
  const cellTitle = document.createElement("td");
  cellTitle.textContent = title;
  
  const cellGenre = document.createElement("td");
  cellGenre.textContent = genre;
  
  const cellDirector = document.createElement("td");
  cellDirector.textContent = director;
  
  const cellRate = document.createElement("td");
  cellRate.textContent = rate;
  
  row.appendChild(cellTitle);
  row.appendChild(cellGenre);
  row.appendChild(cellDirector);
  row.appendChild(cellRate);
  
  tblMoviesBody.appendChild(row);
}

// 1. Create a function to handle the click event for the "Add Movie" button
function cmbAddMovieClick() {
  const title = txtMovieTitle.value;
  const genre = selectMovieGenre.value;
  const director = txtMovieDirector.value;
  const rate = txtMovieRate.value;

  if (title && genre && director && rate) {
    addMovieToTable(title, genre, director, rate);
    
    // Clear fields after adding
    txtMovieTitle.value = "";
    txtMovieDirector.value = "";
    txtMovieRate.value = "";
  } else {
    alert("Please fill out all fields before adding a movie.");
  }
}

// 2. loop through the MovieGenre array and create option elements dynamically
for (let i = 0; i < MovieGenre.length; i++) {
  const option = document.createElement("option");
  option.value = MovieGenre[i];
  option.text = MovieGenre[i];
  selectMovieGenre.appendChild(option);
}

// 3. Attach the event listener to the button
cmbAddMovie.addEventListener("click", cmbAddMovieClick);

// 4. Create three sample movies, and add them to the table using the function you created in step 1
addMovieToTable("The Shawshank Redemption", "Drama", "Frank Darabont", "9.3");
addMovieToTable("The Godfather", "Crime", "Francis Ford Coppola", "9.2");
addMovieToTable("The Dark Knight", "Action", "Christopher Nolan", "9.0");