import { useDrop } from 'react-dnd';

const DropZone = ({ onDrop, children }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'card',
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
      backgroundColor: isActive ? 'gray' : 'white',
      // keep the same width as the children
      width: '150px',
      minHeight: '100px',
    }}
      className="dropZone"
    >
      {children}
    </div>
  );
};

export default DropZone;