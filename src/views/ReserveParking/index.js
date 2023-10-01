import { TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DriverContext} from '../../Context/index.js';
import ParkingCard from '../../components/utils/ParkingCard';
import { StyledContainer, ScrowViewStyled, MainView, DateHoursContainer,BodyContainer, StyledParkingContainer } from './style.js';
import Title from '../../components/utils/Title/index.js';
import DateToggleSelect from '../../components/utils/DateToggle/DateToggleSelect.js';
import HourToggle from '../../components/utils/HourToggle/index.js'

import MainButton from '../../components/utils/MainButton/index.js';
export default function ReserveParking() {
  const dates = [{
    date:'12/10',
    day: 'segunda',
    hours:[{
      hour:'10:00',
      available: 4
    },
    {
      hour:'10:00',
      available: 4
    },
    {
      hour:'10:00',
      available: 4
    },
    {
      hour:'10:00',
      available: 4
    },]
  },
  {
    date:'13/10',
    day: 'terça',
    hours:[{
      hour:'11:00',
      available: 4
    },
    {
      hour:'11:00',
      available: 4
    },
    {
      hour:'11:00',
      available: 4
    },]
  },
  {
    date:'14/10',
    day: 'quarta',
    hours:[{
      hour:'12:00',
      available: 4
    },
    {
      hour:'12:00',
      available: 4
    },
    {
      hour:'12:00',
      available: 4
    },
    {
      hour:'12:00',
      available: 4
    },]
  }].map((date)=>({...date, isSelected: false}))

  const { scheduling, setScheduling } = React.useContext(DriverContext);
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
    
  }
  
    return (
      <MainView>
        <StyledParkingContainer>
          <ParkingCard
            isOpen
            price="R$1,25"
            title="Estacionamento mais barato"
            distance="200m"
            review="4,5 (233)"
            hours="07:00 - 22:00"
            imagePath="https://jconlineimagem.ne10.uol.com.br/imagem/noticia/2016/04/19/normal/e7e14c4d697e5b686f8dca60cd97973f.jpg"
          />
        </StyledParkingContainer>
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
        <MainButton style={{margin: 18}} text={"Continuar"} styleName="default" iconName="" onPress={handleScheduling}/>
        </BodyContainer>
      </MainView>
    )

}

