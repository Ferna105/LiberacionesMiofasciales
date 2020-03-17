import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

import { withTheme } from '@theme/themeProvider';


const StatusSelection = ({ navigation, theme }) => {

  return (
    <View {...theme.Container}>
      <View>
        <Text {...theme.TextHeader}>¿Qué deporte practica?</Text>
        <Text {...theme.Text}>En las rutinas de elongación se tienen en cuenta las cadenas musculares que son mayormente afectadas en cada deporte, favoreciendo el rendimiento del atleta</Text>
        <CheckBox {...theme.CheckBox} checked={true} title="Fútbol" />
        <CheckBox {...theme.CheckBox} checked={true} title="Hockey" />
        <CheckBox {...theme.CheckBox} checked={true} title="Básquet" />
      </View>
      <TouchableOpacity
        {...theme.TouchableOpacity}
        onPress={() => navigation.navigate('SuccessScreen',{sports: []})}
      >
        <MaterialIcons {...theme.TouchableOpacityIcon} name="navigate-next" />
        <Text {...theme.TouchableOpacityText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
}

export default withTheme(StatusSelection);