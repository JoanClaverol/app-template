import { useRef, useState } from "react";
// import utils.js
import exportAsImage from "../utils/exportAsImage.js";

const MemeCreator = ({ meme }) => {

  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [fontSize, setFontSize] = useState("25px");
  const exportRef = useRef();

  const handleExport = () => {

  };


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
        {/* add an input to clean all the other inputs */}
        <input type="button" value="Clean" onClick={() => {
          setTopText("");
          setBottomText("");
          setFontSize("25px");
        }} />
        <input type="text" placeholder="Top Text"
          onChange={handleTopTextChange} />
        <input type="text" placeholder="Bottom Text"
          onChange={handleBottomTextChange} />
        {/* input that stores the value into the variables fontSize to define the size of teh text by introducing a value*/}
        <input type="number" placeholder={fontSize}
          onChange={handleFontSizeChange}
          // min value accepted is 10 max is 100
          min="25" max="100"
        />
        <input type="button" value="Export"
          onClick={() => exportAsImage(exportRef.current, "test.png")} />
      </div>
      <div style={{
        position: 'relative',
        // center all the elements
        margin: 'auto',
        // add top margin
        marginTop: '20px',
        // define max width and height
        maxWidth: '1200px',
        maxHeight: '700px',
        // align center
        textAlign: 'center',
        marginBottom: '20px',
      }} className="generatedMeme" ref={exportRef}>
        <p style={TextStyle({ position: 'top' })}>
          {topText.toUpperCase()}
        </p>
        <img src={meme.url} alt="meme" style={{
          maxHeight: '700px',
          maxWidth: '700px',
          // center the image
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