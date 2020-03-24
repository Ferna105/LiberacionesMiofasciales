import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { withTheme } from '@theme/themeProvider';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '@components/context';

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
    <View {...theme.Container}>
      <View>
        <Text {...theme.TextHeader}>¡Perfil completado!</Text>
        <Text {...theme.Text}>Sexo: {route.params.gender == 'male' ? "Hombre" : "Mujer"}</Text>
        <View>
          {
            route.params.status ? (
              <View>
                <Text {...theme.Text}>Deportes:</Text>
                  {
                    route.params.sports.map((sport,key) => {
                      return <Text key={key} {...theme.Text}>- {sport.name}</Text>
                    })
                  }
              </View>
            ) : null
          }
        </View>
      </View>
      <View>
        <Ionicons size={50} name="md-checkmark" />
      </View>
      <View style={{flexDirection: "row"}}>
        <TouchableOpacity
          {...theme.TouchableOpacity}
          onPress={() => handleStart()}
        >
          <Text {...theme.TouchableOpacityText}>Comenzar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default withTheme(SuccessScreen);