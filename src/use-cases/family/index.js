import {personDb, familyDb} from '../../data-access/index.js';
import makeGetFamily from './get-family.js';
import makeUpdateFamily from './update-family.js';

export const getFamily = makeGetFamily({ familyDb });
export const updateFamily = makeUpdateFamily({ familyDb });

