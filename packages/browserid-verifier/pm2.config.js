/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

module.exports = {
  apps: [
    {
      name: 'browserid',
      script: 'server.js',
      cwd: __dirname,
      env: {
        PORT: '5050',
        IP_ADDRESS: '0.0.0.0',
        FORCE_INSECURE_LOOKUP_OVER_HTTP: 'true',
      },
      filter_env: ['npm_'],
      max_restarts: '1',
      min_uptime: '2m',
    },
  ],
};
