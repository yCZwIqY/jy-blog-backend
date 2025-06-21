// src/middlewares/response-transformer.ts
module.exports = () => {
  return async (ctx, next) => {
    await next();

    const isTransformable =
      ctx.request.url.startsWith('/api/articles') ||
      ctx.request.url.startsWith('/api/categories');

    if (ctx.body && ctx.body.data && isTransformable) {
      console.log('hello from postResponseTransform hook!');

      const flatten = (entry) => ({
        id: entry.id,
        ...entry.attributes,
      });

      if (Array.isArray(ctx.body.data)) {
        ctx.body = ctx.body.data.map(flatten);
      } else {
        ctx.body = flatten(ctx.body.data);
      }
    }
  };
};
