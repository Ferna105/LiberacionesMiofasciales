import React, {useState} from 'react';
import { TouchableOpacity, View, Text, ScrollView, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckBox,ListItem } from 'react-native-elements';

import { withTheme } from '@theme/themeProvider';
import database from '@theme/database.js';

import BackgroundContainer from '@components/BackgroundContainer';


const StatusSelection = ({ navigation, theme, route }) => {

  var sportsInitialState = database.tables.sports.map(obj=> ({ ...obj, checked: false }))
  const [sports, setSport] = useState(sportsInitialState);

  const handleCheckBox = (sport) => {
    var newSportsState = sports.map((obj) => {
      if(obj.sid == sport.sid){
        obj.checked = !obj.checked;
      }
      return obj;
    });
    setSport(newSportsState);
  }

  const handleSports = () => {
    var selectedSports = sports.filter(obj => {
      return obj.checked == true;
    })

    if(selectedSports.length == 0){
      Alert.alert(
        'Error',
        'Seleccione un deporte antes de continuar',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }
    else{
      route.params.sports = selectedSports;
      navigation.navigate('SuccessScreen',route.params);
    }
  }

  return (
    <BackgroundContainer>
      <View {...theme.Container}>
        <View>
          <Text {...theme.TextHeader}>¿Qué deporte practica?</Text>
          <Text {...theme.Text}>En las rutinas de elongación se tienen en cuenta las cadenas musculares que son mayormente afectadas en cada deporte, favoreciendo el rendimiento del atleta</Text>
        </View>
        <ScrollView style={{textAlign: 'left', width: '100%'}}>
          {
            sports.map((sport,key) => {
              return (
                <CheckBox 
                  key={key}
                  {...theme.CheckBox} 
                  checked={JSON.parse(sport.checked)} 
                  title={sport.name}
                  onPress={() => handleCheckBox(sport)} 
                />
              )
            })
          }
        </ScrollView>
        <TouchableOpacity
          {...theme.TouchableOpacity}
          onPress={() => handleSports()}
        >
          <MaterialIcons {...theme.TouchableOpacityIcon} name="navigate-next" />
          <Text {...theme.TouchableOpacityText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </BackgroundContainer>
  );
}

export default withTheme(StatusSelection);