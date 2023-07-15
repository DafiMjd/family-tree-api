export default function makeUpdateFamilyCtrl({ updateFamily }) {
  return async function update(req) {
    try {
      const familyId = req.query.familyId;
      const personId = req.query.childrenId;
      
      const result = await updateFamily(familyId, personId);

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