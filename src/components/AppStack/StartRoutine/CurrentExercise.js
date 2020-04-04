import React from 'react';
import {
	Text,
	Image,
	View
} from 'react-native';
import { withTheme } from '@theme/themeProvider';

const CurrentExercise = ({theme, exercise, style}) => {
	return (
		<View style={style}>
			<View style={{alignItems: 'center', marginBottom: 10, flex: 1}}>
				<Text {...theme.TextHeader}>{exercise.data.name}</Text>
			</View>
			<View style={{alignItems: 'center', marginBottom: 10, flex: 8}}>
				<Image source={{uri: exercise.data.gif }} style={{width: 300, height: 250,resizeMode: 'cover'}}/>
			</View>
		</View>
	)
}

export default withTheme(CurrentExercise);