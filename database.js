const database = {
	tables: {
		chains: [
			{"cid":"2","name":"Cadena anterior de los brazos","image":"CADENA_ANTERIOR_DE_LOS_BRAZOS"},
			{"cid":"3","name":"Cadena posterior de los brazos","image":"CADENA_POSTERIOR_DE_LOS_BRAZOS"},
			{"cid":"4","name":"Cadena posterior superior","image":"CADENA_POSTERIOR_SUPERIOR"},
			{"cid":"5","name":"Cadena posterior inferior","image":"CADENA_POSTERIOR_INFERIOR"},
			{"cid":"6","name":"Cadena anterior","image":"CADENA_ANTERIOR"},
			{"cid":"7","name":"Cabeza y cuello","image":"CABEZA_Y_CUELLO"},
			{"cid":"1","name":"Cadena lateral","image":"CADENA_LATERAL"}
		],
		exercises: [
			{"eid":"1","name":"Saludo al sol","description":"","gif":"","cid":"1"},
			{"eid":"3","name":"Bolita","description":"","gif":"","cid":"1"},
			{"eid":"4","name":"Glúteo sentado abrazando rodilla (abrazar la rodilla) bilateral","description":"","gif":"","cid":"1"},
			{"eid":"5","name":"Isquio arrodillado con extencion de tobillo (isquios)","description":"","gif":"","cid":"1"},
			{"eid":"6","name":"Gemelos parado con soga (gemelo) bilateral","description":"","gif":"","cid":"1"},
			{"eid":"7","name":"Tibiales sentado (monje)","description":"","gif":"","cid":"1"},
			{"eid":"8","name":"Planta de los pies estirar con la mano (planta) bilateral","description":"","gif":"","cid":"1"},
			{"eid":"9","name":"Tobillo\/soleo (tobillo) bilateral","description":"","gif":"","cid":"1"},
			{"eid":"10","name":"Abductores en pared o sentado (abd)","description":"","gif":"","cid":"1"},
			{"eid":"11","name":"Cadera zapo (zapo)","description":"","gif":"","cid":"1"},
			{"eid":"12","name":"Tfl bilateral","description":"","gif":"","cid":"1"},
			{"eid":"13","name":"Psoas bilateral","description":"","gif":"","cid":"1"},
			{"eid":"14","name":"Cuaddriceps bilateral","description":"","gif":"","cid":"1"},
			{"eid":"15","name":"Y (dorsales) bilateral","description":"","gif":"","cid":"1"},
			{"eid":"16","name":"Hombro adelante (hombro)","description":"","gif":"","cid":"1"},
			{"eid":"17","name":"Hombro sentado atrás (hombro)","description":"","gif":"","cid":"1"},
			{"eid":"18","name":"Pectoral contra la pared (pectoral, brazo, antebrazo y mano) bilateral","description":"","gif":"","cid":"1"},
			{"eid":"19","name":"Tríceps bilateral","description":"","gif":"","cid":"1"},
			{"eid":"2","name":"Trapecio sentado en una silla agarrándose del borde bilateral","description":"","gif":"","cid":"1"}
		],
		exercises_routines: [
			{"erid":"121","rid":"6","eid":"19","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"120","rid":"6","eid":"18","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"119","rid":"6","eid":"17","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"118","rid":"6","eid":"16","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"117","rid":"6","eid":"15","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"116","rid":"6","eid":"14","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"115","rid":"6","eid":"13","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"114","rid":"6","eid":"12","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"113","rid":"6","eid":"11","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"112","rid":"6","eid":"10","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"111","rid":"6","eid":"9","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"110","rid":"6","eid":"8","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"109","rid":"6","eid":"7","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"108","rid":"6","eid":"6","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"107","rid":"6","eid":"5","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"106","rid":"6","eid":"4","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"105","rid":"6","eid":"3","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"104","rid":"6","eid":"2","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"103","rid":"6","eid":"1","description":"20\" trabajo x 10\" pausa","replays":"3","seconds":"20"},
			{"erid":"101","rid":"5","eid":"19","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"100","rid":"5","eid":"18","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"99","rid":"5","eid":"17","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"98","rid":"5","eid":"16","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"97","rid":"5","eid":"15","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"96","rid":"5","eid":"14","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"95","rid":"5","eid":"13","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"94","rid":"5","eid":"12","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"93","rid":"5","eid":"11","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"92","rid":"5","eid":"10","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"91","rid":"5","eid":"9","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"90","rid":"5","eid":"8","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"89","rid":"5","eid":"7","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"88","rid":"5","eid":"6","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"87","rid":"5","eid":"5","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"86","rid":"5","eid":"4","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"85","rid":"5","eid":"3","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"84","rid":"5","eid":"2","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"83","rid":"5","eid":"1","description":"20\" trabajo x 10\" pausa","replays":"2","seconds":"20"},
			{"erid":"81","rid":"4","eid":"19","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"80","rid":"4","eid":"18","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"79","rid":"4","eid":"17","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"78","rid":"4","eid":"16","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"77","rid":"4","eid":"15","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"76","rid":"4","eid":"14","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"75","rid":"4","eid":"13","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"74","rid":"4","eid":"12","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"73","rid":"4","eid":"11","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"72","rid":"4","eid":"10","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"71","rid":"4","eid":"9","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"70","rid":"4","eid":"8","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"69","rid":"4","eid":"7","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"68","rid":"4","eid":"6","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"67","rid":"4","eid":"5","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"66","rid":"4","eid":"4","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"65","rid":"4","eid":"3","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"64","rid":"4","eid":"2","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"},
			{"erid":"63","rid":"4","eid":"1","description":"20\" trabajo x 10\" pausa","replays":"1","seconds":"20"}
		],
		routines: [
			{"rid":"4","type":"general","name":"Nivel 1","sid":null},
			{"rid":"5","type":"general","name":"Nivel 2","sid":null},
			{"rid":"6","type":"general","name":"Nivel 3","sid":null},
			{"rid":"8","type":"sport","name":"Hockey","sid":"1"},
			{"rid":"9","type":"sport","name":"Básquet","sid":"2"},
			{"rid":"10","type":"sport","name":"Fútbol","sid":"3"},
			{"rid":"11","type":"sport","name":"Tenis","sid":"6"},
			{"rid":"12","type":"sport","name":"Levantamiento de pesas","sid":"7"},
			{"rid":"13","type":"sport","name":"Voley","sid":"8"},
			{"rid":"14","type":"sport","name":"Natación","sid":"9"},
			{"rid":"15","type":"sport","name":"Crossfit","sid":"10"},
			{"rid":"16","type":"sport","name":"Power lifting","sid":"11"},
			{"rid":"17","type":"sport","name":"Rugby","sid":"12"},
			{"rid":"18","type":"sport","name":"Judo","sid":"13"},
			{"rid":"19","type":"sport","name":"Boxeo","sid":"14"}
		],
		sports: [
			{"sid":"1","name":"Hockey"},
			{"sid":"2","name":"Básquet"},
			{"sid":"3","name":"Fútbol"},
			{"sid":"6","name":"Tenis"},
			{"sid":"7","name":"Levantamiento de pesas"},
			{"sid":"8","name":"Voley"},
			{"sid":"9","name":"Natación"},
			{"sid":"10","name":"Crossfit"},
			{"sid":"11","name":"Power lifting"},
			{"sid":"12","name":"Rugby"},
			{"sid":"13","name":"Judo"},
			{"sid":"14","name":"Boxeo"}
		]
	}
}

export default database;