/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react';

type LinkExternalProps = {
  className?: string;
  href: string;
  children: React.ReactNode;
  title?: string;
};

export const LinkExternal = ({
  className,
  href,
  children,
  title,
}: LinkExternalProps) => (
  <a
    data-testid="link-external"
    target="_blank"
    rel="noopener noreferrer"
    {...{
      className,
      href,
      title,
    }}
  >
    {children}
  </a>
);

export default LinkExternal;
