import { useEffect, useRef, useState } from "react";

function RandomColorGenerator() {
  const [isHexColorTrue, setHexColorTrue] = useState(true);
  const [hexColor, setHexColor] = useState("#112233");
  const [rgbColor, setRgbColor] = useState("rgb(200,20,30)");

  const CreatHexColor = () => {
    setHexColorTrue(true);
  };
  const CreateRgb = () => {
    setHexColorTrue(false);
  };

  const generateRandomColor = () => {
    if (isHexColorTrue) {
      generateHexcolor();
    } else {
      GenerateRgbColor();
    }
  };

  function GenerateRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Return the RGB color string
    // console.log(`rgb(${r}, ${g}, ${b})`);

    setRgbColor(`rgb(${r}, ${g}, ${b})`);
  }

  const generateHexcolor = () => {
    let string = "0123456789ABCDEF";
    let color = "#";

    for (let i = 1; i <= 6; i++) {
      color += string.charAt(Math.floor(Math.random() * string.length));
    }
    console.log(color);

    setHexColor(color);
  };

  const bodyRef = useRef();

  useEffect(() => {
    bodyRef.current.style.backgroundColor = isHexColorTrue
      ? hexColor
      : rgbColor;
  }, [isHexColorTrue, hexColor, rgbColor]);

  return (
    <div
      ref={bodyRef}
      className={`h-screen w-screen  text-white flex flex-col items-center`}
    >
      <div className="space-x-4 mt-5 mb-40">
        <button
          onClick={CreatHexColor}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Hex Color
        </button>
        <button
          onClick={CreateRgb}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Rgb Color
        </button>
        <button
          onClick={generateRandomColor}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate Random Color
        </button>
      </div>

      <h2 className="text-3xl mb-5">
        {isHexColorTrue ? "Hex Color " : "RGB Color"}
      </h2>
      <h1 className="text-4xl">{isHexColorTrue ? hexColor : rgbColor}</h1>
    </div>
  );
}

export default RandomColorGenerator;
