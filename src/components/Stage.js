import React from 'react';
import Cell from './Cell';

const Stage = ({stage}) => {
  return (
    <div>
      {stage.map(row => row.map((cell, x) => <Cell key={x} type={[0]} />))}
    </div>
  )
}

export default Stage
