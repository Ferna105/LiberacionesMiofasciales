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
import { getGeneratedRoutine, getGeneratedRoutineShowableExercises } from '@theme/queries';
import { Video } from 'expo-av';
import BackgroundContainer3 from '@components/BackgroundContainer3';
const windowWidth = Dimensions.get('window').width;

const RoutineInformation = ({ theme, navigation, route }) => {


	const [routine, setRoutine] = useState([]);
	const [showableExercises, setShowableExercises] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedExerciseModal, setSelectedExerciseModal] = useState({});

	useEffect(() => {
		//Ejercicios que se muestran
		var generatedRoutineShowableExercises = getGeneratedRoutineShowableExercises(route.params);
		setShowableExercises(generatedRoutineShowableExercises);

		//Secuencia de ejercicios de la rutina
		var generatedRoutine = getGeneratedRoutine(route.params);
		setRoutine(generatedRoutine);
	}, []);

	const renderItemTitle = (exercise) => {
		return (exercise.name);
	}

	const openExerciseInModal = (exercise) => {
		setSelectedExerciseModal(exercise);
		setModalVisible(true);
	}

	const onPressStart = () => {
		Alert.alert(
			"Importante",
			`En la elongación se debe sentir tensión, no dolor.\n\nCada ejercicio consta de 20 segundos de elongación (Reloj en verde) por 10 de descanso (Reloj en rojo).\n\nEl punto rojo de cada video indica la postura en la que debe permanecer quieto.`,
			[
				{ text: "Entendido", onPress: () => navigation.navigate('StartRoutine', { routine }) }
			],
			{ cancelable: false }
		);
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

	const getTotalTime = () => {
		// El total de tiempo se calcula como la cantidad de ejercicios de la rutina sin filtrar por 20 segundos que dura
		// cada ejercicio + 10 segundos de pausa entre cada uno.
		return (Math.trunc((routine.length * 20 + routine.length * 10) / 60))
	}

	return (
		<BackgroundContainer3>
			<View {...theme.Container}>
				<View>
					<Text style={{ textAlign: 'center', color: "#e5dfdf", fontFamily: 'Raleway-Bold', fontSize: 17, marginBottom: 10 }}>Listado de ejercicios</Text>
					<Text style={{ textAlign: 'center', color: "#e5dfdf", fontFamily: 'Raleway-Regular', fontSize: 17, marginBottom: 10 }}>
						A continuación se muestran todos los ejercicios de la rutina. Si desconoce como es cada uno puede ver el video de explicación.
		  			</Text>
				</View>
				<FlatList
					style={{ marginVertical: 10, width: "100%" }}
					data={Object.keys(showableExercises)}
					renderItem={({ item, index }) => {
						return (
							<View >
								<Text style={{ color: "#e5dfdf", fontFamily: 'Raleway-Bold', fontSize: 15 }}>{item}</Text>
								<FlatList
									style={{ marginVertical: 10, width: "100%" }}
									data={showableExercises[item]}
									renderItem={({ item, index }) => renderExercisesList(item, index)}
									keyExtractor={(item, index) => index.toString()}
								/>
							</View>
						)
					}}
					keyExtractor={(item, index) => index.toString()}
				/>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						setModalVisible(false)
					}}>
					<BackgroundContainer3 hasMarginTop={false}>
						<View {...theme.Container}>
							<View>
								<View style={{ alignItems: 'center', marginBottom: 10 }}>
									{
										selectedExerciseModal && (
											<View>
												<View style={{ paddingHorizontal: 20 }}>
													<Text style={{ color: "#e5dfdf", fontFamily: 'Raleway-Bold', fontSize: 21, marginBottom: 10 }}>{selectedExerciseModal.showableName}</Text>
												</View>
												<Video
													source={selectedExerciseModal.gif}
													rate={1.0}
													volume={1.0}
													isMuted={false}
													resizeMode="contain"
													shouldPlay
													isLooping
													style={{ width: windowWidth, height: 300, marginBottom: 20 }}
												/>
												<ScrollView style={{ padding: 5 }}>
													<Text style={{ textAlign: 'center', color: "#e5dfdf", fontFamily: 'Raleway-Regular', fontSize: 17, marginBottom: 10, marginHorizontal: 10 }}>
														{selectedExerciseModal.description}
													</Text>
												</ScrollView>
											</View>
										)
									}
								</View>
							</View>
						</View>
						<View style={{ padding: 20 }}>
							<TouchableOpacity activeOpacity={1} style={{ elevation: 5, backgroundColor: "rgb(65,189,252)", paddingVertical: 20, paddingHorizontal: 50, borderRadius: 5, alignItems: "center", marginVertical: 10 }} onPress={() => { setModalVisible(!modalVisible); }}>
								<Text {...theme.TouchableOpacityText}>Cerrar</Text>
							</TouchableOpacity>
						</View>
					</BackgroundContainer3>
				</Modal>

				<View style={{ width: "100%" }}>
					<Text style={{ textAlign: 'right' }}>
						<Text style={{ fontSize: 17, fontFamily: 'Raleway-Bold', color: 'white' }}>Tiempo total: </Text>
						<Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>{getTotalTime()}'</Text>
					</Text>
					<TouchableOpacity style={{ elevation: 5, backgroundColor: "rgb(65,189,252)", paddingVertical: 20, paddingHorizontal: 50, borderRadius: 5, alignItems: "center", marginVertical: 10 }}
						onPress={() => onPressStart()} >
						<Text {...theme.TouchableOpacityText}>SIGUIENTE</Text>
					</TouchableOpacity>
				</View>
			</View>
		</BackgroundContainer3>
	)
}

export default withTheme(RoutineInformation);