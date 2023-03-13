import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableBox from './components/DraggableBox';
import DropZone from './components/DropZone';
import cardsData from './data/cards';

const App = () => {
  // select the first two elements from the cardsData array
  const [cards, setCards] = useState(cardsData); // .slice(0, 2) 
  console.log('cards');

  const handleDrop = (cardId, newStatus) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        const newChange = {
          date: new Date().toISOString(),
          user: "Jane Smith", // replace with actual user data
          status: newStatus,
        };
        const updatedChanges = [...card.changes, newChange];
        return { ...card, status: newStatus, changes: updatedChanges };
      }
      return card;
    });
    console.log(updatedCards);
    setCards(updatedCards);
  };
  // render 3 zones
  const allStatus = ['backlog', 'todo', 'doing', 'review', 'done'];

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {allStatus.map((status, index) => (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }} key={index}>
            <h3>{status}</h3>
            <DropZone key={index} onDrop={(item) => handleDrop(item.id, status)}>
              {cards
                .filter((card) => card.status === status)
                .map((card) => (
                  <DraggableBox key={card.id} id={card.id} card={card} />
                ))
              }
            </DropZone>
          </div>
        ))}
      </div>
    </DndProvider >
  );
};

export default App;
