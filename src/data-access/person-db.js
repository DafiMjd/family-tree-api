export default function makeDb({ knex }) {
  return Object.freeze({
    getAllPerson,
    getPersonById,
    insertPerson,
    deletePerson,
    getMarriedPerson,
    getSinglePerson,
    getAncestors,
  });

  async function getAllPerson() {
    try {
      const res = await knex('person').select();
      return res;
    } catch (e) {
      throw e;
    }
  }

  async function getPersonById(id) {
    try {
      const res = await knex('person')
        .select()
        .where('id', id);

      return res[0];
    } catch (e) {
      throw e;
    }
  }

  async function insertPerson(name, gender, birthdate, coupleId) {
    try {
      const res = await knex('person')
        .insert({
          name: name,
          gender: gender,
          birthdate: birthdate,
          coupleId: coupleId,
        })
        .returning('*');

      return res[0];
    } catch (e) {
      throw e;
    }
  }

  async function deletePerson(id) {
    try {
      const res = await knex('person')
        .delete()
        .where('id', id);

      return res;
    } catch (e) {
      throw e;
    }
  }

  async function getMarriedPerson(gender) {
    try {
      const res = await knex('person')
        .select()
        .where('gender', gender)
        .whereNot('coupleId', null);

      return res;
    } catch (e) {
      throw e;
    }
  }

  async function getSinglePerson(gender) {
    try {
      const res = await knex('person')
        .select()
        .where('gender', gender)
        .where('coupleId', null);

      return res;
    } catch (e) {
      throw e;
    }
  }

  async function getAncestors() {
    try {
      const childrenIdsRaw = await knex
        .select('family.childrenId')
        .from('family')
        .whereNot('family.childrenId', null);

      const childrenIds = [];
      for (const index in childrenIdsRaw) {
        childrenIds.push(...childrenIdsRaw[index]['childrenId']);
      }

      const res = await knex.select('*')
        .from({ a: 'person' })
        .whereNotIn('a.id', childrenIds)
        .whereNotIn('a.coupleId', childrenIds);
      return res;
    } catch (e) {
      throw e;
    }
  }
}