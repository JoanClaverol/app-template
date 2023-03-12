import { useState } from "react";
import SwipeToConfirm from "./components/SwipeToConfirm";

function App() {

  const [startX, setStartX] = useState(null);
  const [swiped, setSwiped] = useState(false);

  return (
    <div className="App">
      <SwipeToConfirm />
    </div>
  );
}

export default App;
