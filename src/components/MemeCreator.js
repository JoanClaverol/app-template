import { useState } from "react";

const MemeCreator = ({ meme }) => {

  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const handleTopTextChange = (e) => {
    setTopText(e.target.value);
  }

  const handleBottomTextChange = (e) => {
    setBottomText(e.target.value);
  }

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <input type="text" placeholder="Top Text" onChange={handleTopTextChange} />
        <input type="text" placeholder="Bottom Text" onChange={handleBottomTextChange} />
      </div>
      <div style={{
        position: 'relative',
        // center all the elements
        margin: 'auto',
        // add top margin
        marginTop: '20px',
        // define max width and height
        maxWidth: '700px',
        maxHeight: '700px',
        // align center
        textAlign: 'center',
        marginBottom: '20px',
      }}>
        <p style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          margin: '5px',
          fontFamily: 'Impact',
          fontSize: '200%',
        }}>{topText.toUpperCase()}</p>
        <img src={meme.url} alt="meme" style={{
          maxHeight: '700px',
          maxWidth: '700px',
          // center the image
          margin: 'auto'
        }}
        />
        <p style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          margin: '5px',
          fontFamily: 'Impact',
          fontSize: '200%',
        }}>{bottomText}</p>
      </div>
    </>
  );
}

export default MemeCreator;