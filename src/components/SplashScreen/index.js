import * as React from 'react';

import {
	View,
	Text,
	ActivityIndicator
} from 'react-native';

import { Image } from 'react-native';
import { withTheme } from '@theme/themeProvider';
import BackgroundContainer3 from '@components/BackgroundContainer3';

const SplashScreen = ({theme}) => {
	return (
		<View style={{marginTop: 80, flex: 1}}>
			<BackgroundContainer3>
				<View style={{ padding: 30, flex: 1 }}>
					<View style={{ alignItems: 'center', justifyContent: 'center', flex: 2 }}>
						<Image style={{ resizeMode: 'stretch', width: 150, height: 150 }} source={require('@assets/images/splash.png')} />
						<View style={{marginTop: 40}}>
							<ActivityIndicator {...theme.ActivityIndicator}/>
						</View>
					</View>
				</View>
			</BackgroundContainer3>

		</View>
	)
}

export default withTheme(SplashScreen);