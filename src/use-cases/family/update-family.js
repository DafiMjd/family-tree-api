export default function makeUpdateFamily({ familyDb }) {
  return async function updateChildrenId(familyId, personId) {
    try {
      return familyDb.updateChildrenId(familyId, personId);

    } catch (e) {
      throw e;
    }
  }
}