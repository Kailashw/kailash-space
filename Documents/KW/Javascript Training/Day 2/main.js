var initialName = "Kailash";

function changeName() {
    console.log(initialName);
    intialName = initialName == "Kailash" ?  "Sravanthi" : "Kailash";
    console.log(initialName);
    document.getElementById("demo").innerHTML = intialName;
}