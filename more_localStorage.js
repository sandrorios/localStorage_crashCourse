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
