import { useState, FormEvent } from 'react';

const useInputValue = (initialValue = '') => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput({ currentTarget }: FormEvent) {
      return setInputValue(currentTarget);
    },
    clearInput() {
      return setInputValue('');
    },
    keyInput({ which, keyCode }: KeyboardEvent, callback: Function) {
      if (which === 13 || keyCode === 13) {
        callback(inputValue);
        return true;
      }
      return false;
    }
  };
};

export default useInputValue;
