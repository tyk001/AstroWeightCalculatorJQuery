var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];


$(document).ready(function() {
    $("#submitButton").click(function() {
        var myWeightValue = $('#myWeight').val();
        var selectedPlanet = $('#pListing option:selected').text();
        findPlanet(myWeightValue, selectedPlanet)
    });
});


function findPlanet(myWeightValue, selectedPlanet) {
    for (var i = 0; i < planets.length; i++) {
        if (planets[i].planet == selectedPlanet) {
            var planetsGravity = planets[i].gravity;
        }
    }
    console.log(myWeightValue)
    doCalc(planetsGravity, myWeightValue, selectedPlanet);
}


function doCalc(planetsGravity, myWeightValue, selectedPlanet) {
    var answer = Math.round(planetsGravity * myWeightValue);
    displayCalc(answer, selectedPlanet);
}


function displayCalc(answer, selectedPlanet) {
    $('body').append('<p>If you were on ' + selectedPlanet + ', you would weigh ' + answer + 'lbs!<p>');
}
