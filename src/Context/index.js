import React, { useState, createContext, useContext, useEffect } from 'react';

export const DriverContext = createContext();

export function DriverContextProvider({ children }) {
  // aqui vai o componente do estacionamento selecionado
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedParking, setSelectedParking] = useState(null);
  const [scheduling, setScheduling] = useState({
    date: '13/05/23',
    hour: '14:00',
    warning: 'Você tem 15 minutos para chegar ao estacionamento',
    location: 'Rua do Futuro, 123',
    bookingStatus: 'Reservado',
    bookingCode: '123456',
  });
  const [userInformation, setUserInformation] = useState({
    name: 'João',
    tel: '',
    car: '',
  });
  return (
    <DriverContext.Provider
      value={{
        selectedParking,
        setSelectedParking,
        scheduling,
        setScheduling,
        userInformation,
        setUserInformation,
      }}
    >
      {children}
    </DriverContext.Provider>
  );
}

export const useDriverContext = () => useContext(DriverContext);
