var obj = {};
var obj_2 = new Object();

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

const myAge = 'name';
// console.log(user);
//access property by key name where key is entered as a string
console.log(`${user.name} age is : ${user['age']}`);
console.log(`${user.name} lives in : ${user["address"]["city"]}`);
// using dot notation
console.log(user.address.city);
console.log(user.phoneNumber[0]);
//asssing the key string to a variable and use the variable
console.log(user[myAge])

user.name = "Sravanthi"
// user.random = true
// Object.assign(sourceObj, targetObj)
const user2 = Object.assign({ random: true, dob: new Date() }, user)
console.log(`----------------- before deletion---------------------------`)
console.log(user2)
delete user2.random
delete user2.verified
console.log(`------------------ after deletion--------------------------`)
console.log(user2)
// to chek for one proprty (key)
// what if? you want to know whethere cetain property exists in an object --> results boolean value
console.log(user2.hasOwnProperty('verified'));
console.log(user2.hasOwnProperty('name'));

console.log(user.hasOwnProperty('verified'));
console.log(user.hasOwnProperty('name'));

// look up for keys
// to chek for all the keys (properties)
console.log(Object.keys(user))

const countries = {
    india: {
        Karnataka: {
            bidar: {
                bhalki: ["strret 1", "strret 2"],
                humnabad: ["strret 1", "strret 2"]
            },
            gulbarga: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            }
        },
        andhra: {
            vizag: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            },
            gulbarga: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            }
        },
        telangana: {
            MEDAK: {
                narayankhed: ["strret 1", "strret 2"],
                nizagaddi: ["strret 1", "strret 2"]
            },
            hyderabad: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            },
            narayankhed: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            },
            gulbarga: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            }
        }
    },
    usa: {
        Karnataka: {
            bidar: {
                bhalki: ["strret 1", "strret 2"],
                humnabad: ["strret 1", "strret 2"]
            },
            gulbarga: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            }
        },
        andhra: {
            vizag: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            },
            gulbarga: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            }
        },
        telangana: {
            MEDAK: {
                narayankhed: ["strret 1", "strret 2"],
                nizagaddi: ["strret 1", "strret 2"]
            },
            hyderabad: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            },
            narayankhed: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            },
            gulbarga: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            }
        }
    },
    pakistan: {
        Karnataka: {
            bidar: {
                bhalki: ["strret 1", "strret 2"],
                humnabad: ["strret 1", "strret 2"]
            },
            gulbarga: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            }
        },
        andhra: {
            vizag: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            },
            gulbarga: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            }
        },
        telangana: {
            MEDAK: {
                narayankhed: ["strret 1", "strret 2"],
                nizagaddi: ["strret 1", "strret 2"]
            },
            hyderabad: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            },
            narayankhed: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            },
            gulbarga: {
                sedam: ["strret 1", "strret 2"],
                gulbarga: ["strret 1", "strret 2"]
            }
        }
    }
}

console.log(`The list of countries are : ${Object.keys(countries)}`)
let countryName = document.getElementById("countryDropDown");
console.log(`The list of states in India are : ${Object.keys(countries[coutryName])}`)
let stateName = document.getElementById("stateDropDown");
console.log(`The list of districts in Telangana are : ${Object.keys(countries.india.telangana)}`)
