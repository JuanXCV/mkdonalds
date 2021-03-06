function builDom(html) {
  var div = document.createElement('div')
  div.innerHTML = html;
  return div.children[0];
}
function main() {
  var mainContainerElement = document.querySelector('#main-container')
  
  //Splash
  var splashElement = null;
  var splashButton = null;

  var handleSplashClick = function() {
    destroySplash();
    buildGame();
  }

  function buildSplash() {
    splashElement = builDom(`
      <main class="splash container">
        <div class='button make-button'>MAKE!</div>
      </main>
    `)
    mainContainerElement.appendChild(splashElement)
    splashButton = document.querySelector('.make-button')
    splashButton.addEventListener('click', handleSplashClick)
  }
  function destroySplash() {
    splashButton.removeEventListener('click', handleSplashClick)
    splashElement.remove();
  }

  //Game

  var game = null;
  var handleGameOver = function(){
    destroyGame()
    buildGameOver(game.score)
  }
  function buildGame() {
    game = new Game(mainContainerElement);
    game.onOver(handleGameOver);
  }
  function destroyGame() {
    game.destroy()
  }

  //GameOver

  var gameOverElement = null;
  var gameOverButton = null;

  var handleGameOverClick = function() {
    destroyGameOver()
    buildGame()
  }
  function buildGameOver(score) {
    gameOverElement = builDom(`
    <main class="gameover container">
      <h1 class="gameover-title">Game Over</h1>
      <p>Score: <span class="score"></span></p>
      <div class='button button-gameover'>REMAKE!</div>
    </main>
    `)
    mainContainerElement.appendChild(gameOverElement);
    gameOverButton = document.querySelector('.button-gameover')
    gameOverButton.addEventListener('click', handleGameOverClick)

    var scoreElement = document.querySelector('.score')
    scoreElement.innerText = score;
  }
  function destroyGameOver() {
    gameOverButton.removeEventListener('click', handleGameOverClick)
    gameOverElement.remove()
  }
  buildSplash ();
}
document.addEventListener('DOMContentLoaded', main)