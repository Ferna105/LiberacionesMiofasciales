import React, {useState,useEffect} from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	FlatList,
	ScrollView,
	Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withTheme } from '@theme/themeProvider';
import { getRoutineByRid } from '@theme/queries';
import AccessoryExercises from './../AccessoryExercises';
import BackgroundContainer from '@components/BackgroundContainer';

const AddAccessory = ({theme,navigation,route}) => {

	const [chainsModalVisible,setChainsModalVisible] = useState(false);

	return (
		<BackgroundContainer>
			<View {...theme.Container}>
				<Text {...theme.Text}>Genial, tu rutina ya esta armada, desearias agregar algunos ejercicios mas?</Text>
				<View style={{flexDirection: "row"}}>
		      <TouchableOpacity
		      	{...theme.TouchableOpacity}
		      	onPress={() => navigation.navigate('AccessoryExercises',route.params)}
		      >
		      	<Ionicons {...theme.TouchableOpacityIcon} name="md-checkmark" />
		      	<Text {...theme.TouchableOpacityText}>SI</Text>
		      </TouchableOpacity>
		      <TouchableOpacity
		      	{...theme.TouchableOpacity}
		      	onPress={() => navigation.navigate('RoutineInformation',route.params)}
		      >
		      	<Ionicons {...theme.TouchableOpacityIcon} name="ios-close" />
		      	<Text {...theme.TouchableOpacityText}>NO</Text>
		      </TouchableOpacity>
	    	</View>
			</View>
		</BackgroundContainer>
	)
}

export default withTheme(AddAccessory);