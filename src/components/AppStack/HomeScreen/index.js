import React, {useEffect} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AuthContext } from '@components/context';

export default function HomeScreen({ navigation }) {

	const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => {signOut()}}>
      	<Text>asd</Text>
      </TouchableOpacity>
    </View>
  );
}