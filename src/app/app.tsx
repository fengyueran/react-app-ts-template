import React from 'react';

import { IntlProviderWrapper } from 'src/components';
import { Router } from './router';

export const App = () => (
  <IntlProviderWrapper>
    <Router />
  </IntlProviderWrapper>
);
