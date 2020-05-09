import React from 'react';
import {
	Text,
	View
} from 'react-native';
import { Video } from 'expo-av';

import { withTheme } from '@theme/themeProvider';

const CurrentExercise = ({theme, exercise, style}) => {
	return (
		<View style={style}>
			<View style={{alignItems: 'center', marginBottom: 10, flex: 1}}>
				<Text {...theme.TextHeader}>{exercise.name}</Text>
			</View>
			<View style={{alignItems: 'center', marginBottom: 10, flex: 8}}>
				<Video
				  source={exercise.gif}
				  rate={1.0}
				  volume={1.0}
				  isMuted={false}
				  resizeMode="contain"
				  shouldPlay
				  isLooping
				  style={{ width: 300, height: 250 }}
				/>
			</View>
		</View>
	)
}

export default withTheme(CurrentExercise);