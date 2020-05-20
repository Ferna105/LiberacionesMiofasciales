import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const BackgroundContainer = ({children}) => {
	return (
		<>
      <LinearGradient
        colors={['rgb(7,4,33)','rgb(0,131,217)','rgb(0,131,217)']}
        start={{ x: 0.5, y: 1 }}
				end={{ x: 0.5, y: -1 }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: -80,
          height: windowHeight,
          width: windowWidth,
        }}
      />
      {children}
		</>
	)
}

export default BackgroundContainer;