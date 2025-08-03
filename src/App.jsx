import "./App.css";
import { Cell } from "./components/cell/Cell";
import { GameProvider } from "./state/game-state/game-provider";
import { GameBoard } from "./components/game-board/GameBoard";

function App() {
  return (
    <>
      <main>
        <h1 style={{ textAlign: "center" }}>tic tac toe</h1>
        <div className="main-app">
          <GameProvider>
            <GameBoard />
          </GameProvider>
        </div>
      </main>
    </>
  );
}

export default App;
