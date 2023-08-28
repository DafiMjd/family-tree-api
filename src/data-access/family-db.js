export default function makeDb({ knex }) {
  return Object.freeze({
    getAllFamily,
    getFamilyById,
    getFamilyByFatherId,
    updateChildrenId,
  });

  async function getAllFamily() {
    try {
      const res = await knex('family').select();
      return res;
    } catch (e) {
      throw e;
    }
  }

  async function getFamilyById(id) {
    try {
      const res = await knex('family')
        .select()
        .where('id', id);

      return res[0];
    } catch (e) {
      throw e;
    }
  }

  async function getFamilyByFatherId(id) {
    try {
      const res = await knex('family')
        .select()
        .where('fatherId', id);

      return res[0];
    } catch (e) {
      throw e;
    }
  }

  async function updateChildrenId(familyId, personId) {
    try {
      const res = await knex('family')
        .update({
          childrenId: knex.raw('array_append("childrenId", ?)', personId)
        })
        .where('id', familyId)
        .returning('*');

      return res;
    } catch (e) {
      throw e;
    }
  }
}