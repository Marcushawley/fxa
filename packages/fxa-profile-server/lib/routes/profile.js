/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const Joi = require('joi');

module.exports = {
  auth: {
    strategy: 'oauth',
    scope: ['profile', 'profile:write']
  },
  response: {
    schema: {
      email: Joi.string().required(),
      uid: Joi.string().required()
    }
  },
  handler: function email(req, reply) {
    reply({
      email: req.auth.credentials.email,
      uid: req.auth.credentials.user
    });
  }
};


