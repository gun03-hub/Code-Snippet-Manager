import React from 'react';
import Snippets from './Snippets';

function Home() {
  const snippets = [
    {
      id: 1,
      name: 'Hello World',
      code: 'console.log("Hello World")',
    },
    {
      id: 2,
      name: 'Add Two Numbers',
      code: 'const sum = (a, b) => a + b;',
    },
  ];

  return <Snippets snippets={snippets} />;
}

export default Home;