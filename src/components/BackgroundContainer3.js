import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const BackgroundContainer = ({children, error = false, success = false}) => {

  var colors = ['rgb(7,4,33)','rgb(0,131,217)','rgb(0,131,217)'];
  if(error) {
    colors = ['rgb(7,4,33)','rgb(200,0,0)','rgb(0,131,217)'];
  } else if (success) {
    colors = ['rgb(7,4,33)','rgb(0,200,0)','rgb(0,131,217)'];
  }

	return (
		<>
      <LinearGradient
        colors={colors}
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