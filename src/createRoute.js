import express from 'express';

const router = express.Router();

// Only support get method :)
const validMethods = [
  'get',
  // 'post',
  // 'put',
  // 'delete',
  // 'patch',
];

export default function (routeConfig) {
  const { apis } = routeConfig;

  if (!apis || (Array.isArray(apis) && !apis.length)) {
    throw new Error('Invalid routes configuration.');
  }

  apis.forEach(api => {
    const method = api.method.toLowerCase();
    if (validMethods.indexOf(method) === -1) {
      throw new Error(`Invalid http method ${api.method}`);
    }

    router[method](api.path, (req, res, next) => {
      return res.json(api.data);
    });

    if (api.withParam) {
      router[method](`${api.path}/:id`, (req, res, next) => {
        const data = api.data.filter(data => data.id = req.params.id)[0] || {};
        return res.json(data);
      });
    }
  });

  return router;
}