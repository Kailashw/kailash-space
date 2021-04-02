// > if
// > else
// > else if 
// > nested if else
// > break
// > continue
// > ternary operations

// Hyderabad ============================================>  Bangalore
//              ==> Dharmavaram  ===> Guntakal

// if condition
for (let index = 0; index < 10; index++) {
    if(index%2 !== 0){
        // console.log(`${index} is a ODD Number`)
    }
    if(index%2 == 0){
        // console.log(`${index} is an EVEN Number`)
    }
}

// if-else
for (let index = 0; index < 10; index++) {
    if(index%2 !== 0){
        // console.log(`${index} is a ODD Number`)
    }
    else{
        // console.log(`${index} is an EVEN Number`)
    }
}

// in numbers from 1-20, 
// if a number is divisible by 2 , print "foo"
// if a number is divisible by 3 , print "bar"
// if a number is divisible by 2 and 3 , print "foo-bar"
// if it isnot divisible by any of them, print "not divisible"
for (let index = 1; index < 20; index++) {
    if(index %3 === 0 && index %2 === 0){
        console.log("foo-bar")
    }
    else if(index %2 === 0){
        console.log("foo")
    }
    else if(index %3 === 0){
        console.log("bar")
    }
    else{
        console.log("not divisible")
    }
}