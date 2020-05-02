import React, {useState,useEffect} from 'react';
import {
	View,
	Image,
	Dimensions,
	TouchableOpacity,
	Text
} from 'react-native';

import { getChains } from '@theme/queries';
import { withTheme } from '@theme/themeProvider';
const windowWidth = Dimensions.get('window').width;

const AccessoryExercises = ({navigation,theme,route}) => {

	const calculatedSize = () => {
		var IMAGES_PER_ROW = 3;
	  	var size = windowWidth / IMAGES_PER_ROW
	  	return {width: size, height: size}
	}

	const [chains,setChains] = useState([]);

	useEffect(() => {
		var chains = getChains();
		chains.map((chain,key) => {chain.selected = false})
		setChains(chains);
	},[]);


  	const updateSelectedChains = (key) => {
  		let newSelectedChains = [...chains];
  		newSelectedChains[key].selected = !chains[key].selected;
  		setChains(newSelectedChains);
  	}

  	const selectChains = () => {
  		route.params.chains = chains;
  		navigation.navigate('RoutineInformation',route.params);
  	}

	return (
		<View>
			<View style={{flexDirection: "row", flexWrap: "wrap"}}>
				{
					chains.map((chain,key) => {
						console.log(chain.selected);
						let style = chain.selected ? {borderWidth: 4,borderColor: 'green'} : {borderWidth: 0};
						return (
							<TouchableOpacity onPress={() => updateSelectedChains(key)} key={key} >
								<Image key={key} source={chain.image} style={[calculatedSize(),style]}/>
							</TouchableOpacity>
						)
					})
				}
			</View>
			<TouchableOpacity {...theme.TouchableOpacity} onPress={() => selectChains()} >
				<Text {...theme.TouchableOpacityText}>Siguiente</Text>
			</TouchableOpacity>
		</View>
	)
}

export default withTheme(AccessoryExercises);