const Card = ({ card, state, states, setCards, data }) => {

  const handleChange = (e) => {
    const newState = e.target.value;
    // keep time of state change
    setCards(data.map((tempCard) => {
      if (tempCard.id === card.id) {
        card.stateChangeTime = new Date().toLocaleString();
        card.state = newState;
      }
      return card;
    }));
  };

  return (
    <div className="card" key={card.id}>
      <h3>{card.title}</h3>
      <select
        name="state"
        id="state"
        value={state}
        onChange={handleChange}
      >
        {states.map((state, index) =>
          <option value={state} key={index}>{state}</option>)}
      </select>

    </div>
  );
}

export default Card;