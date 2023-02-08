import { useState } from 'react';
import Board from './components/Board.js';
import CardsCreator from './components/CardsCreator.js';
import Header from './components/Header.js';
import data from './data.js';

function App() {

  const [cards, setCards] = useState(data);

  return (
    <div className="App">
      <Header />
      {/* <CardsCreator /> */}
      <Board data={data} setCards={setCards} />
    </div>
  );
}

export default App;
