import React from 'react';
import ImageGrid from "./ImageGrid"
import Images from "../app/ImagesArray/Residence.json"


const Residence = () => {

 return (
  <ImageGrid imageArray={Images} title="Residence" />
 );
};

export default Residence;
