import React, { createContext, useState } from 'react';
import img from '../img/index'
const AppContext = createContext();
const AppProvider = (props) => {
 
 const [cityName,setCityName] =useState('Hanoi');
 const [background, setBackground] = useState(img.imgHanoi);
  return (
    <AppContext.Provider
      value={{
        cityName,
        setCityName,
        background,
         setBackground
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
export { AppProvider, AppContext };
