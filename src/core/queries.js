import database from '@theme/database.js';

export const getRoutinesByType = (type) => {

	var {routines} = database.tables;
	var result = routines.filter(routine => routine.type === type);
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

export const getChains = () => {

	var {chains} = database.tables;
	return chains;
	
}