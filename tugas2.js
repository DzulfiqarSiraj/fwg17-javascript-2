// Task Javascript Introduction
// Week 2
// Oct 25, 2023

const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function filterName(arr, pattern) {
  if (typeof pattern !== "string") {
    console.log("Input must be string");
    return;
  }

  let arrTemp = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    let patternTemp = "";
    for (let j = 0; j < arr[i].length; j++) {
      if (patternTemp == pattern) {
        arrTemp = [...arrTemp, arr[i]];
      }
      if (patternTemp.length == 2) {
        patternTemp = "";
      }
      patternTemp += arr[i][j];
    }
  }
  return arrTemp;
}

console.log(filterName(name, "an"));
