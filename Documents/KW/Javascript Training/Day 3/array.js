let sample_arr = [1,2,3,4,5]
const sample_arr2 = [1, "one", 2, "two", 3, "three"]
var sample_arr3 = [ { name : "sravanthi", age : 24}, { name : "Pooja", age : 42} ]

var sample_arr4 = [ 1, 2, 3, { name : "sravanthi", age : 24}, { name : "Pooja", age : 42}, "srini" ]

// {variable_type} {variable_name} = {value}

// console.log(sample_arr, sample_arr2, sample_arr3, sample_arr4)

// console.log(`The length of an sample_arr2 is ${sample_arr2.length}`)

let count = sample_arr2.length;
let lastButOneIndex = count - 2;
let thirdElementFromLastIndex = count - 3;
// console.log(`The last word in sample_arr2 is ${sample_arr2[thirdElementFromLastIndex]}`)

// character count or value counts
// indexing

sample_arr = [1,2,3,4,5]
// sample_arr[0] = 6
// sample_arr[sample_arr.length - 1] = 6
// sample_arr[sample_arr.length - 2] = 6
console.log(`Original Array ${sample_arr}`)
sample_arr.push(6)
sample_arr.push(7)
sample_arr.push(8)
// console.log(`After adding three values ${sample_arr}`)
const deleted_value = sample_arr.pop()
// console.log(`deleted value is ${deleted_value}`)
// console.log(`After removing last value ${sample_arr}`)
sample_arr.push(undefined)
sample_arr.push(NaN)
// console.log(`After adding no element in array ${sample_arr.length}`)
sample_arr.shift()
console.log(sample_arr)
sample_arr.unshift(9)
console.log(sample_arr)


unshift/shift -----> [1,2,3,4,5,6,7,8,9,10] <----- push/pop