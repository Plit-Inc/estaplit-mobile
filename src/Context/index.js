import React, { useState, createContext, useContext, useEffect } from 'react';
import * as mock from '../services/mock.json';

export const DriverContext = createContext();

export function DriverContextProvider({ children }) {
  const { reservations, parking_spaces } = mock
  const [selectedParkingSpace, setSelectedParkingSpace] = useState(undefined);
  const [scheduling, setScheduling] = useState({});
  const [userInformation, setUserInformation] = useState({
    name: '',
    tel: '',
    car: '',
  });
  return (
    <DriverContext.Provider
      value={{
        reservations,
        parking_spaces,
        selectedParkingSpace,
        setSelectedParkingSpace,
        scheduling,
        setScheduling,
        userInformation,
        setUserInformation
      }}
    >
      {children}
    </DriverContext.Provider>
  );
}

export const useDriverContext = () => useContext(DriverContext);
