

export default function buildMakePerson() {
  return function makePerson({
    id,
    name,
    birthdate = Date.now(),
    gender,
    coupleId
  } = {}) {
    if (!name) {
      throw new Error('Name is required');
    }
    if (!gender) {
      throw new Error('Gender is required');
    }
    if (!birthdate) {
      throw new Error('Birthdate is required');
    }
    if (gender != 'male' && gender != 'female') {
      throw new Error('Gender values must either be "male" or "female"');
    }

    return Object.freeze({
      getId: () => id,
      getName: () => name,
      getBirthdate: () => birthdate,
      getGender: () => gender,
      getCoupleId: () => coupleId,
    });

    function toJson() {
      return JSON.stringify(this);
    }
  }
}