import React from 'react';
import { withPrefix } from 'gatsby';

const IconVelog = () => (
  <img
    src={withPrefix('/velog-logo.png')}
    alt="Velog"
    width="24"
    height="24"
    className="icon-velog"
    style={{ display: 'block', verticalAlign: 'middle' }}
  />
);

export default IconVelog;
