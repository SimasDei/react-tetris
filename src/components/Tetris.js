import React, {useState} from 'react';

import {usePlayer} from '../hooks/usePlayer';
import {useStage} from '../hooks/useStage';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

import StyledTetris, {StyledTetrisWrapper} from './styles/StyledTetris';

const Tetris = () => {

  const [dropTIme, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  return (
    <StyledTetrisWrapper>
    <StyledTetris>
      <Stage stage={stage} />
      <aside>
      <div>
        <Display text={'Score'} />
        <Display text={'Rows'} />
        <Display text={'Levels'} />
      </div>
      <StartButton />
      </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris
