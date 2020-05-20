import React from 'react';
import {
	Text,
	View,
	Dimensions
} from 'react-native';
import { Video } from 'expo-av';

import { withTheme } from '@theme/themeProvider';
const windowWidth = Dimensions.get('window').width;

const CurrentExercise = ({theme, exercise}) => {
	return (
		<View >
			<View style={{marginBottom: 10}}>
				<Video
				  source={exercise.gif}
				  rate={1.0}
				  volume={1.0}
				  isMuted={false}
				  resizeMode="contain"
				  shouldPlay
				  isLooping
				  style={{ width: windowWidth, height: 450 }}
				/>
			</View>
			<View style={{marginBottom: 10}}>
				<Text {...theme.TextHeader}>{exercise.name}</Text>
			</View>
		</View>
	)
}

export default withTheme(CurrentExercise);