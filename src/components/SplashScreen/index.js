import * as React from 'react';

import {
	View,
	Text,
	ActivityIndicator
} from 'react-native';

import { withTheme } from '@theme/themeProvider';

const SplashScreen = ({theme}) => {
	return (
		<View {...theme.Container}>
			<ActivityIndicator {...theme.ActivityIndicator}/>
		</View>
	)
}

export default withTheme(SplashScreen);