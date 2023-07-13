export default function makeGetPerson({ personDb }) {
  return Object.freeze({
    getPerson,
    getMarriedPerson,
    getSinglePerson,
  });

  async function getPerson(id) {
    try {
      if (id) {
        return personDb.getPersonById(id);
      }
      return personDb.getAllPerson();

    } catch (e) {
      throw e;
    }
  }

  async function getMarriedPerson() {
    try {
      return personDb.getMarriedPerson();

    } catch (e) {
      throw e;
    }
  }

  async function getSinglePerson(gender) {
    try {
      return personDb.getSinglePerson(gender);

    } catch (e) {
      throw e;
    }
  }
}