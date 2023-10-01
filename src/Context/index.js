
import React, { useState,createContext,useContext, useEffect } from 'react';


export const DriverContext = createContext();


export const DriverContextProvider = ({ children }) => {
    //aqui vai o componente do estacionamento selecionado 
    const [ selectedParking, setSelectedParking ] = useState({
        address: "Av. Jorn. Aníbal Fernandes, s/n - Cidade Universitária, Recife - PE, 50740-560",
        policy: "Caso o cancelamento seja confirmado em pelo menos 24 horas antes do horário agendado receba de volta o valor integral que você pagou. Sem reembolso caso falte menos de 24 horas para a sua reserva.",
        value: "10,00",
        time: "1 hora",
        bookingFee: "5,00"
    });
    const [ scheduling, setScheduling ] = useState({
        date: "24 jan. 2023",
        hour: "13:00",
        warning: "Você tem 15 minutos para chegar ao estacionamento",
        location: "Rua do Futuro, 123",
        bookingStatus: "Confirmada",
        bookingCode: "123456",
    });
    const [ userInformation, setUserInformation ] = useState({
        name: "João",
        tel: "81999999999",
        car: "Kwid",
        paymentMethod: "Crédito",
        paymentStatus: "Pago em 12:24 10/05/2023",

    });

    
  return (
    <DriverContext.Provider value={{  selectedParking, setSelectedParking, scheduling, setScheduling, userInformation, setUserInformation}}>
      {children}
    </DriverContext.Provider>
  );
};

export const useDriverContext = () => useContext(DriverContext);
