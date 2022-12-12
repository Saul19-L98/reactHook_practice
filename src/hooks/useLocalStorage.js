import React, { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [localStorageValue, SetLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    //Check if function
    const valueStore =
      value instanceof Function ? value(localStorageValue) : value;

    //Set to state
    SetLocalStorageValue(value);

    //Set to local storage
    localStorage.setItem(key, JSON.stringify(valueStore));
  };

  return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;
