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
import BackgroundContainer3 from '@components/BackgroundContainer3';

const AddAccessory = ({theme,navigation,route}) => {

	const [chainsModalVisible,setChainsModalVisible] = useState(false);

	return (
		<BackgroundContainer3>
			<View {...theme.Container}>
				<View>
		  		<Text style={{textAlign: 'center',color: "#e5dfdf",fontFamily: 'Raleway-Bold',fontSize: 17, marginBottom: 10}}>Genial, tu rutina ya esta armada</Text>
		  		<Text style={{textAlign: 'center',color: "#e5dfdf",fontFamily: 'Raleway-Regular', fontSize: 17, marginBottom: 10}}>
		  			Si sentís molestias musculares podés agregar ejercicios ¿Desearías adicionar algunos más?
		  		</Text>
	  		</View>

				<View style={{flexDirection: "row"}}>

		      <TouchableOpacity
		      	style={{flex: 1, elevation: 5,backgroundColor: "rgb(65,189,252)",padding: 10,borderRadius:5,alignItems: "center",margin: 10, marginLeft: 0}}
      			activeOpacity={.5}
		      	onPress={() => navigation.navigate('AccessoryExercises',route.params)}
		      >
		      	<Ionicons {...theme.TouchableOpacityIcon} name="md-checkmark" />
		      	<Text {...theme.TouchableOpacityText}>SI</Text>
		      </TouchableOpacity>
		      <TouchableOpacity
		      	style={{flex: 1, elevation: 5,backgroundColor: "rgb(65,189,252)",padding: 10,borderRadius:5,alignItems: "center",margin: 10, marginLeft: 0}}
      			activeOpacity={.5}
		      	onPress={() => navigation.navigate('RoutineInformation',route.params)}
		      >
		      	<Ionicons {...theme.TouchableOpacityIcon} name="ios-close" />
		      	<Text {...theme.TouchableOpacityText}>NO</Text>
		      </TouchableOpacity>
	    	</View>
			</View>
		</BackgroundContainer3>
	)
}

export default withTheme(AddAccessory);