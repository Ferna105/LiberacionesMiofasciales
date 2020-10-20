import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	FlatList,
	ScrollView,
	Modal,
	Alert,
	Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withTheme } from '@theme/themeProvider';
import { getShowableExercises } from '@theme/queries';
import BackgroundContainer3 from '@components/BackgroundContainer3';
const windowWidth = Dimensions.get('window').width;

const Explore = ({ theme, navigation }) => {


	const [exercises, setExecises] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedExerciseModal, setSelectedExerciseModal] = useState({});

	useEffect(() => {
		var exercises = getShowableExercises();
		setExecises(exercises);
	}, []);

	const openExerciseInModal = (exercise) => {
		setSelectedExerciseModal(exercise);
		setModalVisible(true);
	}

	const renderExercisesList = (exercise, key) => {
		return (
			<TouchableOpacity onPress={() => openExerciseInModal(exercise)}>
				<View {...theme.FlatListItem} key={key}>
					<View style={{ flex: 2 }}>
						<Text {...theme.Text}>{exercise.showableName}</Text>
					</View>
					<View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
						<Ionicons size={20} color="rgb(65,189,252)" name="ios-search" />
					</View>
				</View>
			</TouchableOpacity>
		)
	}

	return (
		<BackgroundContainer3>
			<View {...theme.Container}>
				<View>
					<Text style={{ textAlign: 'center', color: "#e5dfdf", fontFamily: 'Raleway-Bold', fontSize: 17, marginBottom: 10 }}>Listado de ejercicios</Text>
					<Text style={{ textAlign: 'center', color: "#e5dfdf", fontFamily: 'Raleway-Regular', fontSize: 17, marginBottom: 10 }}>
						A continuación se muestran todos los ejercicios de la aplicación.
		  		</Text>
				</View>
				{
					exercises.length ? (
						<FlatList
							style={{ marginVertical: 10, width: "100%" }}
							data={exercises}
							renderItem={({ item, index }) => renderExercisesList(item, index)}
							keyExtractor={(item, index) => index.toString()}
						/>
					) : null
				}
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						setModalVisible(false)
					}}>
					<BackgroundContainer3 hasMarginTop={false}>
					{
							selectedExerciseModal && (
								<View style={{justifyContent: 'space-between',flex:1}}>
									<View style={{flex: 2}}>
										<View style={{ padding: 20}}>
											<Text style={{ color: "#e5dfdf", fontFamily: 'Raleway-Bold', fontSize: 21 }}>{selectedExerciseModal.showableName}</Text>
										</View>
										<View style={{flex: 1, backgroundColor: 'black'}} >
											<Image 
												style={{flex: 1,width: null,height: null,resizeMode: 'contain'}}
												source={selectedExerciseModal.gif}
											/>
										</View>
									</View>
									<View style={{flex: 1,  padding: 20}}>
										<ScrollView style={{marginBottom: 10}} >
											<Text style={{ textAlign: 'center', color: "#e5dfdf", fontFamily: 'Raleway-Regular', fontSize: 17 }}>
												{selectedExerciseModal.description}
											</Text>
										</ScrollView>
										<View >
											<TouchableOpacity 
												activeOpacity={1} 
												style={{ elevation: 5, backgroundColor: "rgb(65,189,252)", paddingVertical: 20, paddingHorizontal: 50, borderRadius: 5, alignItems: "center" }} 
												onPress={() => { setModalVisible(!modalVisible); }}>
												<Text {...theme.TouchableOpacityText}>Cerrar</Text>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							)
						}
					</BackgroundContainer3>
				</Modal>

				<View style={{width: "100%"}}>
					<TouchableOpacity style={{ elevation: 5, backgroundColor: "rgb(65,189,252)", paddingVertical: 20, paddingHorizontal: 50, borderRadius: 5, alignItems: "center", marginVertical: 10 }}
						onPress={() => navigation.goBack()} >
						<Text {...theme.TouchableOpacityText}>VOLVER</Text>
					</TouchableOpacity>
				</View>
			</View>
		</BackgroundContainer3>
	)
}

export default withTheme(Explore);