let formItem = document.getElementById('form-item');
let inputField = document.getElementById('input-field');
let listItem = document.getElementById('list-item');
let clearBtn = document.getElementById('clear');


function displayItems(){
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemToDOM(item));
}
function onAddItemSubmit(e){
    e.preventDefault();
    let newItem = inputField.value;
    if(newItem === ''){
        alert("Please add an Item");
        return;
    }

    addItemToDOM(newItem);
    addItemToStorage(newItem);
}

function addItemToDOM(item){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item))
    listItem.appendChild(li);

    inputField.value = '';
    inputField.focus();
}

function addItemToStorage(item) {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.push(item);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage(){
    let itemsFromStorage;
    if(localStorage.getItem('items') === null){
        itemsFromStorage = [];
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;
}

function clearItems() {
    while(listItem.firstChild){
        listItem.firstChild.remove(listItem.firstChild);
    }
}


formItem.addEventListener('submit', onAddItemSubmit);
document.addEventListener('DOMContentLoaded', displayItems);
clearBtn.addEventListener('click', clearItems);