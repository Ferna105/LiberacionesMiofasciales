import * as React from 'react';
import { Button, View } from 'react-native';

export default function GeneralElongationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('HomeScreen')}
        title="Go to notifications"
      />
    </View>
  );
}