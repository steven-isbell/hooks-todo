import { useState, FormEvent } from 'react';

const useInputValue = (initialValue = '') => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput({ currentTarget: { value } }: FormEvent<HTMLInputElement>) {
      return setInputValue(value);
    },
    clearInput() {
      return setInputValue('');
    }
    // keyInput(
    //   { which, keyCode }: React.KeyboardEvent<HTMLElement>,
    //   callback: Function
    // ) {
    //   if (which === 13 || keyCode === 13) {
    //     callback(inputValue);
    //   }
    // }
  };
};

export default useInputValue;
