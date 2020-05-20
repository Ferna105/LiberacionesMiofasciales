import React, {useState} from 'react';
import { TouchableOpacity, View, Text, ScrollView, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckBox,ListItem } from 'react-native-elements';

import { withTheme } from '@theme/themeProvider';
import database from '@theme/database.js';

import BackgroundContainer3 from '@components/BackgroundContainer3';


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
    <BackgroundContainer3>
      <View {...theme.Container}>
        <View>
          <Text style={{textAlign: 'center',color: "#e5dfdf",fontFamily: 'Raleway-Bold',fontSize: 17, marginBottom: 10}}>¿Qué deporte practica?</Text>
          <Text style={{textAlign: 'center',color: "#e5dfdf",fontFamily: 'Raleway-Regular', fontSize: 17, marginBottom: 10}}>En las rutinas de elongación se tienen en cuenta las cadenas musculares que son mayormente afectadas en cada deporte, favoreciendo el rendimiento del atleta</Text>
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
                  textStyle={{
                    color: 'white',
                    fontWeight: '100',
                  }}
                  onPress={() => handleCheckBox(sport)} 
                />
              )
            })
          }
        </ScrollView>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity
            style={{elevation: 5,backgroundColor: "rgb(65,189,252)",paddingVertical: 20, paddingHorizontal: 50,borderRadius:5,alignItems: "center",marginVertical: 10}}
            onPress={() => handleSports()}
          >
            <Text {...theme.TouchableOpacityText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundContainer3>
  );
}

export default withTheme(StatusSelection);