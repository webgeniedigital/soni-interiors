import React from 'react';
import ImageGrid from "./ImageGrid"
import Images from "../app/ImagesArray/Commercial.json"

const Commercial = () => {

 return (
  <ImageGrid imageArray={Images} title="Commercial" />
 )
};

export default Commercial;
