import useFetchData from "./components/useFetchData";
import MemeCreator from "./components/MemeCreator";
import { useState } from "react";


function App() {

  const { data, loading, error } = useFetchData("https://api.imgflip.com/get_memes");

  const [memeDisplayed, setMemeDisplayed] = useState(null);
  const shuffleMemes = () => {
    // get a random element from data.data.memes[0]
    setMemeDisplayed(data.data.memes[Math.floor(Math.random() * data.data.memes.length)]);
  }

  if (!loading && data.data.memes.length > 0 && !memeDisplayed) {
    shuffleMemes();
  }

  return (
    <div className="App">
      {error ?
        <p>Error: {error.message}</p> :
        memeDisplayed ?
          <>
            <h1 style={{ textAlign: "center" }}>Meme Creator</h1>
            <button
              onClick={shuffleMemes}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // center the button
                margin: 'auto',
                // add top margin
                marginTop: '20px',
                // add padding
                padding: '10px',
                // add border
                border: '1px solid black',
                // add border radius
                borderRadius: '5px',
                // add background color
                backgroundColor: 'lightblue',
                // add cursor
                cursor: 'pointer',
                // margin bottom
                marginBottom: '20px',
              }}
            >Generate another meme</button>
            <MemeCreator meme={memeDisplayed} />

          </> :
          <p>Loading...</p>
      }

    </div>
  );
}

export default App;
