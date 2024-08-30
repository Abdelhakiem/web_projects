import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className='m-10 flex items-center justify-center'>
      <h1 className='text-gray-500 text-5xl'>
        {text1} <span className='text-black text-5xl'>{text2}</span>
      </h1>
      <span className='h-0.5 bg-gray-600 w-20 m-3'></span>
    </div>
  );
};

export default Title;
