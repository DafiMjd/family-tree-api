import makePersonDb from './person-db.js';
import makeFamilyDb from './family-db.js';
import knex from './knex/index.js';

export const personDb = makePersonDb({ knex });
export const familyDb = makeFamilyDb({ knex });
