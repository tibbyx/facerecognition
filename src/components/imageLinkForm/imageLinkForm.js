import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="text-lg">
        {'This Magic Brain will detect faces in your pictures.'}
      </p>
      <div>
        <input
          type="text"
          className="w-80 text-sm p-5 items-center mt-5 border-round bg-slate-600 rounded-md bg-opacity-25 border-opacity-25 border-opa"
          onChange={onInputChange}
        />
        <button
          className="ml-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={onButtonSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
