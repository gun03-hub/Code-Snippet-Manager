import React from 'react';

function Snippet({ snippet }) {
  return (
    <div className="snippet">
      <h3>{snippet.name}</h3>
      <pre>{snippet.code}</pre>
      <div className="links">
        <a>Edit</a>
        <a>Delete</a>
      </div>
    </div>
  );
}

export default Snippet;