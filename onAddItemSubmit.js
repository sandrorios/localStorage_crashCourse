let formItem = document.getElementById('form-item');
let inputField = document.getElementById('input-field');
let listItem = document.getElementById('list-item');
let clearBtn = document.getElementById('clear');
let filterItems = document.getElementById('filter');


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
    checkUI();
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
    checkUI();
}

function filterItem(e) {
    let items = listItem.querySelectorAll('li');
    let text = e.target.value.toLowerCase();

    items.forEach((items) =>{
        let itemName = items.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(text)!= -1){
            items.style.display = 'flex';
        }else{
            items.style.display = 'none';
        }
    })
    checkUI();
}

function checkUI(){
    let item = listItem.querySelectorAll('li');
    if(item.length === 0){
        clearBtn.style.display = 'none';
        filterItems.style.display = 'none';
    }else{
        clearBtn.style.display = 'block';
        filterItems.style.display = 'block';
    }
}



formItem.addEventListener('submit', onAddItemSubmit);
document.addEventListener('DOMContentLoaded', displayItems);
clearBtn.addEventListener('click', clearItems);
filterItems.addEventListener('input', filterItem)

checkUI();