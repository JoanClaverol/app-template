import Card from "./Card";

const Board = ({ data, setCards }) => {

  const states = ["backlog", "todo", "doing", "review", "done"];

  return (
    <div className="board">
      {states.map((state, index) => {
        return (
          <div className="state" key={index}>
            <h2>{state.charAt(0).toUpperCase() + state.slice(1)}</h2>
            {data.filter((card) => card.state === state)
              .map((card) =>
                <Card
                  setCards={setCards}
                  data={data}
                  card={card}
                  state={state}
                  states={states}
                  key={card.id} />
              )}
          </div>
        )
      })}
    </div>
  );
}

export default Board;