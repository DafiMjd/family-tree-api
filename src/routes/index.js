import express from 'express';
import makeExpressCallback from '../express-callback/index.js';
import personRoute from './person-routes.js';
import familyRoute from './family-routes.js';

const router = express.Router();
export const personRoutes = personRoute({ router, makeExpressCallback });
export const familyRoutes = familyRoute({ router, makeExpressCallback });
