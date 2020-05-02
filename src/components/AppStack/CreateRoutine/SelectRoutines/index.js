import React, {useState,useEffect} from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	Picker
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withTheme } from '@theme/themeProvider';
import { getUserRoutines, getRoutinesByType } from '@theme/queries';
import { CheckBox } from 'react-native-elements';
import { AuthContext } from '@components/context';
import { AsyncStorage } from 'react-native';

const LevelSelection = ({navigation, theme}) => {
	
	const { getProfile } = React.useContext(AuthContext);
	const [routines,setRoutines] = useState([]);

	useEffect(() => {
		AsyncStorage.getItem('@profile').then(asyncprofile => {
          	var profile = JSON.parse(asyncprofile);
			var routines = getUserRoutines(profile);
			routines.map((routine,key) => {
				if(routine.type == "general") {routine.selected = true}
				else {routine.selected = false};
				routine.level = 1;
			})
			setRoutines(routines);
        });

	},[]);

	const updateSelectedRoutines = (key) => {
		let newStateRoutines = [...routines];
		newStateRoutines[key].selected = !routines[key].selected;
		setRoutines(newStateRoutines);
	}

	const updateLevelRoutines = (key,level) => {
		let newStateRoutines = [...routines];
		newStateRoutines[key].level = level; 
		setRoutines(newStateRoutines);
	}

	return (
		<View {...theme.Container}>
	    	<View>
		  		<Text {...theme.TextHeader}>Rutinas para usted</Text>
		  		<Text {...theme.Text}>Seleccione el nivel y las rutinas que desea realizar</Text>
	  		</View>
	  		<ScrollView style={{textAlign: 'left', width: '100%'}}>
	    	{
	    		routines.map((routine,key) => {
	    			var disabled = routine.type == 'general' ? true : false;
    				return (
	    				<View key={key} style={{flexDirection: 'row'}}>
	    					<View style={{flex:1}}>
		    					<CheckBox 
				            {...theme.CheckBox} 
				            checked={routine.selected}
				            disabled={disabled} 
				            title={routine.name}
				            onPress={() => updateSelectedRoutines(key)}
				          />
				        </View>
				        <View style={{flex: 1}}>
				          <Picker
						        selectedValue={routine.level}
						        style={{ height: 50}}
						        onValueChange={(itemValue, itemIndex) => updateLevelRoutines(key,itemValue)}
						      >
						        <Picker.Item label="Nivel 1" value="1" />
						        <Picker.Item label="Nivel 2" value="2" />
						        <Picker.Item label="Nivel 3" value="3" />
						      </Picker>
						    </View>
	    				</View>
	    			)
	    		})
	    	}
    	</ScrollView>
    	<TouchableOpacity onPress={() => navigation.navigate('AddAccessory',{routines})} >
    		<Text>Siguiente</Text>
    	</TouchableOpacity>
    </View>
	)
}

export default withTheme(LevelSelection);