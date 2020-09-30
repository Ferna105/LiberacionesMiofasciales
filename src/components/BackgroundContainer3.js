import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, View } from 'react-native';
//import { useHeaderHeight  } from '@react-navigation/stack';




const BackgroundContainer = ({ children, error = false, success = false, hasMarginTop = true }) => {
  
  //const headerHeight = useHeaderHeight();

  var colors = ['rgb(7,4,33)', 'rgb(0,131,217)', 'rgb(0,131,217)'];
  if (error) {
    colors = ['rgb(7,4,33)', 'rgb(200,0,0)', 'rgb(0,131,217)'];
  } else if (success) {
    colors = ['rgb(7,4,33)', 'rgb(0,200,0)', 'rgb(0,131,217)'];
  }

  return (
    <>
      <LinearGradient
        colors={colors}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: -1 }}
        style={{
          flex: 1,
        }}
      >
        <View style={[hasMarginTop && {marginTop: 80}, {flex: 1}]}>
          {children}
        </View>
      </LinearGradient>
    </>
  )
}

export default BackgroundContainer;