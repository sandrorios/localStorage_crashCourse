function onAddItemSubmit(e){

    addItemToDOM(newItem);
    addItemToStorage(newItem);
}

function addItemToDOM(item){
    let itemsFromStorage;
    if(localStorage.getItem('items') == null){
        itemsFromStorage = [];
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
        itemsFromStorage.push(item);
        localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}