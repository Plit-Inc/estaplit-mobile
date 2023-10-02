import { TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {DriverContext, useDriverContext} from '../../Context/index.js';
import ParkingCard from '../../components/utils/ParkingCard';
import { StyledContainer, ScrowViewStyled, MainView, DateHoursContainer,BodyContainer, StyledParkingContainer } from './style.js';
import Title from '../../components/utils/Title/index.js';
import DateToggleSelect from '../../components/utils/DateToggle/DateToggleSelect.js';
import HourToggle from '../../components/utils/HourToggle/index.js'

import MainButton from '../../components/utils/MainButton/index.js';
import Separator from "../../components/utils/Separator";
export default function ReserveParking({ navigation }) {
  const { selectedParkingSpace, scheduling, setScheduling } = useDriverContext();
  const dates = selectedParkingSpace.available_dates.map((date)=>({...date, isSelected: false}))
  const [dateList, setdateList] = useState(dates);
  const [hoursList, setHoursList] = useState([]);
  const [ selectedData , setSelectedData ] = useState({});
  const [ selectedHour, setSelectedHour ] = useState({});
  
  const handleDateSelected = (index) => {
    const updatedateList = dateList.map((date, i) => {
      date = { ...date, isSelected: false };
      if (i === index) {
        setSelectedData(date);
        return { ...date, isSelected: !date.isSelected };
      }
      return date;
    });
    setdateList(updatedateList);
  };

  const handeHourSelected = (index) => {
    const updateHourList = hoursList.map((hour, i) => {
      hour = { ...hour, isSelected: false };
      if (i === index) {
        setSelectedHour(hour);
        return { ...hour, isSelected: !hour.isSelected };
      }
      return hour;
    });
    setHoursList(updateHourList);
  }

  useEffect(() => {
    
    if(selectedData.hours){
      const selectedHourList = selectedData.hours.map((hour)=>({...hour, isSelected: false}))
      setHoursList(selectedHourList)
    }
  },[selectedData])

  const handleScheduling = () => {
    if(!selectedData.date || !selectedHour.hour){
      return
    }
    setScheduling({...scheduling, date: selectedData.date, hour: selectedHour.hour})
    navigation.navigate('ConfirmReservation');
  }
  
    return (
      <MainView>
        <StyledParkingContainer>
          <ParkingCard
            isOpen
            price={selectedParkingSpace.price}
            title="Estacionamento mais barato"
            distance={selectedParkingSpace.distance}
            review={selectedParkingSpace.rate}
            hours={selectedParkingSpace.day_time}
            imagePath={selectedParkingSpace.images[0]}
            activeOpacity={1}
            style={{margin: -16}}
          />
        </StyledParkingContainer>
        <Separator style={{marginTop: 18}}/>
        <BodyContainer>
        <DateHoursContainer>
          <Title text={"Selecione uma data e horário"} />
          <ScrowViewStyled 
            horizontal
            >
          
          {dateList && dateList.map((dateItem, index) => (
          <TouchableOpacity key={index} onPress={() => handleDateSelected(index)}>
            <DateToggleSelect
              key={index}
              headerDateText={dateItem.date}
              mainDateText={dateItem.day}
              isSelected={dateItem.isSelected}
            />
          </TouchableOpacity>
            
          ))}
          </ScrowViewStyled>
          
          <ScrowViewStyled>
          {hoursList && hoursList.map((hourItem, index)=>(
            <TouchableOpacity key={index} onPress={() => handeHourSelected(index)}>
              <HourToggle
                key={index}
                hour={hourItem.hour}
                parkingAmount={hourItem.available}
                isSelected={hourItem.isSelected}
              />
              </TouchableOpacity>
          ))
          }
          </ScrowViewStyled>
        
        </DateHoursContainer>
        <MainButton style={{marginBottom: 18}} text={"Continuar"} styleName="default" iconName="arrow-forward" callback={handleScheduling}/>
        </BodyContainer>
      </MainView>
    )

}

