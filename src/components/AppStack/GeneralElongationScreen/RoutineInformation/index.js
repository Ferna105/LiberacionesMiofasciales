import React, {Component} from 'react';
import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withTheme } from '@theme/themeProvider';
import { getRoutineByRid } from '@theme/queries';

class RoutineInformation extends Component {

	constructor(props) {
		super(props);
		this.state = {
			routine: {}
		}
	}

	componentDidMount() {
		var {rid} = this.props.route.params;
		var routine = getRoutineByRid(rid);
		this.setState({routine});
	}

	renderExercisesList() {
		var { theme , navigation } = this.props;
		
		if(this.state.routine.exercises){
			return this.state.routine.exercises.map((exercise,key) => {
				return (
					<View>
						<Text {...theme.Text} >{exercise.data.name} {exercise.replays}</Text>
					</View>
				)
			});
		}
		return null;
	}

	render() {
		var { theme , navigation } = this.props;
		return (
			<View {...theme.Container}>
		    	<View>
			  		<Text {...theme.TextHeader}>Listado de ejercicios</Text>
			  		<Text {...theme.Text}>
			  			A continuación se muestran todos los ejercicios de la rutiina. Si desconoce como es cada uno puede ver el video de explicación.
			  		</Text>
		  		</View>
		  		<View>
		  			{this.renderExercisesList()}
		  		</View>
		    </View>
		)
	}
}

export default withTheme(RoutineInformation);