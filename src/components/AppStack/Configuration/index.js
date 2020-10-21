import * as React from 'react';
import { Button, View, AsyncStorage, Switch, ScrollView, Text, TouchableOpacity } from 'react-native';
import BackgroundContainer3 from '@components/BackgroundContainer3';
import { withTheme } from '@theme/themeProvider';
import { CheckBox, ListItem } from 'react-native-elements';
import database from '@theme/database.js';

const ConfigurationScreen = ({ navigation, theme }) => {

	var sportsInitialState = database.tables.sports.map(obj => ({ ...obj, checked: false }))
	const [sports, setSports] = React.useState(sportsInitialState);
	const [status, setStatus] = React.useState(false);

	React.useEffect(() => {
		AsyncStorage.getItem('@profile').then(profile => {
			var profileObject = JSON.parse(profile);
			!profileObject.sports ? profileObject.sports = [] : null;

			var sportsToCheck = sportsInitialState;
			for (let index = 0; index < profileObject.sports.length; index++) {
				const element = profileObject.sports[index];
				for (let index2 = 0; index2 < sportsToCheck.length; index2++) {
					const element2 = sportsToCheck[index2];
					if(element.sid == element2.sid && element.checked) {
						element2.checked = true;
					}
				}
			}
			setSports(sportsToCheck);
			setStatus(profileObject.status);
		});
	}, [])

	const handleSports = () => {
		var selectedSports = sports.filter(obj => {
			return obj.checked == true;
		})

		AsyncStorage.setItem('@profile',JSON.stringify({sports: selectedSports, status: status})).then(res => {
			navigation.navigate('HomeScreen');
		});
	}

	const handleCheckBox = (sport) => {
		var newSportsState = sports.map((obj) => {
		  if(obj.sid == sport.sid){
			obj.checked = !obj.checked;
		  }
		  return obj;
		});
		setSports(newSportsState);
	  }

	return (
		<BackgroundContainer3>
			<View {...theme.Container}>
				<View style={{ width: '100%',flex: 1 }}>
					<View style={{ flexDirection: "row", margin: 10 }}>
						<Text style={{ color: "#e5dfdf", fontFamily: 'Raleway-Regular', fontSize: 17, marginBottom: 10 }}>
							Practico deporte
						</Text>
						<Switch trackColor={{ false: "rgba(255,255,255,0.7)", true: "rgba(255,255,255,1)" }}
							thumbColor={status ? "rgb(65,189,252)" : "rgba(65,189,252,0.7)"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={setStatus}
							value={status} style={{ flex: 1 }} />
					</View>
					<ScrollView style={{ textAlign: 'left', }}>
						{
							status ? (
								sports.map((sport, key) => {
									return (
										<CheckBox
											key={key}
											{...theme.CheckBox}
											checked={JSON.parse(sport.checked)}
											title={sport.name}
											textStyle={{
												color: 'white',
												fontWeight: '100',
											}}
											onPress={() => handleCheckBox(sport)} 
										/>
									)
								})
							) : null
						}
					</ScrollView>
				</View>
				<View style={{ flexDirection: "row", justifyContent: 'flex-end', width: "100%" }}>
					<TouchableOpacity
						style={{ elevation: 5, backgroundColor: "rgb(65,189,252)", width: "100%", paddingVertical: 20, paddingHorizontal: 50, borderRadius: 5, alignItems: "center", marginVertical: 10 }}
						onPress={() => handleSports()}
					>
						<Text {...theme.TouchableOpacityText}>Guardar cambios</Text>
					</TouchableOpacity>
				</View>
			</View>
		</BackgroundContainer3>
	);
}

export default withTheme(ConfigurationScreen);