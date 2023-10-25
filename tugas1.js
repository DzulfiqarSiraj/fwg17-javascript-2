/*
Task Javascript Introduction
Week 2
Oct 25, 2023

1. toLowerCase (string)
  untuk merubah setiap huruf dalam string menjadi huruf non-kapital
  contoh:
*/
const huruf1 = "Hello";
huruf1.toLowerCase();
console.log(huruf1); //output : 'hello'

/*
2. toUpperCase (string)
  untuk merubah setiap huruf dalam string menjadi huruf kapital
  contoh:
*/
const huruf2 = "Hello";
huruf2.toUpperCase();
console.log(huruf1); //output : 'HELLO'

/*
3. slice (string)
  untuk mengambil sebagian karakter dalam string dan mengembalikan nilainya yang telah di slice
  contoh:
*/
const huruf3 = "Fazztrack";
const huruf3New = huruf3.slice(4);
console.log(huruf3New); //output: 'track'

/*

4. replace (string)
  untuk mengganti huruf atau kata di dalam sebuah string menjadi string yang diinginkan
  contoh:
*/
const sayHello = "Hello Fazztrack";
console.log(sayHello.replace("Fazztrack", "World")); //output: 'Hello World'

/*
5. indexOf (string & array)
  untuk mencari urutan index ke-n pertama suatu karakter dalam string
  contoh:
*/

console.log(sayHello.indexOf("o")); //output: 4

/*
6. forEach (array)
  untuk melakukan perulangan pada sebuah array tetapi tidak mengembalikan nilainya
  contoh:
*/
const myArr = ["Senin", "Selasa", "Rabu"];
myArr.forEach((m) => console.log(m)); //output: Senin Selasa Rabu

/*
7. pop (array)
  untuk menghapus data pada index terakhir dalam sebuah array dan mengembalikan nilainya
  contoh:
*/
const rabu = myArr.pop();
console.log(myArr); //output: ['Senin', 'Selasa']
console.log(rabu); //output: 'Rabu'

/*
8. shift (array)
  untuk menghapus data pada index pertama dalam sebuah array dan mengembalikan nilainya
  contoh:
*/
const senin = myArr.shift();
console.log(myArr); //output: ['Selasa']
console.log(senin); //output: 'Senin'

/*
9. unshift (array)
  untuk menambah data pada index pertama dalam sebuah array
  contoh:
*/
myArr.unshift("Senin");
console.log(myArr); //output: ['Senin','Selasa']

/* 
10. toString (array)
  untuk merubah array menjadi string
  contoh:
*/
console.log(myArr.toString()); //output: 'Senin,Selasa'
