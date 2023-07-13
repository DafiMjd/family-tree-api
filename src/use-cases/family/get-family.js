export default function makeGetFamily({ familyDb }) {
  return Object.freeze({
    getFamily,
    getFamilyByFatherId,
  });

  async function getFamily(id) {
    try {
      if (id) {
        return familyDb.getFamilyById(id);
      }
      return familyDb.getAllFamily();

    } catch (e) {
      throw e;
    }
  }

  async function getFamilyByFatherId(id) {
    console.log(id);
    try {
      if (id) {
        return familyDb.getFamilyByFatherId(id);
      } else {
        throw 'father id is required'
      }

    } catch (e) {
      throw e;
    }
  }
}