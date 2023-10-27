// Task Javascript Introduction
// Week 2
// Oct 25, 2023

// string to lower case function
function lowerCaseFun(str) {
  const upperAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; //length 26
  const lowerAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  ]; //length 26

  let caseTemp = ""
  for(let i = 0; i < str.length;i++){
    if(str[i] == " "){
      caseTemp = caseTemp + str[i]
    }
    for(let j = 0; j < 26;j++){
      if(str[i] == upperAlpha[j] || str[i] == lowerAlpha[j]){
        caseTemp = caseTemp + lowerAlpha[j]
      }
    }
  }
  return caseTemp
}

// string to upper case function
function upperCaseFun(str) {
  const upperAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; //length 26
  const lowerAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  ]; //length 26

  let caseTemp = ""
  for(let i = 0; i < str.length;i++){
    if(str[i] == " "){
      caseTemp = caseTemp + str[i]
    }
    for(let j = 0; j < 26;j++){
      if(str[i] == upperAlpha[j] || str[i] == lowerAlpha[j]){
        caseTemp = caseTemp + upperAlpha[j]
      }
    }
  }
  return caseTemp
}

// filtering array by pattern function
function filterName(arr, pattern) {
  if(typeof pattern !== "string") {
    console.log("Input must be string");
    return;
  }
  
  const newPattern = lowerCaseFun(pattern)
  
  let arrTemp = [];

  for(let i = 0; i < arr.length; i++){
    let lowChar = lowerCaseFun(arr[i]);
    for(let j = 0; j < lowChar.length; j++){
      let strTemp = ""
      for(let k = j; k < newPattern.length + j;k++){
        if(lowChar[k]){
          strTemp += lowChar[k]
        }
      }
      if(strTemp === pattern){
        if(arrTemp[i] !== true){
          arrTemp = [...arrTemp, arr[i]]
        }
      }
    }
  }

  return arrTemp
}

// showing filtered array by limit function
function showArrFiltered(arr, limit){
  let result = []
  for(let i = 0; i < limit; i++){
    if(limit <= 0){
      return
    }
    if(arr[i] !== undefined){
      result = [...result, arr[i]]
    }
  }

  console.log(result)
}

// searching name in filtered array by limit function with callback
function searchName(pattern, limit, filterFun){
  const name = ["Abigail","Alexandra","Alison","Amanda","Angela","Bella","Carol","Caroline","Carolyn","Deirdre","Diana","Elizabeth","Ella","Faith","Olivia","Penelope",];

  const myArr = filterName(name,pattern)

  filterFun(myArr, limit)
}


// menggunakan built-in function

const listName = ["Abigail","Alexandra","Alison","Amanda","Angela","Bella","Carol","Caroline","Carolyn","Deirdre","Diana","Elizabeth","Ella","Faith","Olivia","Penelope",];

function filteringArray(data, pattern, limit){
  if(typeof data !== 'object'){
    console.log("data type must be array")
    return
  }

  if(typeof pattern != 'string'){
    console.log("pattern type must be string")
    return
  }

  if(typeof limit != 'number'){
    console.log("limit type must be number")
    return
  }
  
  const arrFiltered = (arr) => {
    let arrNew = arr.toLowerCase();
    if(arrNew.includes(pattern)){
      return arrNew
    }
  }
  
  console.log(data.filter(arrFiltered).slice(0,limit))
}


// Algoritma menggunakan forEach

function filterArrayForEach(pattern, limit, callback){
  const name = ["Abigail","Alexandra","Alison","Amanda","Angela","Bella","Carol","Caroline","Carolyn","Deirdre","Diana","Elizabeth","Ella","Faith","Olivia","Penelope",];
  let newName = [];
  name.forEach(n => newName.push(n.toLowerCase()))
  
  console.log(callback(newName, pattern).slice(0, limit))
}

let filtering = (data, pattern) => {
  return data.filter(d => d.includes(pattern))
}


// Algoritma menggunakan map

function filterArrayMap(pattern, limit, callback){
  const name = ["Abigail","Alexandra","Alison","Amanda","Angela","Bella","Carol","Caroline","Carolyn","Deirdre","Diana","Elizabeth","Ella","Faith","Olivia","Penelope",];
  console.log(callback(name.map(n => lowerCaseFun(n)), pattern).slice(0, limit))
}

searchName('an',2,showArrFiltered)
filteringArray(listName,'an',2)
filterArrayForEach('an',2, filtering)
filterArrayMap('an',2, filtering)