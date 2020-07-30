import React from 'react';
import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withTheme } from '@theme/themeProvider';
import BackgroundContainer3 from '@components/BackgroundContainer3';

const Congratulations = ({theme, navigation}) => {

	return (
		<BackgroundContainer3>
			<View {...theme.Container}>
				<Text {...theme.TextHeader}>¡Finalizaste la rutina con éxito!</Text>
				<Ionicons name="md-checkmark" size={70} color="white"/>
				<TouchableOpacity
					style={{ elevation: 5, backgroundColor: "rgb(65,189,252)", alignItems: 'center', paddingVertical: 20, paddingHorizontal: 10, borderRadius: 5, margin: 10 }}
					onPress={() => navigation.navigate("HomeScreen")}>
					<Text {...theme.TouchableOpacityText}>VOLVER AL PRINCIPIO</Text>
				</TouchableOpacity>
			</View>
		</BackgroundContainer3>
	)
}

export default withTheme(Congratulations);