export default function makeGetFamilyCtrl({ getFamily, getPerson }) {
  return async function get(req) {
    try {
      const id = req.params.id;
      const fatherId = req.query.fatherId;
      let result;
      let family

      if (id) {
        family = await getFamily.getFamily(id);
      } else if (fatherId) {
        family = await getFamily.getFamilyByFatherId(fatherId);
      } else {
        family = await getFamily.getFamily();
      }
      console.log(family);

      const children = [];

      if (family.childrenId && family.childrenId.length) {
        const childrenIds = family.childrenId;
        for (let index = 0; index < childrenIds.length; index++) {
          children.push(await getPerson.getPerson(childrenIds[index]));
        }
        result = Object.assign(
          family,
          { children: children }
        );
      }



      result = Object.assign(
        family,
        { children: children }
      );

      let error;
      if (!result) {
        error = 'Data not found';
      }

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: {
          statusCode: 200,
          data: result,
          error: error,
        },
      };
    } catch (e) {

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 400,
        body: {
          statusCode: 400,
          error: e.message,
        },
      };
    }
  }
} 