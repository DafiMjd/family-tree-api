export default function makeUpdateFamily({ db }) {
  return async function updateChildrenId(familyId, personId) {
    try {
      return db.updateChildrenId(familyId, personId);

    } catch (e) {
      throw e;
    }
  }
}