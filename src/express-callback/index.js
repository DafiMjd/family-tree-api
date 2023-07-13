export default function makeExpressCallback(controller) {
  return async (req, res, error) => {

    // const httpRequest = {
    //   body: req.body,
    //   query: req.query,
    //   params: req.params,
    //   ip: req.ip,
    //   method: req.method,
    //   path: req.path,
    //   headers: {
    //     "Content-Type": req.get("Content-Type"),
    //     "User-Agent": req.get("User-Agent"),
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // };

    controller(req, error)
      .then((httpResponse) => {
        if (httpResponse.headers) {
          res.set("Access-Control-Allow-Origin", "*");
          res.set(httpResponse.headers);
        }
        res.type("json");
        res.status(httpResponse.statusCode).send(httpResponse.body);
      })
      .catch((e) => res.sendStatus(500));
  };
};
