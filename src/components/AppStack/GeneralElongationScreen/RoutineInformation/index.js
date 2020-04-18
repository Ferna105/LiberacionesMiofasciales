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
import { getRoutineByRid } from '@theme/queries';
import { Video } from 'expo-av';
import AddAccessoryExercises from '@components/AppStack/AddAccessoryExercises';

const RoutineInformation = ({theme,navigation,route}) => {


	const [routine,setRoutine] = useState({exercises: []});
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedExerciseModal, setSelectedExerciseModal] = useState({});
	const [chainsModalVisible,setChainsModalVisible] = useState(false);

	useEffect(() => {
		var {rid} = route.params;
		var r = getRoutineByRid(rid);
		setRoutine(r);
	},[]);

	const renderItemTitle = (exercise) => {
		return (exercise.data.name + " " + exercise.replays);
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
						<Text {...theme.Text}>{exercise.data.name}</Text> 
					</View>
					<View style={{flex: 1, alignItems: 'flex-end',justifyContent: 'center'}}>
							<Ionicons size={20} name="ios-search"/>
					</View>
				</View>
			</TouchableOpacity>
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
		            			<>
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
								</>
		            		)
		            	}
					</View>

		            <TouchableOpacity
		            	{...theme.TouchableOpacity}
						onPress={() => {
							setModalVisible(!modalVisible);
						}}>
		              	<Text {...theme.TouchableOpacityText}>Cerrar</Text>
		            </TouchableOpacity>
		        </View>
      		</Modal>

      		<Modal 
      			animationType="slide"
		        transparent={false}
		        visible={chainsModalVisible}
		        onRequestClose={() => {
		          Alert.alert('Modal has been closed.');
		        }}>
      			<AddAccessoryExercises routine={routine}/>
      			<TouchableOpacity
	            	{...theme.TouchableOpacity}
					onPress={() => {
						setChainsModalVisible(!chainsModalVisible);
					}}>
	              	<Text {...theme.TouchableOpacityText}>Cerrar</Text>
	            </TouchableOpacity>
      		</Modal>

	  		<View>
	  			<TouchableOpacity {...theme.TouchableOpacity} onPress={() => setChainsModalVisible(true)}>
					<Text {...theme.TouchableOpacityText}>Ejercicios accesorios</Text>
				</TouchableOpacity>
	  			<TouchableOpacity {...theme.TouchableOpacity} onPress={() => navigation.navigate('StartRoutine',{routine: routine})}>
					<Text {...theme.TouchableOpacityText}>Comenzar</Text>
				</TouchableOpacity>
	  		</View>
	    </View>
	)
}

export default withTheme(RoutineInformation);