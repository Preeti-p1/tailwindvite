import { useState } from "react";
import Card from "./components/card";

function App() {
  const [color, setColor] = useState("blue");

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Background Change
      </h1>
      <div
        className="w-full  h-screen duration=200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom=-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-cecnter gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("pink");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              pink
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
          </div>
        </div>
      </div>

      <Card username="preeti" btnclick="visit me " />
      <Card btnclick="visit me " />
    </>
  );
}

export default App;
