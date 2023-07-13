import {
  getFamilyCtrl,
  updateFamilyCtrl
} from '../controllers/family/index.js';

export default function familyRoute({ router, makeExpressCallback }) {
  router.get('/family/', makeExpressCallback(getFamilyCtrl));
  router.get('/family/one/:id', makeExpressCallback(getFamilyCtrl));
  router.get('/family/fatherId', makeExpressCallback(getFamilyCtrl));

  router.patch('/family/childrenId', makeExpressCallback(updateFamilyCtrl));

  return router;
}