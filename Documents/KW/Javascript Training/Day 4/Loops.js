// initialzation; condition; postCondition
// print numbers from 1 -10
for (let index = 0; index < 10; index++) {
    // console.log(index);
}

// condition is mandatory but not initialization and post operation. (semicolon is mandatory)
let index = 0
for (; index < 10;) {
    // console.log(index);
    index++
}

// For arrays
var arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let index = 0; index < arr.length; index++) {
    // console.log(arr[index])
}

// for-of uses values
for (const value of arr) {
    // console.log(value)
}

// for-in uses keys
for (const index in arr) {
    // console.log(arr[index])
}

// For Objects
var user = {
    name: "Kailas",
    age: 28,
    degree: "MTech",
    phoneNumber: [9008067676, 9008067676],
    address: {
        street: '#33 road',
        city: 'Hyderabad',
        state: 'Telangana',
        pincode: 456789
    },
    verified: false,
    details: undefined
}

// print keys in an object
for (const key in user) {
    // console.log(key);
}
// print values in an object
for (const key in user) {
    // console.log(user[key]);
}

// print keys in an object
for (const iterator of Object.keys(user)) {
    // console.log(iterator)
}

//print values in an object
for (const iterator of Object.values(user)) {
    // console.log(iterator)
}


// for(;condition;)
let i = 0;
while (i < 5) {
    console.log(i + 1)
    i++;
}

let j = 0;
do {
    //code
    console.log(j+1)
    j++;
} while (j < 5); //condition