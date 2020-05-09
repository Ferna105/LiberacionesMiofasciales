import * as React from 'react';
import { Button, View } from 'react-native';
import BackgroundContainer from '@components/BackgroundContainer';

export default function ConfigurationScreen({ navigation }) {
  return (
  	<BackgroundContainer>
	    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	      <Button
	        onPress={() => navigation.navigate('HomeScreen')}
	        title="Go to notifications"
	      />
	    </View>
	</BackgroundContainer>
  );
}