
import { addPerson, getPerson, deletePerson } from '../../use-cases/person/index.js';
import makeGetPersonCtrl from './get-person-ctrl.js';
import makeAddPersonCtrl from './add-person-ctrl.js';
import makeDeletePersonCtrl from './delete-person-ctrl.js';
import makeGetMarriedPersonCtrl from './get-married-person-ctrl.js';
import makeGetSinglePersonCtrl from './get-single-person-ctrl.js';

export const getPersonCtrl = makeGetPersonCtrl({ getPerson });
export const addPersonCtrl = makeAddPersonCtrl({ addPerson });
export const deletePersonCtrl = makeDeletePersonCtrl({ deletePerson });
export const getMarriedPersonCtrl = makeGetMarriedPersonCtrl({ getPerson });
export const getSinglePersonCtrl = makeGetSinglePersonCtrl({ getPerson });