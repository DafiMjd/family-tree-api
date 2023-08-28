
import { getFamily, updateFamily } from '../../use-cases/family/index.js';
import { getPerson } from '../../use-cases/person/index.js';
import makeGetFamilyCtrl from './get-family-ctrl.js';
import makeUpdateFamilyCtrl from './update-family-ctrl.js'

export const getFamilyCtrl = makeGetFamilyCtrl({ getFamily, getPerson });
export const updateFamilyCtrl = makeUpdateFamilyCtrl({ updateFamily })