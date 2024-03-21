// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        const jPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, jPlanet.name, jPlanet.diameter, jPlanet.star, jPlanet.distance, jPlanet.moons, jPlanet.image);
 
    })
    let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
        const list = document.getElementById("faultyItems");
        const pilot = document.querySelector('input[name=pilotName]').value;
        const copilot = document.querySelector('input[name=copilotName]').value;
        const fuelLevel = document.querySelector('input[name=fuelLevel]').value;
        const cargoLevel = document.querySelector('input[name=cargoMass]').value;
    
        event.preventDefault();
        event.stopPropagation();
        
    
        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        
    });
 });
 