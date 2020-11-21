import Field from './field';
import Drawer from './drawer';
import Tetris from './tetris';

const template =
`<main style="clear:both">
  <section style="text-align:center;">
    <canvas id="_tetris" width="150" height="300"></canvas>
  </section>
  <section id="_gameover" style="text-align:center;">
    <button style="padding: 1% 2% 1% 2%;" id="_newGame">Restart</button>
  </section>
  <section style="text-align:center;padding:1% 10% 1% 10%;">
    <div style="padding:1%;clear:both;font-size:1em;margin-bottom:2%;overflow:hidden">
      <div style="float:left;">SCORE</div>
      <div style="float:right;" id="_score">0</div>
    </div>
    <div style="padding:1%;clear:both;font-size:1em;margin-bottom:2%;overflow:hidden;">
      <div style="float:left;">TIME</div>
      <div style="float:right;" id="_time">0</div>
    </div>
    <div style="clear:both;font-size:1em;overflow:hidden;">
      <canvas style="margin-top:1%;" id="_nextPiece" width="60" height="30"></canvas>
    </div>
  </section>
</main>`;

export default class TetrisBuilder {
  constructor(container, config) {
    container.innerHTML = template;
    this.container = container;
    this.config = config;
    this.scoreElement = document.getElementById('_score');
    this.timeElement = document.getElementById('_time');
    this.field = new Field(this.config.rows, this.config.columns);
    this.drawer = new Drawer(document.getElementById('_tetris'), this.field, this.config.blockSize, this.config.blankColor);
    this.tetris = new Tetris(this.drawer, this.field, window, this.config);
    this.fieldNextPiece = new Field(5, 5);
    this.drawerNextPiece = new Drawer(document.getElementById('_nextPiece'), this.fieldNextPiece, 15, this.config.blankColor);
    this.tetris.onGameOver = this.onGameOver.bind(this);
    this.tetris.onElapsedSecond = this.onElapsedSecond.bind(this);
    this.tetris.onRandomTetromino = this.onRandomTetromino.bind(this);
    this.newGame = this.newGame.bind(this);
    this.destroyGame = this.destroyGame.bind(this);
    document.getElementById('_newGame').addEventListener('click', this.newGame);
    this.tetris.onUpdateScore = (score) => {
      this.scoreElement.innerText = score;
    };   
  }

  onGameOver() {
  }

  onElapsedSecond(totalSeconds) {
    this.timeElement.innerText = totalSeconds;
  }

  onRandomTetromino(tetromino) {
    this.drawerNextPiece.reset();
    this.drawerNextPiece.drawTetromino(tetromino);  
  }

  newGame() {
    this.tetris.setGameOver();
    this.scoreElement.innerText = this.timeElement.innerText = 0;
    this.tetris.start();
    this.tetris.setListeners();
  }
  
  destroyGame() {
    this.tetris.setGameOver();
    this.container.innerHTML = '';
  }  
}

