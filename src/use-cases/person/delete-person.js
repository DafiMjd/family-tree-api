export default function makeDeletePerson({ personDb }) {
  return async function deletePerson(id) {
    try {
      if (id) {
        return personDb.deletePerson(id);
      }
      throw 'id must be provided';

    } catch (e) {
      throw e;
    }
  }
}