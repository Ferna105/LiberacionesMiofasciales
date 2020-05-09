import React, {useState,useEffect} from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	ProgressBarAndroid
} from 'react-native';
import { withTheme } from '@theme/themeProvider';
import CurrentExercise from './CurrentExercise';
import {Audio} from 'expo-av';
import BackgroundContainer from '@components/BackgroundContainer';

const StartRoutine = ({theme,navigation,route}) => {
	console.log(route.params.routine[0]);
	const startSound = new Audio.Sound();
	const restSound = new Audio.Sound();

	const [secondsExercise, setSecondsExercise] = useState(10)
	const [isExercise, setIsExercise] = useState(false);

	const [secondsRest, setSecondsRest] = useState(5)
	const [isRest, setIsRest] = useState(true);

	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);

	const [totalSeconds,setTotalSeconds] = useState(0);

	const [currentExercise, setCurrentExcercise] = useState(0);

	useEffect(() => {

		let interval = null;
		let totalInterval = null;
		let exerciseIterval = null;
		let restInterval = null;

		totalInterval = setInterval(() => {
			setTotalSeconds(totalSeconds => totalSeconds + 1)
			



			if (isActive) {
		    
		    	setSeconds(seconds => seconds + 1);

			    if (isExercise) {
			    	setSecondsExercise(secondsExercise => secondsExercise - 1);

				    if(secondsExercise == 0) {
			    		changePoint();
			    	}
			    }

			    if (isRest) {

			    	setSecondsRest(secondsRest => secondsRest - 1);
				    //if(secondsRest != 0) playRestSound();
				    			    	
			    	if(secondsRest == 0) {
			    		playStartSound();
			    		changePoint();
			    	}
			    }


		    } 






		}, 1000);

		
	    
	    return () => {
	    	clearInterval(totalInterval);
	    };

	});


	const playRestSound = () => {
		
		const play = (async () => {
			try{

				await restSound.loadAsync(require('@assets/sounds/hit.mp3'));
				await restSound.playAsync();

			} catch (error) {
				console.log(error)
			}
		})();
	}

	const playStartSound = () => {
		
		const play = (async () => {
			try{

				await startSound.loadAsync(require('@assets/sounds/classic_hurt.mp3'));
				await startSound.playAsync();

			} catch (error) {
				console.log(error)
			}
		})();
	}

	const pauseRoutine = () => {
		setIsActive(!isActive);
	}

	const changePoint = () => {
		setIsRest(!isRest);
		setIsExercise(!isExercise);
		setSecondsRest(5);
		setSecondsExercise(10);
		isExercise ? changeExercise() : null;
	}

	const changeExercise = () => {
		if(currentExercise + 1 < route.params.routine.length){
			setCurrentExcercise(currentExercise + 1);
		}
		else{
			navigation.navigate('Congratulations');
		}

	}

	const calculateProgress = () => {
		return ( currentExercise / route.params.routine.length )
	}

	return (
		<BackgroundContainer>
			<View {...theme.Container}>
		    	<CurrentExercise style={{flex:6}} exercise={route.params.routine[currentExercise]}  />
				
				<View style={{flex:2}}>
					<Text>
						<Text {...theme.Text} >Tiempo total transcurrido</Text>
						<Text {...theme.TextHeader} > {totalSeconds.toHHMMSS()}</Text>
					</Text>
					<Text>
						<Text {...theme.Text} >Tiempo sin pausa</Text>
						<Text {...theme.TextHeader} > {seconds.toHHMMSS()}</Text>
					</Text>
					<Text>
						<Text {...theme.Text} >Ejercicio</Text>
						<Text {...theme.TextHeader} > {secondsExercise.toHHMMSS()}</Text>
					</Text>
					<Text>
						<Text {...theme.Text} >Descanso</Text>
						<Text {...theme.TextHeader} > {secondsRest.toHHMMSS()}</Text>
					</Text>
				</View>
				<View style={{flex: 2}}>
					<ProgressBarAndroid
						{...theme.ProgressBarAndroid}
			          styleAttr="Horizontal"
			          indeterminate={false}
			          progress={ calculateProgress() }
					/>
					<View style={{flexDirection: "row", justifyContent: 'center'}}>
						<TouchableOpacity {...theme.TouchableOpacity} onPress={() => pauseRoutine()} >
							<Text {...theme.TouchableOpacityText} >{isActive ? "Pausar" : "Comenzar"}</Text>
						</TouchableOpacity>
						<TouchableOpacity {...theme.TouchableOpacity} onPress={() => changePoint()} >
							<Text {...theme.TouchableOpacityText} >Forzar</Text>
						</TouchableOpacity>
					</View>
				</View>
		    </View>
		</BackgroundContainer>
	)
}

Number.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

export default withTheme(StartRoutine);