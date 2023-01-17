import React from 'react';

import Pick from '../components/Pick.js';

export default function Controls({
  head, handleChange
}) {
  return (
    <div className="controls">
      <Pick 
        label="Head" options = {['stoic', 'yelling', 'vampire']} value={head} onChange={(e) =>
          handleChange ('head', e.target.value)} />
    </div>
  );
}