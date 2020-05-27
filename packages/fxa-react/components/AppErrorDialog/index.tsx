/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react';

const AppErrorDialog = ({
  error,
  classes = {},
}: {
  error: Error;
  classes?: {
    base?: string;
    container?: string;
    header?: string;
    text?: string;
  };
}) => {
  return (
    <div className={classes.base}>
      <div className={classes.container}>
        <h2 className={classes.header} data-testid="error-loading-app">
          General application error
        </h2>
        <p className={classes.text}>
          Something went wrong. Please try again later.
        </p>
      </div>
    </div>
  );
};

export default AppErrorDialog;
