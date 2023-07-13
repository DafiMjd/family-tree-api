export default function makeGetFamilyCtrl({ getFamily }) {
  return async function get(req) {
    try {
      const id = req.params.id;
      const fatherId = req.query.fatherId;
      let result;
      if (id) {
        result = await getFamily.getFamily(id);
      } else if (fatherId) {
        result = await getFamily.getFamilyByFatherId(fatherId);
      } else {
        result = await getFamily.getFamily();
      }

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