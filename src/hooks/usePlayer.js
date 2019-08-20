import {useState} from 'react';

import {randomTetromio} from '../tetrominos';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: {x: 0, y: 0},
    tetromino: randomTetromio().shape,
    collided: false,
  });

  return [player];
}