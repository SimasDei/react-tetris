import React, {useState} from 'react';

import {usePlayer} from '../hooks/usePlayer';
import {useStage} from '../hooks/useStage';
import {createStage} from '../gameHelpers';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

import StyledTetris, {StyledTetrisWrapper} from './styles/StyledTetris';

const Tetris = () => {

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  const updatePlayerPos = () => {
    return;
  }
  const resetPlayer = () => {
    return;
  }

  const movePlayer = direction => {
    updatePlayerPos({x: direction, y: 0});
  };
  const startGame = () => {
    setStage(createStage());
    resetPlayer();
  }
  const drop = () => {
    updatePlayerPos({x: 0, y: 0, collided: false});
  }
  const dropPlayer = () => {
    drop();
  }
  const move = ({keyCode}) => {
    console.log(keyCode);
    if (gameOver) return;
    if (keyCode === 37) {
      movePlayer(-1);
    } else if (keyCode === 39) {
      movePlayer(1);
    } else if (keyCode === 40) {
      dropPlayer(-1);
    } 
  }


  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
    <StyledTetris>
      <Stage stage={stage} />
      <aside>
      {gameOver ? (
        <Display gameOver={gameOver} text={'GameOver'} />
      ) : (
        <div>
        <Display text={'Score'} />
        <Display text={'Rows'} />
        <Display text={'Levels'} />
      </div>
      )}
      <StartButton onClick={startGame} />
      </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris
