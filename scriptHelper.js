// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    document.getElementById("missionTarget").innerHTML =`
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
    
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
       } else if (isNaN(testInput)) {
        return "Not a Number";
       } else {
        return "Is a Number";
       }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotReady = validateInput(pilot);
    const copilotReady = validateInput(copilot);
    const fuelLevelReady = validateInput(fuelLevel);
    const cargoMassReady = validateInput(cargoLevel);

    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");

   if (pilotReady  === "Empty" || copilotReady === "Empty" || fuelLevelReady === "Empty" || cargoMassReady === "Empty") {
    alert("All fields are required!");
   } else if (fuelLevelReady === "Not a Number" || cargoMassReady === "Not a Number") {
    alert("Make sure to enter valid information for each field!");
   } else {
    faultyItems.style.visibility = 'visible';
    document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`  
    document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`
   
    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = 'Fuel level too low for launch';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = 'red';
        faultyItems.style.visibility = `visible`;
        
       } else {
        fuelStatus.innerHTML = 'Fuel level high enough for launch';
       }
       if (cargoLevel > 10000) {
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = 'red';
        faultyItems.style.visibility = 'visible';
        
       } else {
        cargoStatus.innerHTML = 'Cargo mass low enough for launch';
       }
       if(fuelLevel >= 10000 && cargoLevel <= 10000) {
        faultyItems.style.visibility = 'visible';
        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
        launchStatus.style.color = 'green';
        
       }
    
   }
   
 }
 
 async function myFetch() {
let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(response => response.json()); 
        
    return planetsReturned;
}

 
 function pickPlanet(planets) {
    const planetRandom = Math.floor(Math.random() * planets.length);    
    return planets[planetRandom];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;