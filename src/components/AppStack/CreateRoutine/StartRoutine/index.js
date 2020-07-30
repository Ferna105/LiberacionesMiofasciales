import React, {useState,useEffect} from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	ProgressBarAndroid,
	Dimensions
} from 'react-native';
import { withTheme } from '@theme/themeProvider';
import {Audio} from 'expo-av';
import { Video } from 'expo-av';
import BackgroundContainer3 from '@components/BackgroundContainer3';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

const StartRoutine = ({theme,navigation,route}) => {

	const startSound = new Audio.Sound();
	const restSound = new Audio.Sound();

	const [secondsExercise, setSecondsExercise] = useState(20)
	const [isExercise, setIsExercise] = useState(false);

	const [secondsRest, setSecondsRest] = useState(10)
	const [isRest, setIsRest] = useState(true);

	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);

	const [totalSeconds,setTotalSeconds] = useState(0);

	const [currentExercise, setCurrentExcercise] = useState(0);

	useEffect(() => {
		navigation.setOptions({ title: 'Tiempo total: ' + seconds.toHHMMSS() })
	},[seconds]);

	useEffect(() => {


		let interval = null;
		let totalInterval = null;
		let exerciseIterval = null;
		let restInterval = null;

		totalInterval = setTimeout(() => {
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
	    	clearTimeout(totalInterval);
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
		<BackgroundContainer3>
			<View {...theme.Container}>
				<View style={{marginBottom: 10}}>
					<Text style={{color: "#e5dfdf",fontFamily: 'Raleway-Bold',fontSize: 19,textAlign: "center"}}>{route.params.routine[currentExercise].name}</Text>
				</View>
				<View style={{marginBottom: 5}}>
					<Video
					  source={route.params.routine[currentExercise].gif}
					  rate={1.0}
					  volume={1.0}
					  isMuted={false}
					  resizeMode="contain"
					  shouldPlay
					  isLooping
					  style={{ width: windowWidth, height: 450 }}
					/>
				</View>
				<View style={{flexDirection: 'row'}}>
					<View style={{flex: 1}} >
						<View>
							{ isRest ? 
								<Text style={{textAlign:'center'}}  >
									<MaterialCommunityIcons name="progress-clock" size={55} color="white" />
									<Text style={{ color: "#FF0000",fontSize: 60,textAlign: "center"}}>
										{secondsRest.toSS()}
									</Text>
								</Text> : 
								<Text style={{textAlign:'center'}} >
									<MaterialCommunityIcons name="progress-clock" size={55} color="white" />
									<Text style={{ color: "#00FF00",fontSize: 60,textAlign: "center"}}>
										{secondsExercise.toSS()}
									</Text>
								</Text>
							}
						</View>
						<View>
							
						</View>
					</View>
					<View style={{flexDirection: "row", flex: 1,justifyContent: 'center'}}>
						<TouchableOpacity style={{elevation: 5,backgroundColor: "rgb(65,189,252)",paddingVertical: 20, paddingHorizontal: 40,borderRadius:5,alignItems: "center",marginVertical: 10}}
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
			          progress={ calculateProgress() }
					/>
				</View>
	    </View>
		</BackgroundContainer3>
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

Number.prototype.toSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return seconds;
}

export default withTheme(StartRoutine);