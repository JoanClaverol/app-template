import { useRef, useState } from "react";
// import utils.js
import exportAsImage from "../utils/exportAsImage.js";

const MemeCreator = ({ meme }) => {

  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [fontSize, setFontSize] = useState("25px");
  const exportRef = useRef();

  const handleTopTextChange = (e) => {
    setTopText(e.target.value);
  }
  const handleBottomTextChange = (e) => {
    setBottomText(e.target.value);
  }
  const handleFontSizeChange = (e) => {
    setFontSize(`${parseInt(e.target.value)}px`);
  }

  const TextStyle = (
    { position }) => {
    const absolute = {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      margin: '0px',
      fontFamily: 'Impact',
      fontSize,
      color: 'white',
      textShadow: '2px 2px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black',
      maxWidth: `${meme.width}px`,
      wordBreak: 'break-all',
    };

    return position === 'top'
      ? { ...absolute, top: '0', marginTop: '10px' }
      : { ...absolute, bottom: '0', marginBottom: '10px' };
  };

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <input type="button" value="Clean" onClick={() => {
          setTopText("");
          setBottomText("");
          setFontSize("25px");
        }} />
        <input type="text" placeholder="Top Text"
          onChange={handleTopTextChange} />
        <input type="text" placeholder="Bottom Text"
          onChange={handleBottomTextChange} />
        <input type="number" placeholder={fontSize}
          onChange={handleFontSizeChange}
          min="25" max="100"
        />
        <input type="button" value="Export"
          onClick={() => exportAsImage(exportRef.current, "test.png")} />
      </div>
      <div style={{
        position: 'relative',
        margin: 'auto',
        marginTop: '20px',
        maxWidth: '1200px',
        maxHeight: '700px',
        textAlign: 'center',
        marginBottom: '20px',
      }} className="generatedMeme" ref={exportRef}>
        <p style={TextStyle({ position: 'top' })}>
          {topText.toUpperCase()}
        </p>
        <img src={meme.url} alt="meme" style={{
          maxHeight: '700px',
          maxWidth: '700px',
          margin: 'auto',
        }}
        />
        <p style={TextStyle({ position: 'bottom' })}>
          {bottomText.toUpperCase()}
        </p>
      </div>
    </>
  );
}

export default MemeCreator;