function binarySearch(arr, num) {

  const length = arr.length;
  let left = 0;
  let right = length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left < right) {
    arr[mid] >= num ? right = mid : left = mid + 1;
    mid = Math.floor((left + right) / 2)
  }

  return arr[mid] === num ? mid : -1;
  // add whatever parameters you deem necessary - good luck!
}

function binarySearch(arr, num) {

  const length = arr.length;
  let left = 0;
  let right = length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    arr[mid] >= num ? right = mid : left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }

  return mid;

}


// function binarySearch(arr, val) {
//   let left = 0;
//   let right = arr.length - 1;
//   let mid = Math.floor((left + right) / 2);
//   while (arr[mid] !== val && left <= right) {
//     if (arr[mid] > val) right = mid - 1;
//     else left = mid + 1;
//     mid = Math.floor((left + right) / 2);
//   }
//   if (arr[mid] === val) return mid;
//   return -1;
// }