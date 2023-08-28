export default function makeAddPerson({ makePersonMdl, personDb }) {
  return async function addPerson(personData) {
    try {
      const person = makePersonMdl(personData);

      return personDb.insertPerson(
        person.getName(),
        person.getGender(),
        person.getBirthdate(),
        person.getCoupleId(),
      );
    } catch (e) {
      throw e;
    }
  }
}