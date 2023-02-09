import useFetchData from "./components/useFetchData";
import MemeCreator from "./components/MemeCreator";
import { useState } from "react";


function App() {

  const { data, loading, error } = useFetchData("https://api.imgflip.com/get_memes");
  const [memeDisplayed, setMemeDisplayed] = useState(null);
  const shuffleMemes = () => {
    setMemeDisplayed(
      {
        url: data.data.memes[Math.floor(Math.random() * data.data.memes.length)].url,
        height: data.data.memes[Math.floor(Math.random() * data.data.memes.length)].height,
        width: data.data.memes[Math.floor(Math.random() * data.data.memes.length)].width,
      }
    );
  }

  const handleFileUpload = (e) => {
    setMemeDisplayed(
      {
        url: URL.createObjectURL(e.target.files[0]),
        height: 500,
        width: 500,
      }
    );
    e.target.value = null;
  }

  if (!loading && data.data.memes.length > 0 && !memeDisplayed) {
    shuffleMemes();
  }

  const buttonStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '20px',
    margin: '0 5px',
    padding: '5px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'lightblue',
    cursor: 'pointer',
  };


  return (
    <div className="App">
      {error ?
        <p>Error: {error.message}</p> :
        memeDisplayed ?
          <>
            <h1 style={{
              textAlign: "center",
              color: 'white',
            }}>Meme Creator</h1>
            <div
              className="inputsUser"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                justifyContent: "center",
                marginBottom: '20px',
              }}>
              <button onClick={shuffleMemes} style={buttonStyle}>Shuffle</button>
              <input type="file" id="input" multiple
                style={buttonStyle} onChange={handleFileUpload} />
            </div>
            <MemeCreator meme={memeDisplayed} />
          </> :
          <p>Loading...</p>
      }

    </div>
  );
}

export default App;
