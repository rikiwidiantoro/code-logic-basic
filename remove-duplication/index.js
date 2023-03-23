// assessment week2 bootcamp devland

// input
const inputArray = [1, 3, 3, 5, 5];
const inputArray2 = [1, 2, 3, 3, 3, 3, 7, 6, 6, 6];
const inputArray3 = [1, 2, 2, 4, 4, 4, 2, 2, 5, 5, 5, 1];

// array baru kosong
let arrayBaru = [];
let arrayBaru2 = [];

// function remove angka yg sama(duplikat) hanya yg sama & urut.
function removeDuplication(input) {
  // looping setiap angka di dalam array
  for (let i = 0; i < input.length; i++) {
    // pengkondisian jika input[0] != input[1] => 1 != 3 => true. maka 1 di push ke arrayBaru[] dst...
    if (input[i] != input[i + 1]) {
      arrayBaru.push(input[i]);
    }
  }

  // mengembalikan nilai dari arrayBaru[]
  return arrayBaru; // untuk input array no.1 & 2
  // return arrayBaru.sort(); // untuk input array no.3
}

const result = removeDuplication(inputArray3);
// console.log(arrayBaru);
// console.log(result);
// output : [1, 3, 5]

// const result2 = removeDuplication(inputArray2);
// console.log(result2);
// output : [1, 2, 3, 7, 6]

// function untuk mengurutkan nilai dalam array -> dari stackoverflow
function sortingArray(inputan) {
  for( let k = 0; k < inputan.length; k++ ) {
    for( let l = 0; l < inputan.length; l++ ) {
      if( inputan[k] < inputan[l] ) {
        let m = inputan[k];
        inputan[k] = inputan[l];
        inputan[l] = m;
      }
    }
  }
  return arrayBaru;
}
sortingArray(arrayBaru);

// function validasi array yg telah dihapus angka yg duplikat urut. klo tidak urut harus menggunakan fungsi sort() untuk mengurutkan angka terlebih dahulu.
function removeDuplicationValidation(input2) {
  for (let j = 0; j < input2.length; j++) {
    // pengkondisian jika input[0] != input[1] => 1 != 3 => true. maka 1 di push ke arrayBaru[] dst...
    if (input2[j] != input2[j + 1]) {
      arrayBaru2.push(input2[j]);
    }
  }

  // mengembalikan nilai dari arrayBaru[]
  return arrayBaru2;
}
const resultt = removeDuplicationValidation(arrayBaru);
console.log(resultt);
// output : [ 1, 2, 4, 5 ]
