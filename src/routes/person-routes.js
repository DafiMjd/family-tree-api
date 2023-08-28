// import getPersonCtrl from '../../controllers/person/index.js';
// import addPersonCtrl from '../../controllers/person/index.js';
import {
  getPersonCtrl,
  addPersonCtrl,
  deletePersonCtrl,
  getMarriedPersonCtrl,
  getSinglePersonCtrl,
  getAncestorsCtrl
} from '../controllers/person/index.js';

export default function personRoute({ router, makeExpressCallback }) {
  router.get('/person/', makeExpressCallback(getPersonCtrl));
  router.get('/person/one/:id', makeExpressCallback(getPersonCtrl));
  router.get('/person/married', makeExpressCallback(getMarriedPersonCtrl));
  router.get('/person/single', makeExpressCallback(getSinglePersonCtrl));
  router.get('/person/ancestors', makeExpressCallback(getAncestorsCtrl));

  router.post('/person/', makeExpressCallback(addPersonCtrl));
  router.delete('/person/:id', makeExpressCallback(deletePersonCtrl));

  return router;
}