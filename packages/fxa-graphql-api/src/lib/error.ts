/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ApolloError } from 'apollo-server';

export function CatchGatewayError(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = async function (...args: any[]) {
    try {
      return await originalMethod.apply(this, args);
    } catch (err) {
      if (err.code && err.errno && err.message) {
        // Auth Server error
        throw new ApolloError(err.message, err.code, { errno: err.errno });
      } else if (err.status && err.stack && err.response) {
        // Profile Server error
        throw new ApolloError(err.message, err.status, {
          errno: err.response.body?.errno,
        });
      } else {
        throw err;
      }
    }
  };
  return descriptor;
}
