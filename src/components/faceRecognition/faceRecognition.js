import React from 'react';
import './faceRecognition.style.css';

const FaceRecognition = ({ imageURL, box }) => {
  return (
    <div className="flex items-center justify-center m-5">
      <div>
        <img
          id="inputImage"
          src={imageURL}
          alt=""
          width={'500px'}
          height={'auto'}
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
