import React, { useState, useEffect } from 'react';
import {
	View,
	ImageBackground,
	Dimensions,
	TouchableOpacity,
	Text,
	ScrollView,
	Alert
} from 'react-native';
import BackgroundContainer3 from '@components/BackgroundContainer3';
import { Ionicons } from '@expo/vector-icons';

import { getChains } from '@theme/queries';
import { withTheme } from '@theme/themeProvider';
const windowWidth = Dimensions.get('window').width;

const AccessoryExercises = ({ navigation, theme, route }) => {

	const calculatedSize = () => {
		var IMAGES_PER_ROW = 2;
		var size = windowWidth / IMAGES_PER_ROW
		return { width: size, height: size }
	}

	const [chains, setChains] = useState([]);

	useEffect(() => {
		var chains = getChains();
		chains.map((chain, key) => { 
			chain.selected = false,
			chain.level = 1;
		})
		setChains(chains);
	}, []);


	const updateSelectedChains = (key) => {
		let newSelectedChains = [...chains];
		newSelectedChains[key].selected = !chains[key].selected;
		if (newSelectedChains[key].selected) {
			Alert.alert(
				"Seleccione el nivel",
				"El nivel depende de la cantidad de repeticiones",
				[
					{
						text: "Nivel 1",
						onPress: () => {
							newSelectedChains[key].level = 1;
							setChains(newSelectedChains);
						}
					},
					{
						text: "Nivel 2",
						onPress: () => {
							newSelectedChains[key].level = 2;
							setChains(newSelectedChains);
						}
					},
					{ 
						text: "Nivel 3", 
						onPress: () => {
							newSelectedChains[key].level = 3;
							setChains(newSelectedChains);
						}
					}
				],
				{ cancelable: false }
			);
		} else {
			setChains(newSelectedChains);
		}
	}

	const selectChains = () => {
		route.params.chains = chains;
		navigation.navigate('RoutineInformation', route.params);
	}

	return (
		<BackgroundContainer3>
			<View style={{ flex: 1, marginBottom: 10 }} >
				<ScrollView>
					<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
						{
							chains.map((chain, key) => {
								let style = chain.selected ? { opacity: .3 } : { opacity: 1 };
								return (
									<View style={[calculatedSize(), style]} key={key}>
										<TouchableOpacity onPress={() => updateSelectedChains(key)}
											style={[{ borderWidth: 2, borderRadius: 5, margin: 10, flex: 1, borderColor: "rgb(65,189,252)" }]}>
											<ImageBackground key={key} source={chain.image} style={{ flex: 1, width: null, height: null, justifyContent: 'flex-end' }}>
												{
													chain.selected && (
														<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
															<Ionicons size={80} style={{ color: "rgb(65,189,252)" }} name="md-checkmark" />
															<Text style={{ color: "rgb(255,255,255)", fontSize: 17, fontFamily: 'Raleway-Bold' }}>Nivel {chain.level}</Text>
														</View>
													)
												}
												<Text style={{ backgroundColor: 'rgba(65,189,252,.5)', textAlign: 'center', color: "white", fontFamily: 'Raleway-Bold', fontSize: 17, paddingBottom: 5 }}>
													{chain.name}
												</Text>
											</ImageBackground>
										</TouchableOpacity>
									</View>
								)
							})
						}
					</View>
				</ScrollView>
				<TouchableOpacity style={{ elevation: 5, backgroundColor: "rgb(65,189,252)", alignItems: 'center', paddingVertical: 20, paddingHorizontal: 10, borderRadius: 5, margin: 10 }}
					onPress={() => selectChains()} >
					<Text {...theme.TouchableOpacityText}>Siguiente</Text>
				</TouchableOpacity>
			</View>
		</BackgroundContainer3>
	)
}

export default withTheme(AccessoryExercises);