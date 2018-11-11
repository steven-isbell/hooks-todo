import { useState, FormEvent } from 'react';

const useInputValue = (initialValue: string = '') => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput({ currentTarget: { value } }: FormEvent<HTMLTextAreaElement>) {
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
