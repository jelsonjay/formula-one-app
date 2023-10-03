// section que acomoda todas as cartas
let sectionConteudos = document.querySelector(".container");

// =======CALL JSON DATA========
const url = "./drivers.json";

async function getData (i) {
  const res = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.erro) {
        console.log("Error accessing JSON");
        return;
      }

      // ======Quantity of  Driver=====
      let qtdDrivers = data.drivers.length;
      console.log("Quantity Drivers " + qtdDrivers);
      // passe o valor de i no parametro
       dataAttrutes(data, i);
    });
} 


let images = document.getElementsByClassName("photo");
let names = document.getElementsByClassName("name");
let teams = document.getElementsByClassName("team");
let nationality  = document.getElementsByClassName("nationality");
let age = document.getElementsByClassName("age");
let weight = document.getElementsByClassName("weight");
let height = document.getElementsByClassName("height");

// ============ATTRIBUTE DATA TO  CARDS==========
function dataAttrutes(data, i) {
  images[i].setAttribute("src", "/" + data.drivers[i].image);
  names[i].textContent = "Name: " + data.drivers[i].name;
  teams[i].textContent = "Team: " + data.drivers[i].team;
  nationality[i].textContent = "Country: " + data.drivers[i].country;
  age[i].textContent = "Date of birth: " + data.drivers[i].date_of_birth;
  weight[i].textContent = "World Championships: " + data.drivers[i].world_championships;
  height[i].textContent = "Podiums " + data.drivers[i].height;
}

// ====DISPLAY IN HTML========
function displayScreen(id) {

  // ==========CARD===========
  let card = document.createElement("article");
  card.setAttribute("class", "card");
  sectionConteudos.appendChild(card);

  // ===========TEAM===========
  let driverTeam = document.createElement("h2");
  driverTeam.setAttribute("class", "team");
  card.appendChild(driverTeam);
  driverTeam.textContent = "Team";

  // ======IMAGEM INSIDE OF CARD=====
  let imagem = document.createElement("img");
  card.appendChild(imagem);
  imagem.setAttribute("class", "photo");
  imagem.setAttribute("src", "./images/verstappen.jpg");

  // =======NAME OF DRIVER DO=========
  let driverName = document.createElement("h2");
  driverName.setAttribute("class", "name");
  card.appendChild(driverName);
  driverName.textContent = "Name";

  // ========DRIVER NATIONALITY======
  let driverNationality = document.createElement("h3");
  driverNationality.setAttribute("class", "nationality");
  card.appendChild(driverNationality);
  driverNationality.textContent = "Nationality";

  // ===========DRIVER AGE============= 
  let driverAge = document.createElement("h3");
  driverAge.setAttribute("class", "age");
  card.appendChild(driverAge);
  driverAge.textContent = "Age";

  // ============DRIVER WEIGHT========== 
  let driverWeight = document.createElement("h3");
  driverWeight.setAttribute("class", "weight");
  card.appendChild(driverWeight);
  driverWeight.textContent = "weight Kg";

  // =============DRIVER HEIGHT========== 
  let driverHeight = document.createElement("h3");
  driverHeight.setAttribute("class", "height");
  card.appendChild(driverHeight);
  driverHeight.textContent = "height m";

  getData(id);
}

// ===CALL GET DATA FUNCTION======
getData(0);


//====CALL FUNCTION TO DISPLAY =========
displayScreen(1);
displayScreen(2);
displayScreen(3);
displayScreen(4);
displayScreen(5);
displayScreen(6);
displayScreen(7);
