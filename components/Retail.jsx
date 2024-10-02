import React from 'react';
import ImageGrid from "./ImageGrid"
import Images from "../app/ImagesArray/Retail.json"

const Retail = () => {

 return (
  <ImageGrid imageArray={Images} title="Retail" />
 );
};

export default Retail;
