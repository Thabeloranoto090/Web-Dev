const arr = [9, 15, 12, 10, 8, 5];
const target = 12;

let index = -1; // default if not found

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    index = i;
    break;
  }
}

console.log(index); // 211