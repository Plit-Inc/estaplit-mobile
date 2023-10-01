import React from 'react';
import { ImageBackground, Image, View } from 'react-native';
import { Clock, CalendarBlank } from 'phosphor-react-native';
import {
  Address,
  ConfirmationTitle,
  Content,
  ReservationCard,
  SafeView,
} from './style';
import {
  colors,
  imagesConfig,
  successScreenConfig,
} from '../../constants/index';
import Title from '../../components/utils/Title';
import MainButton from '../../components/utils/MainButton';
import Info from '../../components/utils/Info';

function SuccessScreen({ navigation }) {
  return (
    <SafeView>
      <ImageBackground
        source={imagesConfig.LinearBackground}
        style={{ flex: 1 }}
      >
        <Content>
          <Image
            source={imagesConfig.Calendar}
            style={{
              width: 164,
              height: 164,
            }}
          />
          <ConfirmationTitle>
            Tudo certo! Sua reserva foi reagendada com sucesso e em breve será
            confirmada!
          </ConfirmationTitle>
          <ReservationCard>
            <View
              style={{
                padding: 16,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 9,
                }}
              >
                <Info
                  text="26 Jan. 2023"
                  textColor={successScreenConfig.Utils.TextColor}
                  IconComponent={() => (
                    <CalendarBlank
                      size={successScreenConfig.Utils.IconSize}
                      color={successScreenConfig.Utils.TextColor}
                    />
                  )}
                />
                <Info
                  text="11:00"
                  textColor={successScreenConfig.Utils.TextColor}
                  IconComponent={() => (
                    <Clock
                      size={successScreenConfig.Utils.IconSize}
                      color={successScreenConfig.Utils.TextColor}
                    />
                  )}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  paddingTop: 16,
                  gap: 8,
                }}
              >
                <Title
                  color={colors.gray[100]}
                  text="Estapar Estacionamentos"
                />
                <Address>
                  Av. Jorn. Aníbal Fernandes, s/n - Cidade Universitária, Recife
                  - PE, 50740-560
                </Address>
              </View>
            </View>
            <MainButton
              text="Ver reserva"
              styleName="white"
              callback={() => navigation.navigate('')}
            />
          </ReservationCard>
        </Content>
      </ImageBackground>
    </SafeView>
  );
}

export default SuccessScreen;
