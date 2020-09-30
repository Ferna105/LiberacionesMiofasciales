import * as React from 'react';

import {
	View,
	Text,
	ActivityIndicator
} from 'react-native';

import { Image } from 'react-native';
import { withTheme } from '@theme/themeProvider';
import BackgroundContainer3 from '@components/BackgroundContainer3';

const SplashScreen = ({ theme }) => {
	return (
		<BackgroundContainer3 hasMarginTop={false}>
			<View style={{ padding: 30, flex: 1 }}>
				<View style={{ alignItems: 'center', justifyContent: 'center', flex: 2 }}>
					<Image style={{ resizeMode: 'stretch', width: 150, height: 150 }} source={require('@assets/images/logo.png')} />
					<View style={{ marginTop: 40 }}>
						<ActivityIndicator {...theme.ActivityIndicator} />
					</View>
				</View>
			</View>

		</BackgroundContainer3>
	)
}

export default withTheme(SplashScreen);