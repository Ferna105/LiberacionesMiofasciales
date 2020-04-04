import React, {useState,useEffect} from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	ProgressBarAndroid
} from 'react-native';
import { withTheme } from '@theme/themeProvider';
import CurrentExercise from './CurrentExercise';

const StartRoutine = ({theme,navigation,route}) => {

	const initialStartCountdown = 5;
	const initialExerciseTimeLeft = 20;
	const initialTimeBetweenExercises = 10;

	const [startCountdown, setStartCountdown] = useState(initialStartCountdown);
	const [isCountdown, setIsCountdown] = useState(1);
	
	const [excerciseTimeLeft, setExcerciseTimeLeft] = useState(initialExerciseTimeLeft);
	const [isExercise, setIsExercise] = useState(0);

	const [currentExercise, setCurrentExcercise] = useState(0);

	const [repetition, setRepetition] = useState(route.params.routine.repetitions);

	var startCountdownTimeOut;
	var excerciseTimeLeftTimeOut;


	useEffect(() => {
		if(isCountdown) { startCountdownEvent() }
		if(isExercise) { startExerciseEvent() }

		if(!isCountdown && !isExercise) {
			prepareNewExerciseEvent();
		}
	});


	const startCountdownEvent = () => {

		startCountdownTimeOut = setTimeout(() => {
			setStartCountdown(startCountdown - 1);
		}, 1000);

		if( startCountdown === 0 ) {
			clearTimeout(startCountdownTimeOut);
			setIsCountdown(0);
			setIsExercise(1);
		};
	}

	const startExerciseEvent = () => {

		excerciseTimeLeftTimeOut = setTimeout(() => {
			setExcerciseTimeLeft(excerciseTimeLeft - 1);
		}, 1000);
		
		if( excerciseTimeLeft === 0 ) {
			clearTimeout(excerciseTimeLeftTimeOut);
			setIsExercise(0);
		};

	}

	const prepareNewExerciseEvent = () => {
		if(route.params.routine.exercises.length > currentExercise + 1){
			setCurrentExcercise(currentExercise + 1);
			setExcerciseTimeLeft(initialExerciseTimeLeft);
			setStartCountdown(initialTimeBetweenExercises);
			setIsCountdown(1);
		}
		else{
			if(repetition > 1){
				setRepetition(repetition - 1);
				setStartCountdown(initialStartCountdown);
				setExcerciseTimeLeft(initialExerciseTimeLeft);
				setIsCountdown(1);
				setIsExercise(0);
				setCurrentExcercise(0);	
			}
			else{
				navigation.navigate('HomeScreen');
			}
		}
	}

	const calculateProgress = () => {
		console.log((currentExercise * (route.params.routine.repetitions + 1 - repetition)) / (route.params.routine.exercises.length * route.params.routine.repetitions));
		return ((currentExercise * (route.params.routine.repetitions + 1 - repetition)) / (route.params.routine.exercises.length * route.params.routine.repetitions));
	}

	return (
		<View {...theme.Container}>
	    	<CurrentExercise style={{flex:3}} exercise={route.params.routine.exercises[currentExercise]}  />
			
			<View style={{flex:1}}>
				{ 
					startCountdown ? (
						<View>
							<Text {...theme.TextHeader} >Cuenta regresiva</Text>
							<Text {...theme.CountdownStop} >{startCountdown}</Text>
						</View>
					) : null 
				}
				{ 
					!startCountdown ? (
						<View >
							<Text {...theme.TextHeader}>Tiempo de ejercicio</Text>
							<Text {...theme.CountdownExercise}>{excerciseTimeLeft}</Text>
						</View>
					) : null 
				}
			</View>
			<View style={{flex: 1}}>
				<ProgressBarAndroid
					{...theme.ProgressBarAndroid}
		          styleAttr="Horizontal"
		          indeterminate={false}
		          progress={ calculateProgress() }
		        />
			</View>
	    </View>
	)
}

export default withTheme(StartRoutine);