// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
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
 