export default function makeAddPersonCtrl({ addPerson }) {
  return async function post(req) {
    try {
      const body = req.body;
      const result = await addPerson(body);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        body: {
          statusCode: 201,
          data: result,
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