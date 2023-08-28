import {personDb, familyDb} from '../../data-access/index.js';
import makeGetFamily from './get-family.js';
import makeUpdateFamily from './update-family.js';
import { makeFamilyMdl, makePersonMdl } from '../../entities/index.js';

export const getFamily = makeGetFamily({ familyDb, personDb, makeFamilyMdl });
export const updateFamily = makeUpdateFamily({ familyDb });

