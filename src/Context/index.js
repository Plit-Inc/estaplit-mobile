import React, { useState, createContext, useContext, useEffect } from 'react';
import * as mock from '../services/mock.json';

export const DriverContext = createContext();

export function DriverContextProvider({ children }) {
  const { reservations, parking_spaces } = mock
  const [selectedParkingSpace, setSelectedParkingSpace] = useState(undefined);
  const [scheduling, setScheduling] = useState({});
  const [scheduleParkingInfo, setScheduleParkingInfo] = useState({
    name: '',
    phoneNumber: '',
    car: ''
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
        scheduleParkingInfo,
        setScheduleParkingInfo
      }}
    >
      {children}
    </DriverContext.Provider>
  );
}

export const useDriverContext = () => useContext(DriverContext);
