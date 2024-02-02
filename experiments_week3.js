"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

  for (let index = 0; index < sampleSize; index++) {
    let rndInt = Math.floor(Math.random() * 6) + 1;

    switch (rndInt) {
      case 1:
        valueCounts[0] = valueCounts[0] + 1;

        break;
      case 2:
        valueCounts[1] = valueCounts[1] + 1;

        break;

      case 3:
        valueCounts[2] = valueCounts[2] + 1;

        break;
      case 4:
        valueCounts[3] = valueCounts[3] + 1;

        break;
      case 5:
        valueCounts[4] = valueCounts[4] + 1;

        break;
      case 6:
        valueCounts[5] = valueCounts[5] + 1;

        break;
      default:
        break;
    }
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
