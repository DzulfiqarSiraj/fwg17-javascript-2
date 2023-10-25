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
  let str = ""

  for(let i = 0; i < arr.length;i++){
    strTemp = lowerCaseFun(arr[i])
    for(let j = 1; j < strTemp.length;j++){
      str = (strTemp[j-1] + strTemp[j])
      if(str == newPattern){
        arrTemp = [...arrTemp, arr[i]]
        str = ""
        continue
      }
      str = ""
    }
  }

  return arrTemp
}

// showing filtered array by limit function
function showArrFiltered(arr, limit){
  if(arr.length === 0 || limit === 0){
    console.log("No Result")
    return
  }
  if(limit > arr.length){
    console.log(`Limit is too high. Max length of this data is ${arr.length}`)
    return
  }
  let result = []
  for(let k = 0;k < limit;k++){
    result = [...result, arr[k]]
  }
  console.log(result)
}

// searching name in filtered array by limit function with callback
function searchName(pattern, limit, filterFun){
  const name = ["Abigail","Alexandra","Alison","Amanda","Angela","Bella","Carol","Caroline","Carolyn","Deirdre","Diana","Elizabeth","Ella","Faith","Olivia","Penelope",];

  const myArr = filterName(name,pattern)

  filterFun(myArr, limit)
}

searchName('ne',3,showArrFiltered)