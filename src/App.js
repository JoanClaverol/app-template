import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
};

const DropZone = ({ onDrop, children }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'box',
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      item: monitor.getItem(),
    }),
  });

  const isActive = canDrop && isOver;

  return (
    <div ref={drop} style={{
      ...style,
      backgroundColor: isActive ? 'gray' : 'white',
      // keep the same width as the children
      width: '230px',
    }}>
      {children}
    </div>
  );
};

const DraggableBox = ({ id, text, onDrop, zone }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'box',
    item: () => ({ id, zone }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {text}
    </div>
  );
};

const App = () => {
  const [boxes, setBoxes] = React.useState([
    { id: 1, text: 'Drag me to another zone', zone: 'zone-1' },
    { id: 2, text: 'Drag me to another zone', zone: 'zone-1' },
    { id: 3, text: 'Drag me to another zone', zone: 'zone-2' },
    { id: 4, text: 'Drag me to another zone', zone: 'zone-3' },
  ]);

  const handleDrop = (boxId, newZone) => {
    console.log('boxId', boxId, 'newZone', newZone);
    const updatedBoxes = boxes.map((box) => (box.id === boxId ? { ...box, zone: newZone } : box));
    console.log('updatedBoxes', updatedBoxes);
    setBoxes([...updatedBoxes]);
  };

  // render 3 zones
  const zones = ['zone-1', 'zone-2', 'zone-3'];

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {zones.map((zone, index) => (
          <DropZone key={index} onDrop={(item) => handleDrop(item.id, zone)}>
            {boxes
              .filter((box) => box.zone === zone)
              .map((box) => (
                <DraggableBox key={box.id} id={box.id} text={box.text} />
              ))
            }
          </DropZone>
        ))}
      </div>
    </DndProvider>
  );
};

export default App;
