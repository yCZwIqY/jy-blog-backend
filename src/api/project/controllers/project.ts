/**
 * project controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::project.project');

module.exports = factories.createCoreController('api::project.project', ({strapi}) => ({
  async findOne(ctx) {
    const {id: slug} = ctx.params;
    const {query} = ctx;
    if (!query.filters) { // @ts-ignore
      query.filters = {}
    }
    // @ts-ignore
    query.filters.slug = {'$eq': slug}
    const entity = await strapi.service('api::project.project').find(query);
    // @ts-ignore
    const {results} = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(results[0]);
  }
}))
