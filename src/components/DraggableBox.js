

import { useDrag } from 'react-dnd';
import Card from './Card';

const DraggableBox = ({ id, card, status }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: () => ({ id, status }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag}
      style={{ opacity }}
      className="draggableBox">
      <Card card={card} />
    </div>
  );
};

export default DraggableBox;

