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
    let button = createButton('remove-item text-red');
    li.appendChild(button);
    inputField.value = '';
    inputField.focus();
    checkUI();
}

function createButton(classes) {
    let button = document.createElement('button');
    button.className = classes;
    let icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    let icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(item){
    if(confirm("Are You Sure?")){

        item.remove();
        removeItemFromStorage(item.textContent);

        checkUI()
    }
}
function removeItemFromStorage(item){
    let itemsFromStorage = getItemsFromStorage();
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}
function onClickItem(e) {
    if(e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement.parentElement);
    }
}

function clearItems() {
    while(listItem.firstChild){
        listItem.firstChild.remove(listItem.firstChild);
    }

    localStorage.removeItem('items');
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
listItem.addEventListener('click', onClickItem);

checkUI();