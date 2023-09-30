
import React, { useState,createContext,useContext, useEffect } from 'react';


export const GlobalContext = createContext();


export const GlobalContextProvider = ({ children }) => {
    //aqui vai o componente do estacionamento selecionado 
    const [ selectedParking, setSelectedParking ] = useState(null);
    const [ scheduling, setScheduling ] = useState({
        date: "13/05/23",
        hour: "14:00",
        warning: "Você tem 15 minutos para chegar ao estacionamento",
        location: "Rua do Futuro, 123",
        bookingStatus: "Reservado",
        bookingCode: "123456",
    });
    const [ userInformation, setUserInformation ] = useState({
        name: "João",
        tel: "",
        car: ""
    });
  return (
    <GlobalContext.Provider value={{  selectedParking, setSelectedParking, scheduling, setScheduling, userInformation, setUserInformation}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
