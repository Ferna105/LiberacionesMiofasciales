import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const BackgroundContainer = ({children}) => {
	return (
		<>
      <LinearGradient
        colors={['rgb(7,4,33)','rgb(33,23,164)','rgb(35,24,188)']}
        start={{ x: 0.5, y: 1 }}
				end={{ x: 0.5, y: -1 }}
        style={{
          position: 'absolute',
          left: -80,
          right: 0,
          top: -100,
          height: windowHeight * 2,
          width: windowWidth * 2,
          transform: [{ rotate: '20deg'}]
        }}
      />
      <LinearGradient
        colors={['rgb(7,4,33)','rgb(33,23,164)','rgb(35,24,188)']}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: -1 }}
        style={{
          position: 'absolute',
          left: 100,
          right: 0,
          top: -150,
          height: windowHeight * 2,
          width: windowWidth,
          transform: [{ rotate: '-20deg'}]
        }}
      />
      {children}
		</>
	)
}

export default BackgroundContainer;