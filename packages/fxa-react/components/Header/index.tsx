/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { ReactElement } from 'react';

type HeaderProps = {
  left: ReactElement;
  right: ReactElement;
};

export const Header = (props: HeaderProps) => {
  return (
    <header role="banner" className="header-page sticky top-0 bg-grey-50">
      <div className="px-6 tablet:px-8 py-4 flex justify-between">
        <div className="flex">{props.left}</div>
        <div className="flex">{props.right}</div>
      </div>
    </header>
  );
};

export default Header;
