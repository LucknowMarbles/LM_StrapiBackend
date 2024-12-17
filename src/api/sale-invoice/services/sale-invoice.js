'use strict';

/**
 * sale-invoice service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sale-invoice.sale-invoice');
