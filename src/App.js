import useFetchData from "./components/useFetchData";
import MemeCreator from "./components/MemeCreator";
import { useState } from "react";


function App() {

  const { data, loading, error } = useFetchData("https://api.imgflip.com/get_memes");
  const [memeDisplayed, setMemeDisplayed] = useState(null);
  const shuffleMemes = () => {
    // get a random element from data.data.memes[0]
    setMemeDisplayed(
      // create an element that contains a url, a height and a width
      {
        url: data.data.memes[Math.floor(Math.random() * data.data.memes.length)].url,
        height: data.data.memes[Math.floor(Math.random() * data.data.memes.length)].height,
        width: data.data.memes[Math.floor(Math.random() * data.data.memes.length)].width,
      }
    );
  }

  const handleFileUpload = (e) => {
    // set the meme displayed
    setMemeDisplayed(
      {
        url: URL.createObjectURL(e.target.files[0]),
        // find a way to get the height and width of the image
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
    // add top margin
    marginTop: '20px',
    // add marginright and left
    margin: '0 5px',
    // add padding
    padding: '5px',
    // add border
    border: 'none',
    // add border radius
    borderRadius: '5px',
    // add background color
    backgroundColor: 'lightblue',
    // add cursor
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
              // color white
              color: 'white',
            }}>Meme Creator</h1>
            <div
              className="inputsUser"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                // add elements one next to the other
                justifyContent: "center",
                // margin bottom
                marginBottom: '20px',
              }}>
              <button onClick={shuffleMemes} style={buttonStyle}>Shuffle</button>
              {/* input file */}
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
