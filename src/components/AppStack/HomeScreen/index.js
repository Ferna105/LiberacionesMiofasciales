import React, {useEffect} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '@components/context';
import { withTheme } from '@theme/themeProvider';

const HomeScreen = ({ navigation, theme }) => {

	const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
    	<View style={{flex: 2}}>
    		<Image style={{resizeMode:'stretch', width: null, height: "100%"}} source={require("@assets/Cadenas/CADENA_ANTERIOR.jpg")} />	
    	</View>
    	<View style={{flex: 1}}>
    		<View style={{flex: 1, flexDirection: 'row'}}>
    			<View  style={{flex: 1}}>
	    			<TouchableOpacity {...theme.TouchableOpacity} onPress={() => {signOut()}}>
	    				<Text {...theme.TouchableOpacityText}>Configuración</Text>
	    			</TouchableOpacity>
	    		</View>
	    		<View style={{flex: 1}}>
	    			<TouchableOpacity {...theme.TouchableOpacity} >
	    				<Text {...theme.TouchableOpacityText}>Explorar</Text>
	    			</TouchableOpacity>
	    		</View>
    		</View>
    		<View style={{flex: 1}}>
    			<TouchableOpacity {...theme.TouchableOpacity} onPress={() => {navigation.navigate('CreateRoutine')}}>
    				<Text {...theme.TouchableOpacityText}>Comenzar</Text>
    			</TouchableOpacity>
    		</View>
    	</View>
    </View>
  );
}

export default withTheme(HomeScreen);