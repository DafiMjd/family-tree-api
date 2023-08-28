export default function makeGetFamily({ familyDb, personDb, makeFamilyMdl }) {
  return Object.freeze({
    getFamily,
    getFamilyByFatherId,
  });

  async function getFamily(id) {
    try {
      if (id) {
        const family = await familyDb.getFamilyById(id);
        const mergedJSON = Object.assign(
          family,
          await getParents(family['fatherId'], family['motherId']),
        );

        return mergedJSON;
      }
      const res = await familyDb.getAllFamily();
      return res;

    } catch (e) {
      throw e;
    }
  }

  async function getFamilyByFatherId(id) {
    try {
      if (id) {
        const family = await familyDb.getFamilyByFatherId(id);
        const mergedJSON = Object.assign(
          family,
          await getParents(family.fatherId, family.motherId),
        );

        return mergedJSON;
      } else {
        throw 'father id is required'
      }

    } catch (e) {
      throw e;
    }
  }

  async function getParents(fatherId, motherId) {
    const father = await personDb.getPersonById(fatherId);
    const mother = await personDb.getPersonById(motherId);

    return { father: father, mother: mother };
  }
}