export default function makeGetPerson({ makePersonMdl, personDb }) {
  return Object.freeze({
    getPerson,
    getMarriedPerson,
    getSinglePerson,
    getAncestors,
  });

  async function getPerson(id) {
    try {
      if (id) {
        const person = await personDb.getPersonById(id);
        const couple = await personDb.getPersonById(person.coupleId);

        return Object.assign(
          person,
          { couple: couple }
        )
      }
      return personDb.getAllPerson();

    } catch (e) {
      throw e;
    }
  }

  async function getMarriedPerson(gender) {
    try {
      return personDb.getMarriedPerson(gender);

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

  async function getAncestors() {
    try {
      const ancestors = await personDb.getAncestors();
      const people = [];
      ancestors.forEach(function (ancestor) {
        people.push(makePersonMdl(ancestor));
      });


      return mergeCouple(ancestors);

    } catch (e) {
      throw e;
    }
  }

  async function mergeCouple(people) {

    for (let index = 0; index < people.length; index++) {
      const indexToRemove = people
        .findIndex((temp) => temp.coupleId === people[index].id);

      if (indexToRemove != -1) {
        people.splice(indexToRemove, 1);
      }
      const couple = await personDb.getPersonById(people[index].coupleId);
      const personWithCouple = Object.assign(people[index], { couple: couple });
      people[index] = personWithCouple;
    }

    return people;
  }
}