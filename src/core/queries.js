import database from '@theme/database.js';

export const getRoutinesByType = (type) => {

	var {routines} = database.tables;
	var result = routines.find(routine => routine.type === type);
	result.exercisesLength = getRoutineLength(result.rid); 
	return result;

}

export const getRoutineBySid = (sid) => {

	var {routines} = database.tables;
	var result = routines.find(routine => routine.sid === sid);
	result.exercisesLength = getRoutineLength(result.rid); 
	return result;

}

export const getRoutineByRid = (rid) => {

	var {routines,exercises_routines,exercises} = database.tables;
	var routine = routines.find(routine => routine.rid == rid);
	routine.exercises = exercises_routines.filter(er => er.rid == rid);
	routine.exercises.map((exercise,key) => {
		exercise.data = exercises.find(ex => ex.eid == exercise.eid);
	});
	return routine;
}

export const getExerciseByCid = (cid) => {
	var {exercises} = database.tables;
	chain_exercises = exercises.filter(er => er.cid == cid);
	return chain_exercises;	
}

export const getExercises = () => {
	var {exercises} = database.tables;
	return exercises;	
}

export const getShowableExercises = () => {
	var {exercises} = database.tables;
	return exercises.filter(er => er.showable);	
}

export const getChains = () => {

	var {chains} = database.tables;
	return chains;
	
}

export const getRoutineLength = (rid) => {
	var {exercises_routines} = database.tables;
	var length = exercises_routines.filter(er => er.rid == rid).length;
	return length;
}

export const getUserRoutines = (profile) => {

	var routines = Array();
	routines = routines.concat(getRoutinesByType('general'));

	if( profile.status ){
		var sportsRoutines = Array();
		profile.sports.map((sport,key) => {
			routines = routines.concat(getRoutineBySid(sport.sid));
		});
	}

	return routines;	
}

export const getGeneratedRoutine = (userSelection) => {
	var exercisesList = Array();
	userSelection.routines.map((sr,key) => {
		if(sr.selected) {
			var r = getRoutineByRid(sr.rid);
			for (var i = 0; i < sr.level; i++) {
				r.exercises.map((ex,keyex) => {
					exercisesList = exercisesList.concat(ex.data);
				});
			}
		}

	})

	if(userSelection.chains){
		userSelection.chains.map((ch,key) => {
			if(ch.selected){
				var c = getExerciseByCid(ch.cid);
				for (var i = 0; i < ch.level; i++) {
					exercisesList = exercisesList.concat(c);
				}
			}
		})
	}

	return exercisesList;

}

export const getGeneratedRoutineShowableExercises = (userSelection) => {
	var exercisesList = Array();
	userSelection.routines.map((sr,key) => {
		if(sr.selected) {
			var r = getRoutineByRid(sr.rid);
			for (var i = 0; i < sr.level; i++) {
				r.exercises.map((ex,keyex) => {
					ex.data.rid = r.rid;
					ex.data.group_name = r.name;
					exercisesList = exercisesList.concat(ex.data);
				});
			}
		}

	})
	

	if(userSelection.chains){
		userSelection.chains.map((ch,key) => {
			if(ch.selected){
				var c = getExerciseByCid(ch.cid);
				for (var i = 0; i < ch.level; i++) {
					for (let index = 0; index < c.length; index++) {
						const element = c[index];
						element.rid = 0;
						element.group_name = "Accesorios";
					}
					exercisesList = exercisesList.concat(c);
				}
			}
		})
	}
	
	var filteredExercises = exercisesList.reduce((acc, current) => {
		const x = acc.find(item => item.eid === current.eid);
		if (!x) {
		  return acc.concat([current]);
		} else {
		  return acc;
		}
	}, []);

	var groupedExercises = Array();

	filteredExercises = filteredExercises.filter(er => er.showable);

	for (let index = 0; index < filteredExercises.length; index++) {
		const exercise = filteredExercises[index];

		
		if (!groupedExercises[exercise.group_name]) {
			groupedExercises[exercise.group_name] = Array();
		}
		groupedExercises[exercise.group_name].push(exercise);
	}

	return groupedExercises;
}