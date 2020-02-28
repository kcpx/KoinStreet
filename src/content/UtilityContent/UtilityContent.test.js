import React from 'react';

import ReactDOM from 'react-dom';

import { MemoryRouter } from 'react-router-dom';

import BlockchainContent from './BlockchainContent';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    (
      <MemoryRouter>
        <BlockchainContent />
      </MemoryRouter>
    ),
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
