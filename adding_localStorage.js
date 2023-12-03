
function addItemToStorage(item){
    let itemsFromStorage;
    if(localStorage.getItem('items') === null){
        itemsFromStorage = [];
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'))
    }
        itemsFromStorage.push(item);
        localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function addItemToStorage(item){
    let itemsFromStorage;
    if(localStorage.getItem('items') === null){
        itemsFromStorage = [];
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    itemsFromStorage.push(item);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

function addItemToStorage(item) {
    let itemsFromStorage;
    if(localStorage.getItem('items') === null){
        itemsFromStorage = [];
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    itemsFromStorage.push(item);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function addItemToStorage(item){
    let itemsFromStorage;
    if(localStorage.getItem('items') === null){
        itemsFromStorage = [];
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
        itemsFromStorage.push(item);
        localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}