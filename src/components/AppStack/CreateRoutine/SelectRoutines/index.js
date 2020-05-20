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
import BackgroundContainer3 from '@components/BackgroundContainer3';

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
		<BackgroundContainer3>
			<View {...theme.Container}>
		    	<View>
			  		<Text style={{textAlign: 'center',color: "#e5dfdf",fontFamily: 'Raleway-Bold',fontSize: 17, marginBottom: 10}}>Rutinas para usted</Text>
			  		<Text style={{textAlign: 'center',color: "#e5dfdf",fontFamily: 'Raleway-Regular', fontSize: 17, marginBottom: 10}}>Seleccione el nivel y las rutinas que desea realizar</Text>
		  		</View>
		  		<ScrollView style={{textAlign: 'left', width: '100%'}}>
		    	{
		    		routines.map((routine,key) => {
		    			var disabled = routine.type == 'general' ? true : false;
		    			/*(routine.exercises.length) * 20 + (routine.exercises.length ) * 10*/
	    				return (
		    				<View key={key} style={{flexDirection: 'row'}}>
		    					<View style={{flex:3}}>
			    					<CheckBox 
			    						{...theme.CheckBox} 
							            textStyle={{
						                    color: 'white',
						                    fontWeight: '100',
						                  }}
							            checked={routine.selected}
							            disabled={disabled} 
							            title={routine.name}
							            onPress={() => updateSelectedRoutines(key)}
							         />
					        	</View>
					        	<View style={{flex: 2}}>
					          	<Picker
								        selectedValue={routine.level}
								        onValueChange={(itemValue, itemIndex) => updateLevelRoutines(key,itemValue)}
								        {...theme.Picker}
								      >
							        <Picker.Item label="Nivel 1" value="1" />
							        <Picker.Item label="Nivel 2'" value="2" />
							        <Picker.Item label="Nivel 3" value="3" />
							      </Picker>
							    </View>
		    				</View>
		    			)
		    		})
		    	}
	    		</ScrollView>
		    	<TouchableOpacity style={{elevation: 5,backgroundColor: "rgb(65,189,252)",paddingVertical: 20, paddingHorizontal: 50,borderRadius:5,alignItems: "center",marginVertical: 10}}
		    	 onPress={() => navigation.navigate('AddAccessory',{routines})} >
		    		<Text {...theme.TouchableOpacityText}>Siguiente</Text>
		    	</TouchableOpacity>
		    </View>
	   	</BackgroundContainer3>
	)
}

export default withTheme(LevelSelection);