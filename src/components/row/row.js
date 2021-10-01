import React from 'react';

export const Row = ({left, right}) => {
  return (
    <div className="row mb2 mainBlock">
      <div className="col-md-6 short">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  )
}