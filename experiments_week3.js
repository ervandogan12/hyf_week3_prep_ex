"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

  for (let index = 0; index < sampleSize; index++) {
    let rndInt = Math.floor(Math.random() * 6) + 1;
    valueCounts[rndInt-1]++;
  }



  const results = [];

  for (const iterator of valueCounts) {

    results.push(((iterator/sampleSize)*100).toFixed(2));
   
}



  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];
  let outPut;
  for (const iterator of sampleSizes) {
    outPut = runExperiment(iterator);
    console.log(`[${outPut}] ${iterator}`);
  }
}

main();