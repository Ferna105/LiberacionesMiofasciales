import React, {Component} from 'react';
import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withTheme } from '@theme/themeProvider';
import { getRoutinesByType } from '@theme/queries';

class LevelSelection extends Component {

	constructor(props) {
		super(props);
		this.state = {
			routines: []
		}
	}

	componentDidMount() {
		var routines = getRoutinesByType('general');
		this.setState({routines});
	}

	render() {
		var { theme , navigation } = this.props;

		return (
			<View {...theme.Container}>
		    	<View>
			  		<Text {...theme.TextHeader}>Seleccione el nivel</Text>
			  		<Text {...theme.Text}>El nivel seleccionado influirá en la duración de la rutina</Text>
		  		</View>
		  		<View>
		    	{
		    		this.state.routines.map((routine,key) => {
		    			return (
		    				<TouchableOpacity
						      	{...theme.TouchableOpacity}
						      	key={key}
						      	onPress={() => navigation.navigate('RoutineInformation',{rid: routine.rid})}
						      >
		    					<Text {...theme.TouchableOpacityText}>{routine.name}</Text>
		    				</TouchableOpacity>
		    			)
		    		})
		    	}
		    	</View>
		    </View>
		)
	}
}

export default withTheme(LevelSelection);