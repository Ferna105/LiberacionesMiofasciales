import React from 'react';
import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withTheme } from '@theme/themeProvider';
import BackgroundContainer from '@components/BackgroundContainer';

const Congratulations = ({theme, navigation}) => {

	return (
		<BackgroundContainer>
			<View {...theme.Container}>
				<Text {...theme.TextHeader}>Haz finalizado la rutina con éxito</Text>
				<Ionicons name="md-checkmark" size={70} />
				<TouchableOpacity {...theme.TouchableOpacity} onPress={() => navigation.navigate("HomeScreen")}>
					<Text {...theme.TouchableOpacityText}>Volver al la sección principal</Text>
				</TouchableOpacity>
			</View>
		</BackgroundContainer>
	)
}

export default withTheme(Congratulations);