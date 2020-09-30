import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	ProgressBarAndroid,
	Dimensions,
	Alert
} from 'react-native';
import { withTheme } from '@theme/themeProvider';
import { Audio } from 'expo-av';
import { Video } from 'expo-av';
import BackgroundContainer3 from '@components/BackgroundContainer3';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';

const windowWidth = Dimensions.get('window').width;

const StartRoutine = ({ theme, navigation, route }) => {

	var _videoRef;
	const exerciseTime = 20;
	const restTime = 10;

	const [playbackInstance, setPlaybackInstance] = useState(null);

	const [secondsExercise, setSecondsExercise] = useState(exerciseTime)
	const [isExercise, setIsExercise] = useState(false);

	const [secondsRest, setSecondsRest] = useState(5)
	const [isRest, setIsRest] = useState(true);

	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);

	const [totalSeconds, setTotalSeconds] = useState(0);

	const [currentExercise, setCurrentExcercise] = useState(0);

	useEffect(() => {
		navigation.setOptions({ title: 'Tiempo total: ' + seconds.toHHMMSS() })

		if ([3, 2, 1].includes(secondsRest)) {
			playStartSound();
		}
		if ([3,2,1].includes(secondsExercise)) {
			playStartSound();
		}
	}, [seconds]);

	useEffect(() => {
		activateKeepAwake();

		let totalInterval = null;
		totalInterval = setTimeout(() => {
			setTotalSeconds(totalSeconds => totalSeconds + 1)
			if (isActive) {
				setSeconds(seconds => seconds + 1);
				if (isExercise) {
					setSecondsExercise(secondsExercise => secondsExercise - 1);
					if (secondsExercise == 0) {
						changePoint();
					}
				}
				if (isRest) {
					setSecondsRest(secondsRest => secondsRest - 1);
					if (secondsRest == 0) {
						changePoint();
					}
				}
			}
		}, 1000);

		return () => {
			clearTimeout(totalInterval);
			deactivateKeepAwake();
		};

	});

	const [text, setText] = React.useState('');
	const hasUnsavedChanges = Boolean(text);

	React.useEffect(() =>
		navigation.addListener('beforeRemove', (e) => {
			e.preventDefault();

			Alert.alert('Salir de la rutina','¿Estás seguro que deseás salir de la rutina actual?',
			[
				{ text: "No", style: 'cancel', onPress: () => {} },
				{ text: 'Si, estoy seguro', style: 'destructive', onPress: () => navigation.dispatch(e.data.action)}
			]
		);
	}),	[navigation]);

	const playStartSound = async () => {
		_loadNewPlaybackInstance(true);
	}

	const _loadNewPlaybackInstance = async (playing) => {
		var instance = playbackInstance;
		if (instance != null) {
			await instance.unloadAsync();
			instance.setOnPlaybackStatusUpdate(null);
			instance = null;
		}
		const source = require('@assets/sounds/bip.mp3');
		const initialStatus = {
			shouldPlay: true,
			rate: 1.0,
			shouldCorrectPitch: true,
			volume: 1.0,
			isMuted: false
		};
		const { sound, status } = await Audio.Sound.createAsync(
			source,
			initialStatus
		);
		instance = sound;
		instance.setIsLoopingAsync(false);
		instance.playAsync();
		setPlaybackInstance(instance);
	}

	const pauseRoutine = () => {
		setIsActive(!isActive);
	}

	const changePoint = () => {
		setIsRest(!isRest);
		setIsExercise(!isExercise);
		setSecondsRest(restTime);
		setSecondsExercise(exerciseTime);
		isExercise ? changeExercise() : null;
	}

	const changeExercise = () => {
		if (currentExercise + 1 < route.params.routine.length) {
			setCurrentExcercise(currentExercise + 1);
		}
		else {
			navigation.navigate('Congratulations');
		}

	}

	const calculateProgress = () => {
		return (currentExercise / route.params.routine.length)
	}

	const _handleVideoRef = component => {
		const playbackObject = component;
		if(playbackObject){
			//console.log(playbackObject.error);

		}
	}

	return (
		<BackgroundContainer3 error={isRest} success={isExercise} >
			<View {...theme.Container}>
				<View style={{ flex: 4 }}>
					<View style={{ flex: 1 }}>
						<Text style={{ color: "#e5dfdf", fontFamily: 'Raleway-Bold', fontSize: 19, textAlign: "center" }}>{route.params.routine[currentExercise].name}</Text>
					</View>
					<View style={{ flex: 7 }}>
						<Video
							resizeMode={Video.RESIZE_MODE_COVER}
							isMuted={true}
							isLooping= {true}
							shouldPlay= {true}
							source={route.params.routine[currentExercise].gif}
							ref={(ref) => _handleVideoRef(ref)}
							useNativeControls={false}
							style={{ width: windowWidth, height: "100%" }}
						/>

					</View>
				</View>
				<View style={{ flex: 1 }}>
					<View style={{ flexDirection: 'row', justifyContent: 'center' }} >
						<View style={{ marginHorizontal: 10 }}>
							{isRest ?
								<Text style={{ textAlign: 'center' }}  >
									<MaterialCommunityIcons name="progress-clock" size={55} color="white" />
									<Text style={{ color: "#FF0000", fontSize: 60, textAlign: "center" }}>
										{secondsRest.toSS()}
									</Text>
								</Text> :
								<Text style={{ textAlign: 'center' }} >
									<MaterialCommunityIcons name="progress-clock" size={55} color="white" />
									<Text style={{ color: "#00FF00", fontSize: 60, textAlign: "center" }}>
										{secondsExercise.toSS()}
									</Text>
								</Text>
							}
						</View>
						<View style={{ flexDirection: "row", justifyContent: 'center', marginHorizontal: 10 }}>
							<TouchableOpacity style={{ margin: 5, elevation: 5, backgroundColor: "rgb(65,189,252)", paddingVertical: 20, paddingHorizontal: 40, borderRadius: 5, alignItems: "center", marginVertical: 10 }}
								onPress={() => pauseRoutine()} >
								<Text {...theme.TouchableOpacityText}>{isActive ? "Pausar" : "Comenzar"}</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View >
						<ProgressBarAndroid
							{...theme.ProgressBarAndroid}
							styleAttr="Horizontal"
							indeterminate={false}
							progress={calculateProgress()}
						/>
					</View>
				</View>
			</View>
		</BackgroundContainer3>
	)
}

Number.prototype.toHHMMSS = function () {
	var sec_num = parseInt(this, 10); // don't forget the second param
	var hours = Math.floor(sec_num / 3600);
	var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	var seconds = sec_num - (hours * 3600) - (minutes * 60);

	if (hours < 10) { hours = "0" + hours; }
	if (minutes < 10) { minutes = "0" + minutes; }
	if (seconds < 10) { seconds = "0" + seconds; }
	return hours + ':' + minutes + ':' + seconds;
}

Number.prototype.toSS = function () {
	var sec_num = parseInt(this, 10); // don't forget the second param
	var hours = Math.floor(sec_num / 3600);
	var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	var seconds = sec_num - (hours * 3600) - (minutes * 60);

	if (hours < 10) { hours = "0" + hours; }
	if (minutes < 10) { minutes = "0" + minutes; }
	if (seconds < 10) { seconds = "0" + seconds; }
	return seconds;
}

export default withTheme(StartRoutine);