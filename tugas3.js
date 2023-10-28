// Task Javascript Introduction
// Week 2
// Oct 25, 2023

const myArr = [2, 25, 4, 1, 30, 18] 

function sortedArray(arr){

  let arrTemp = arr;

  for(let i = 0; i < arrTemp.length; i++){
    for(let j = i; j < arrTemp.length; j++){
      if(arrTemp[i] <= arrTemp[j]){
        arrTemp[i] = arrTemp[i]
      } else {
        let num = arrTemp[i]
        arrTemp[i] = arrTemp[j]
        arrTemp[j] = num
      }
    }
  }
  
  return arrTemp
}

function seleksiNilai(nilaiAwal, nilaiAkhir, arr){
  if(nilaiAwal > nilaiAkhir){
    console.log("Nilai awal harus lebih kecil dari nilai akhir")
    return
  }
  if(arr.length <= 5){
    console.log("Jumlah data di dalam array harus lebih dari 5")
    return
  }

  let arrNew = sortedArray(arr)
  let arrTemp = [];
  for(let i = 0; i < arrNew.length; i++){
    if(arrNew[i] > nilaiAwal && arrNew[i] < nilaiAkhir){
      arrTemp = [...arrTemp, arr[i]]
    }
  }
  if(arrTemp.length === 0){
    console.log("Nilai tidak ditemukan");
    return
  }

  console.log(arrTemp)
}


// Menggunakan built in method
function seleksiNilai2(nilaiAwal, nilaiAkhir, arr){
  if(nilaiAwal > nilaiAkhir){
    console.log("Nilai awal harus lebih kecil dari nilai akhir")
    return
  }
  if(arr.length <= 5){
    console.log("Jumlah data di dalam array harus lebih dari 5")
    return
  }

  let arrNew = arr.sort((a,b) => a-b) // built-in method
  let arrTemp = [];
  for(let i = 0; i < arrNew.length; i++){
    if(arrNew[i] > nilaiAwal && arrNew[i] < nilaiAkhir){
      arrTemp.push(arr[i])
    }
  }
  if(arrTemp.length === 0){
    console.log("Nilai tidak ditemukan");
    return
  }

  console.log(arrTemp)
}


seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai2(5, 20 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(4, 17 , [2, 25, 4])
seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
