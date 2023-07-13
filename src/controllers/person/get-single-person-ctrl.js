export default function makeGetSinglePersonCtrl({ getPerson }) {
  return async function get(req) {
    try {
      let error;
      let statusCode = 200;

      
      const gender = req.query.gender;

      if (!gender) {
        error = 'gender must be provided';
        statusCode = 400;
      }

      const result = await getPerson.getSinglePerson(gender);
      if (!result) {
        error = 'Data not found';
      }
      
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: statusCode,
        body: {
          statusCode: statusCode,
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