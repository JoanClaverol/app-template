const Card = ({ card }) => {

  return (
    <div className="card">
      <div className="card-header">
        <div>{card.title}</div>
      </div>
    </div>

  );
}

export default Card;