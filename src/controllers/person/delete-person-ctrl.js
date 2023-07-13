export default function makeDeletePersonCtrl({ deletePerson }) {
  return async function del(req) {
    try {
      const id = req.params.id;

      const result = await deletePerson(id);
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