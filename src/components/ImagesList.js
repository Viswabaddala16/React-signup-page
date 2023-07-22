import React from "react";

const ImagesList = ({ images }) => {
  return (
    <div>
      {images &&
        images.map((value, index) => {
          return (
            <div key={index}>
              <img src={value.urls.small} alt={value.alt_description} />
            </div>
          );
        })}
    </div>
  );
};

export default ImagesList;
