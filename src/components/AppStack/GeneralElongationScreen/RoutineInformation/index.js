import React, {useState,useEffect} from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	FlatList,
	ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withTheme } from '@theme/themeProvider';
import { getRoutineByRid } from '@theme/queries';

const RoutineInformation = ({theme,navigation,route}) => {


	const [routine,setRoutine] = useState({exercises: []});

	useEffect(() => {
		var {rid} = route.params;
		var r = getRoutineByRid(rid);
		setRoutine(r);
	},[]);

	const renderItemTitle = (exercise) => {
		return (exercise.data.name + " " + exercise.replays);
	}

	const renderExercisesList = (exercise,key) => {
		return (
			<View {...theme.FlatListItem} key={key}>
				<View style={{flex: 2}}>
					<Text {...theme.Text}>{exercise.data.name}</Text> 
				</View>
				<View style={{flex: 1, alignItems: 'flex-end',justifyContent: 'center'}}>
					<Ionicons size={20} name="ios-search"/>
				</View>
			</View>
		)
	}


	return (
		<View {...theme.Container}>
	    	<View>
		  		<Text {...theme.TextHeader}>Listado de ejercicios</Text>
		  		<Text {...theme.Text}>
		  			A continuación se muestran todos los ejercicios de la rutiina. Si desconoce como es cada uno puede ver el video de explicación.
		  		</Text>
	  		</View>

	  		{
	  			routine.exercises.length ? (
		  			<FlatList
		  				style={{marginVertical: 10, width: "100%"}}
			          	data={routine.exercises}
			          	renderItem={({item,index}) => renderExercisesList(item,index)}
			          	keyExtractor={(item,index) => index.toString()}
			        />
	  			) : null
	  		}

	  		<View>
	  			<TouchableOpacity {...theme.TouchableOpacity} onPress={() => navigation.navigate('StartRoutine',{routine: routine})}>
					<Text {...theme.TouchableOpacityText}>Comenzar</Text>
				</TouchableOpacity>
	  		</View>
	    </View>
	)
}

export default withTheme(RoutineInformation);