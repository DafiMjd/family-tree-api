export default function makeGetMarriedPersonCtrl({ getPerson }) {
  return async function get(req) {
    try {
      const gender = req.query.gender;
      const result = await getPerson.getMarriedPerson(gender);
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