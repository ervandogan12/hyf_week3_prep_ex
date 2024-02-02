"use strict";


function getCurrentState(trafficLight) {

  let currentLight =trafficLight.possibleStates[trafficLight.stateIndex];

  return currentLight ;
}

function getNextStateIndex(trafficLight) {


  let newIndex;

  if (trafficLight.possibleStates[trafficLight.stateIndex] === "green") {
    newIndex = trafficLight.possibleStates.indexOf('orange');

    return newIndex;
  } else if (
    trafficLight.possibleStates[trafficLight.stateIndex] === "orange"
  ) {
    newIndex = trafficLight.possibleStates.indexOf('red');
    return newIndex;
  } else {
    newIndex = trafficLight.possibleStates.indexOf('green');
    return newIndex;
  }
}

function waitSync(secs) {
  const start = Date.now();
  while (Date.now() - start < secs * 1000) {

  }
}

function main() {
  const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };

  for (let cycle = 0; cycle < 6; cycle++) {
    const currentState = getCurrentState(trafficLight);
    console.log(cycle, "The traffic light is now", currentState);

    waitSync(1); 
    trafficLight.stateIndex = getNextStateIndex(trafficLight);
  }
}

main();
/**
 * The output should be:

0 The traffic light is now green
1 The traffic light is now orange
2 The traffic light is now red
3 The traffic light is now green
4 The traffic light is now orange
5 The traffic light is now red

*/
