import * as React from 'react';

import {
	View,
	Text
} from 'react-native';

import { withTheme } from '@theme/themeProvider';

const SplashScreen = ({theme}) => {
	return (
		<View {...theme.Container}>
			<Text >Loading...</Text>
		</View>
	)
}

export default withTheme(SplashScreen);