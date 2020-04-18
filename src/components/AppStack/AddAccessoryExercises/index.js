import React, {useState,useEffect} from 'react';
import {
	View,
	Image,
	Dimensions
} from 'react-native';

import { getChains } from '@theme/queries';
import { withTheme } from '@theme/themeProvider';
const windowWidth = Dimensions.get('window').width;

const AddAccessoryExercises = ({theme,routine}) => {

	const calculatedSize = () => {
		var IMAGES_PER_ROW = 3;
	  	var size = windowWidth / IMAGES_PER_ROW
	  	return {width: size, height: size}
	}

	const [chains,setChains] = useState([]);

	useEffect(() => {
		var chains = getChains();
		setChains(chains);
		//routine.exercises.push({data: {name: "TEST"}})
	},[]);

	const renderRow = (images) => {
	    return images.map((uri,i) =>{
	      return(
	        <Image key={i} style={[calculatedSize()]} source={{uri: uri}} />
	      );
	    })
  	}

	return (
		<View style={{flexDirection: "row", flexWrap: "wrap"}}>
			{
				chains.map((chain,key) => {
					return (
						<Image key={key} source={chain.image} style={[calculatedSize()]}/>
					)
				})
			}
		</View>
	)
}

export default withTheme(AddAccessoryExercises);