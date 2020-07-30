import React, { useEffect,useState } from 'react';
import { Text, View, TouchableOpacity, Image,Dimensions } from 'react-native';
import { AuthContext } from '@components/context';
import { withTheme } from '@theme/themeProvider';
import BackgroundContainer3 from '@components/BackgroundContainer3';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const screenWidth = Math.round(Dimensions.get('window').width);

const carouselItems = [
	{
		title: 'Si no podés hacer alguno de los ejercicios o te duele mucho hacerlo, simplemente esperá los 20 segundos sin hacer nada y retomás en el próximo ejercicio.',
	},
	{
		title: 'La continuidad es la clave del éxito.',
	},
	{
		title: 'Tres sesiones semanales son suficientes para cumplir con los objetivos de los deportistas.',
	},
	{
		title: 'Con una sesión diaria conseguirás resultados óptimos, súper recomendable.',
	},
	{
		title: 'Podés elongar después de entrenar, pero lo óptimo es esperar entre 4 y 8 horas luego de entrenar.',
	},
	{
		title: 'Cuando estés elongando, sentí la tensión del músculo y relajate.',
	},
	{
		title: 'Elongar reduce el estrés.',
	},
	{
		title: 'Elongar en un ambiente climatizado a tu gusto ayudará a que tus músculos se relajen.',
	},
	{
		title: 'El proceso es lento, sé constante.',
	},
	{
		title: 'Es una buena idea hacer la rutina de elongación luego de un baño de agua caliente.',
	},
	{
		title: 'Es importante beber la cantidad de agua diaria que necesites para mantener la cualidad elástica de tus músculos.',
	},
	{
		title: 'Escuchá la música que te gusta mientras hacés tu rutina.',
	},
	{
		title: 'No hace falta que seas deportista para hacer una rutina de elongación, tener un cuerpo flexible mejora las cualidades físicas de todas las personas.',
	},
	{
		title: '¿Tenés problemas para dormir? Elongar libera tensiones y te ayuda a descansar de noche.',
	},
	{
		title: 'Si la responsabilidad y el compromiso no ordenan las acciones del presente... El futuro será más de lo mismo.',
	},
	{
		title: 'En la pestaña EXPLORAR vas a encontrar todos los ejercicios con una descripción. leelas para que tus sesiones de elongación sean óptimas'
	}
];

const HomeScreen = ({ navigation, theme }) => {

	const { signOut } = React.useContext(AuthContext);

	const [activeSlide, setActiveSlide] = useState(0);

	const renderItem = ({ item, index }) => {

		let imagePath;
		switch (index) {
			case 0: {
				imagePath = require('@assets/slider/slider0.png');
				break;
			}
			case 1: {
				imagePath = require('@assets/slider/slider1.png');
				break;
			}
			case 2: {
				imagePath = require('@assets/slider/slider2.png');
				break;
			}
			case 3: {
				imagePath = require('@assets/slider/slider3.png');
				break;
			}
			case 4: {
				imagePath = require('@assets/slider/slider4.png');
				break;
			}
			case 5: {
				imagePath = require('@assets/slider/slider5.png');
				break;
			}
			case 6: {
				imagePath = require('@assets/slider/slider6.png');
				break;
			}
			case 7: {
				imagePath = require('@assets/slider/slider7.png');
				break;
			}
			case 8: {
				imagePath = require('@assets/slider/slider8.png');
				break;
			}
			case 9: {
				imagePath = require('@assets/slider/slider9.png');
				break;
			}
			case 10: {
				imagePath = require('@assets/slider/slider10.png');
				break;
			}
			case 11: {
				imagePath = require('@assets/slider/slider11.png');
				break;
			}
			case 12: {
				imagePath = require('@assets/slider/slider12.png');
				break;
			}
			case 13: {
				imagePath = require('@assets/slider/slider13.png');
				break;
			}
			case 14: {
				imagePath = require('@assets/slider/slider14.png');
				break;
			}
			case 15: {
				imagePath = require('@assets/slider/slider15.png');
				break;
			}
			default: {
				break;
			}
		}
		return (
			<View style={{ padding: 30, flex: 1 }}>
				<View style={{ alignItems: 'center', justifyContent: 'center', flex: 2 }}>
					<Image style={{ resizeMode: 'stretch', width: 150, height: 150 }} source={imagePath} />
				</View>
				<View style={{ flex: 1 }}>
					<Text style={{ textAlign: 'center', color: "#e5dfdf", fontFamily: 'Raleway-Regular', fontSize: 17, marginBottom: 10 }}>
						{item.title}
					</Text>
				</View>
			</View>
		);
	}

	let carousel = null;

	return (
		<BackgroundContainer3>
			<View style={{ flex: 1 }}>
				<View style={{ flex: 2 }}>
					<Carousel
						style={{height: "100%"}}
						ref={(c) => { carousel = c; }}
						data={carouselItems}
						renderItem={(item) => renderItem(item)}
						sliderWidth={screenWidth}
						onSnapToItem={(index) => setActiveSlide(index) }
						itemWidth={screenWidth}
					/>
				</View>
				<View style={{ flex: 1 }}>
					<View style={{ flex: 1, flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<TouchableOpacity
								onPress={() => { navigation.navigate("Configuration") }}
								style={{ elevation: 5, backgroundColor: "rgb(65,189,252)", alignItems: 'center', paddingVertical: 20, paddingHorizontal: 10, borderRadius: 5, margin: 10 }}>
								<Text {...theme.TouchableOpacityText}>Configuración</Text>
							</TouchableOpacity>
						</View>
						<View style={{ flex: 1 }}>
							<TouchableOpacity
								onPress={() => { navigation.navigate("Explore") }}
								style={{ elevation: 5, backgroundColor: "rgb(65,189,252)", alignItems: 'center', paddingVertical: 20, paddingHorizontal: 10, borderRadius: 5, margin: 10 }}
							>
								<Text {...theme.TouchableOpacityText}>Explorar</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={{ flex: 1 }}>
						<TouchableOpacity
							style={{ elevation: 5, backgroundColor: "rgb(65,189,252)", alignItems: 'center', paddingVertical: 20, paddingHorizontal: 10, borderRadius: 5, margin: 10 }}
							onPress={() => { navigation.navigate('SelectRoutines') }}>
							<Text {...theme.TouchableOpacityText}>Comenzar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</BackgroundContainer3>
	);
}

export default withTheme(HomeScreen);