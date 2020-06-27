import React, {useEffect} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '@components/context';
import { withTheme } from '@theme/themeProvider';
import BackgroundContainer3 from '@components/BackgroundContainer3';

const HomeScreen = ({ navigation, theme }) => {

	const { signOut } = React.useContext(AuthContext);

  return (
    <BackgroundContainer3>
        <View style={{flex: 1}}>
        	<View style={{flex: 2}}>
        			
        	</View>
        	<View style={{flex: 1}}>
        		<View style={{flex: 1, flexDirection: 'row'}}>
        			<View  style={{flex: 1}}>
						<TouchableOpacity 
							onPress={() => { navigation.navigate("Configuration")}}
                            style={{elevation: 5,backgroundColor: "rgb(65,189,252)", alignItems: 'center',paddingVertical: 20, paddingHorizontal: 10,borderRadius:5,margin: 10}}>
    	    				<Text {...theme.TouchableOpacityText}>Configuración</Text>
    	    			</TouchableOpacity>
    	    		</View>
    	    		<View style={{flex: 1}}>
						<TouchableOpacity 
							onPress={() => {signOut()}}
                            style={{elevation: 5,backgroundColor: "rgb(65,189,252)", alignItems: 'center',paddingVertical: 20, paddingHorizontal: 10,borderRadius:5,margin: 10}}
                            >
    	    				<Text {...theme.TouchableOpacityText}>Explorar</Text>
    	    			</TouchableOpacity>
    	    		</View>
        		</View>
        		<View style={{flex: 1}}>
        			<TouchableOpacity 
                        style={{elevation: 5,backgroundColor: "rgb(65,189,252)", alignItems: 'center',paddingVertical: 20, paddingHorizontal: 10,borderRadius:5,margin: 10}}
                        onPress={() => {navigation.navigate('CreateRoutine')}}>
        				<Text {...theme.TouchableOpacityText}>Comenzar</Text>
        			</TouchableOpacity>
        		</View>
        	</View>
        </View>
    </BackgroundContainer3>
  );
}

export default withTheme(HomeScreen);