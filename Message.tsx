import React from 'react';
import { messageText } from '../../constants/text';

export const Message = () => {
  return (
    <div className="message">
      <p className="love-text text-2xl leading-relaxed text-center">
        {messageText.main}
      </p>
      <p className="love-text text-4xl text-center mt-8 text-red-500 font-bold">
        {messageText.declaration}
      </p>
    </div>
  );
};