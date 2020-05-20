import React, {useState,useEffect} from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	FlatList,
	ScrollView,
	Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withTheme } from '@theme/themeProvider';
import { getGeneratedRoutine } from '@theme/queries';
import { Video } from 'expo-av';
import BackgroundContainer3 from '@components/BackgroundContainer3';

const RoutineInformation = ({theme,navigation,route}) => {


	const [routine,setRoutine] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedExerciseModal, setSelectedExerciseModal] = useState({});

	useEffect(() => {
		var generatedRoutine = getGeneratedRoutine(route.params);
		setRoutine(generatedRoutine);
	},[]);

	const renderItemTitle = (exercise) => {
		return (exercise.name);
	}

	const openExerciseInModal = (exercise) => {
		setSelectedExerciseModal(exercise);
		setModalVisible(true);
	}

	const renderExercisesList = (exercise,key) => {
		return (
			<TouchableOpacity onPress={() => openExerciseInModal(exercise)}>
				<View {...theme.FlatListItem} key={key}>
					<View style={{flex: 2}}>
						<Text {...theme.Text}>{exercise.name}</Text> 
					</View>
					<View style={{flex: 1, alignItems: 'flex-end',justifyContent: 'center'}}>
						<Ionicons size={20} color="rgb(65,189,252)" name="ios-search"/>
					</View>
				</View>
			</TouchableOpacity>
		)
	}

	return (
		<BackgroundContainer3>
			<View {...theme.Container}>
	    	<View>
		  		<Text style={{textAlign: 'center',color: "#e5dfdf",fontFamily: 'Raleway-Bold',fontSize: 17, marginBottom: 10}}>Listado de ejercicios</Text>
		  		<Text style={{textAlign: 'center',color: "#e5dfdf",fontFamily: 'Raleway-Regular', fontSize: 17, marginBottom: 10}}>
		  			A continuación se muestran todos los ejercicios de la rutiina. Si desconoce como es cada uno puede ver el video de explicación.
		  		</Text>
	  		</View>
	  		{
	  			routine.length ? (
		  			<FlatList
		  				style={{marginVertical: 10, width: "100%"}}
			          	data={routine}
			          	renderItem={({item,index}) => renderExercisesList(item,index)}
			          	keyExtractor={(item,index) => index.toString()}
			        />
	  			) : null
	  		}
	  		<Modal
	        animationType="slide"
	        transparent={false}
	        visible={modalVisible}
	        onRequestClose={() => {
	          Alert.alert('Modal has been closed.');
	        }}>
	        <View style={{ marginTop: 22 }}>
	          <View style={{alignItems: 'center', marginBottom: 10}}>
	          	{
	          		selectedExerciseModal.data && (
	          			<View>
	          				<View style={{marginBottom: 10}}>
	          					<Text {...theme.TextHeader}>{selectedExerciseModal.data.name}</Text>
	          				</View>
										<Video
										  source={selectedExerciseModal.data.gif}
										  rate={1.0}
										  volume={1.0}
										  isMuted={false}
										  resizeMode="contain"
										  shouldPlay
										  isLooping
										  style={{ width: 300, height: 250 }}
										/>
									</View>
	          		)
	          	}
						</View>
		        <TouchableOpacity {...theme.TouchableOpacity} onPress={() => {setModalVisible(!modalVisible);}}>
		        	<Text {...theme.TouchableOpacityText}>Cerrar</Text>
		        </TouchableOpacity>
	        </View>
	  		</Modal>

	  		<View>
	  			<TouchableOpacity style={{elevation: 5,backgroundColor: "rgb(65,189,252)",paddingVertical: 20, paddingHorizontal: 50,borderRadius:5,alignItems: "center",marginVertical: 10}}
		    	 onPress={() => navigation.navigate('StartRoutine',{routine})} >
		    		<Text {...theme.TouchableOpacityText}>Comenzar</Text>
		    	</TouchableOpacity>
	  		</View>
	    </View>
	  </BackgroundContainer3>
	)
}

export default withTheme(RoutineInformation);