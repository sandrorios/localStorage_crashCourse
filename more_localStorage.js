// Store an objec in Local Storage
// localStorage.setItem('user', JSON.stringify({name: 'Gopi Gorantala', age: '32'}))

// Retrieve an ogject in Local Storage
// const user = JSON.parse(localStorage.getItem('user'));

const myObj = {
    name: "John",
    ageg: 31,
    city: "New York"
};


// Storing data:
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
document.getElementById('demo').innerHTML = obj.name;


// Store data in localStorage
localStorage.setItem("key", "value");

// Retrieve data from localStorage
console.log(data);

//Update data in localStorage
localStorage.setItem("key", "new value");

//Retrieve updated data from localStorage;
var updatedData = localStorage.getItem("key");
console.log(updatedData);

//Remove data from localStorage
localStorage.removeItem("key");

//Check if data has been removed
var removedData = localStorage.getItem("key");
console.log(removedData);

//Clear all data from localStorage
localStorage.clear();