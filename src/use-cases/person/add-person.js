export default function makeAddPerson({ makePerson, personDb }) {
  return async function addPerson(personData) {
    try {
      const person = makePerson(personData);

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