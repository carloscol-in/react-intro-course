import { useState } from 'react';

export const useLocalStorage = (itemName, initalValue) => {
    let parsedItem = JSON.parse(localStorage.getItem(itemName));

    if (parsedItem === null) {
        localStorage.setItem(itemName, JSON.stringify(initalValue));
        parsedItem = [];
    }

    const [item, setItem] = useState(parsedItem);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return [
        item,
        saveItem
    ];
}