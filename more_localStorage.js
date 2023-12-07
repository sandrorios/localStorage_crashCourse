// Store an objec in Local Storage
localStorage.setItem('user', JSON.stringify({name: 'Gopi Gorantala', age: '32'}))

// Retrieve an ogject in Local Storage
const user = JSON.parse(localStorage.getItem('user'));