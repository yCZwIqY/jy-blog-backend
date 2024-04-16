/**
 * post controller
 */

import {factories} from '@strapi/strapi'

export default factories.createCoreController('api::post.post');

module.exports = factories.createCoreController('api::post.post', ({strapi}) => ({
  async findOne(ctx) {
    const {id: slug} = ctx.params;
    const {query} = ctx;
    if (!query.filters) { // @ts-ignore
      query.filters = {}
    }
    // @ts-ignore
    query.filters.slug = {'$eq': slug}
    const entity = await strapi.service('api::post.post').find(query);
    // @ts-ignore
    const {results} = await this.sanitizeOutput(entity, ctx);
    console.log(parseInt(results[0].views) + 1)

    await strapi.entityService.update('api::post.post', results[0].id, {
      data: {
        // @ts-ignore
        views: parseInt(results[0].views) + 1
      }
    })

    return this.transformResponse(results[0]);
  },
}));
