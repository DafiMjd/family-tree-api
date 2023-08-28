export default function makeGetAncestorsCtrl({ getPerson }) {
  return async function get(req) {
    try {
      const result = await getPerson.getAncestors();

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