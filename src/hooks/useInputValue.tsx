import { useState } from 'react';

type Event = {
  target: {
    value: string;
  };
  which: number;
  keycode: number;
};

export const useInputValue = (initialValue = '') => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput({ target: { value } }: Event) {
      return setInputValue(value);
    },
    clearInput() {
      return setInputValue('');
    },
    keyInput({ which, keycode }: Event, callback: Function) {
      if (which === 13 || keycode === 13) {
        callback(inputValue);
        return true;
      }
      return false;
    }
  };
};
