//Data
const score = document.getElementById("score");
const timeValue = document.getElementById("time");
const username = document.getElementById("user");

//Buttons
const okButton = document.getElementById("ok-button");

//Displayed elements
const asientosContainer = document.querySelector(".asientos-container");

let asientos;
let selected = false;
let secondasiento = false;
let local = localStorage;

let asientoValues = [];


const matrixGenerator = (size = 20) => {
  asientosContainer.innerHTML = "";
  
  for (let i = 0; i < size; i++) {
    /*
        Create asientos
        before => front side (contains unimet's logo)
        after => back side (contains image related to the unimet)
      */
    asientosContainer.innerHTML += `
     <div className={styles.asiento}" id="${i}"></div>
     `;
  }
  
  //asientos
  asientos = document.querySelectorAll(".asiento-container");
  asientos.forEach((asiento) => {
    asiento.addEventListener("click", () => {
        if (remainingTime != 0 && started==true && flip) { //If time is not over, the user already clicked 'start playing' and there aren't more than 2 asientos shown
        
        //If selected asiento is not matched yet 
        if (!asiento.classList.contains("matched")) {
        //flip the clicked asiento
        asiento.classList.add("flipped");
        //if it is the firstasiento 
        if (!firstasiento) {
          //current asiento will become firstasiento
          firstasiento = asiento;
          //current asientos value becomes firstasientoValue
          firstasientoValue = asiento.getAttribute("data-asiento-value");
        } else {
         
          //secondasiento and value
          flip = false; // if the second asiento is selected, the user can't flip another one
          secondasiento = asiento;
          let secondasientoValue = asiento.getAttribute("data-asiento-value");
          if (firstasientoValue == secondasientoValue) {
            //if both asientos match add matched class so these asientos would beignored next time
            firstasiento.classList.add("matched");
            secondasiento.classList.add("matched");
            flip = true;
            //set firstasiento to false since next asiento would be first now
            firstasiento = false;
            //winCount increments as user found a correct match
            winCount += 1;
            //check if winCount ==half of asientoValues
            if (winCount == Math.floor(asientoValues.length / 2)) {

                scoreCalculator();


                won.classList.remove("hide");
                showButton.classList.remove('hide');
                clearInterval(interval);


                setData(username.value, scoreCalc);
                

              
            }
          } else {
            //if the asientos dont match
            //flip the asientos back to normal
            let [tempFirst, tempSecond] = [firstasiento, secondasiento];
            firstasiento = false;
            secondasiento = false;
            let delay = setTimeout(() => {
              tempFirst.classList.remove("flipped");
              tempSecond.classList.remove("flipped");
              flip=true; //if both asientos are hidden, the user can flip asientos again
            }, 900);
          }
        }
      }
    }});
  });
};





//Creates the score table

 

//Start game
startButton.addEventListener("click", () => { 
    if (username.value!="") {
        started = true;
        header.innerHTML = `<p style="display:inline">Welcome,   ${username.value}`;
        
        //Initial values
        scoreCalc = 1000;
        seconds = 0;
        minutes = 3;
    
        //Start timer
        interval = setInterval(timeGenerator, 1000);
        //initial score
        score.innerHTML = `<span>Score:</span> ${scoreCalc}`;
        changeButton.classList.remove("hide");
        restartButton.classList.remove("hide");
        
    } else {
      window.alert("Please enter your username");
    }
});



changeButton.addEventListener("click", () => { 
    
    changeButton.classList.add("hide");
    restartButton.classList.add("hide");
    header.innerHTML =`<form id="form"> Please enter your username:
    
    <input id="user" name="username" placeholder="Username..."/>  
    <button class="button" id="start" >Start playing</button>

  </form>`

});



matrixGenerator();