import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { withTheme } from '@theme/themeProvider';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '@components/context';
import BackgroundContainer3 from '@components/BackgroundContainer3';

const SuccessScreen = ({ navigation, theme, route }) => {

  const { signIn } = React.useContext(AuthContext);

  const handleStart = async () => {
    try {
      signIn(route.params);
    } catch (error) {
      alert("No se pudieron guardar las configuraciones del perfil");
    }
  }

  return (
    <BackgroundContainer3>
      <View {...theme.Container}>
        <View>
          <Text style={{textAlign: 'center',color: "#e5dfdf",fontFamily: 'Raleway-Bold',fontSize: 21, marginBottom: 10}}>¡Perfil completado!</Text>
          <View>
            {
              route.params.status ? (
                <View>
                    {
                      route.params.sports.map((sport,key) => {
                        return (
                          <Text key={key} style={{textAlign: 'left',color: "#e5dfdf",fontFamily: 'Raleway-Regular', fontSize: 17, marginBottom: 10}}>
                            - {sport.name}
                          </Text>)
                      })
                    }
                </View>
              ) : null
            }
          </View>
        </View>
        <View>
          <Ionicons size={70} style={{color: "white"}} name="md-checkmark" />
        </View>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity
            style={{elevation: 5,backgroundColor: "rgb(65,189,252)",paddingVertical: 20, paddingHorizontal: 50,borderRadius:5,alignItems: "center",marginVertical: 10}}
            onPress={() => handleStart()}
          >
            <Text {...theme.TouchableOpacityText}>Comenzar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundContainer3>
  );
}

export default withTheme(SuccessScreen);