import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const BackgroundContainer = ({children}) => {
	return (
		<>
			<LinearGradient
        colors={['rgb(35,24,188)','rgb(33,23,164)', 'rgb(7,4,33)']}
        start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 1 }}
        style={{
        	borderWidth: 2,
        	borderColor: 'rgb(5,2,109)',
          position: 'absolute',
          left: -10,
          right: 0,
          top: -20,
          height: windowHeight / 4,
          width: windowWidth * 1.1,
          transform: [{ rotate: '-5deg'}]
        }}
      />
      <LinearGradient
        colors={['rgb(7,4,33)','rgb(33,23,164)','rgb(35,24,188)']}
        start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 1 }}
        style={{
        	borderWidth: 2,
        	borderColor: 'rgb(5,2,109)',
          position: 'absolute',
          left: -10,
          right: 0,
          top: windowHeight / 6,
          height: windowHeight / 4,
          width: windowWidth * 1.1,
          transform: [{ rotate: '5deg'}]
        }}
      />
      <LinearGradient
        colors={['rgb(35,24,188)','rgb(33,23,164)', 'rgb(7,4,33)']}
        start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 1 }}
        style={{
        	borderWidth: 2,
        	borderColor: 'rgb(5,2,109)',
          position: 'absolute',
          left: -10,
          right: 0,
          top: (windowHeight / 6) * 2,
          height: windowHeight / 4,
          width: windowWidth * 1.1,
          transform: [{ rotate: '-5deg'}]
        }}
      />
      <LinearGradient
        colors={['rgb(7,4,33)','rgb(33,23,164)','rgb(35,24,188)']}
        start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 1 }}
        style={{
        	borderWidth: 2,
        	borderColor: 'rgb(5,2,109)',
          position: 'absolute',
          left: -10,
          right: 0,
          top: (windowHeight / 6) * 3,
          height: windowHeight / 4,
          width: windowWidth * 1.1,
          transform: [{ rotate: '5deg'}]
        }}
      />
      <LinearGradient
        colors={['rgb(35,24,188)','rgb(33,23,164)', 'rgb(7,4,33)']}
        start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 1 }}
        style={{
        	borderWidth: 2,
        	borderColor: 'rgb(5,2,109)',
          position: 'absolute',
          left: -10,
          right: 0,
          top: (windowHeight / 6) * 4,
          height: windowHeight / 4,
          width: windowWidth * 1.1,
          transform: [{ rotate: '-5deg'}]
        }}
      />
      <LinearGradient
        colors={['rgb(7,4,33)','rgb(33,23,164)','rgb(35,24,188)']}
        start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 1 }}
        style={{
        	borderWidth: 2,
        	borderColor: 'rgb(5,2,109)',
          position: 'absolute',
          left: -10,
          right: 0,
          top: (windowHeight / 6) * 5,
          height: windowHeight / 4,
          width: windowWidth * 1.1,
          transform: [{ rotate: '5deg'}]
        }}
      />
      {children}
		</>
	)
}

export default BackgroundContainer;