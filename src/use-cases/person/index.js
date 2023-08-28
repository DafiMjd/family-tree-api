import { makePersonMdl, makeFamilyMdl } from '../../entities/index.js';
import { personDb, familyDb } from '../../data-access/index.js';
import makeAddPerson from './add-person.js';
import makeGetPerson from './get-person.js';
import makeDeletePerson from './delete-person.js';

export const addPerson = makeAddPerson({ makePersonMdl, personDb });
export const getPerson = makeGetPerson({ makePersonMdl, personDb });
export const deletePerson = makeDeletePerson({ personDb });

