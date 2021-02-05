import React, { useState } from "react";
import Chart from "react-google-charts";
import "../assets/styles/Components.css";

function Body() {
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);
  let dataX = parseFloat(x);
  let dataY = parseFloat(y);
  let buttonstyle = "";
  let buttonoption = "";
  let styledisable = "cursor-not-allowed buttonHeavy50 w-36 h-10 rounded";
  let styleenable = "buttonHeavy100 w-36 h-10 rounded";
  let buttondisable = true;
  let buttonenable = false;

  if (!x || !y) {
    buttonstyle = styledisable;
    buttonoption = buttondisable;
  } else {
    buttonstyle = styleenable;
    buttonoption = buttonenable;
  }

  return (
    <>
      <div className="m-5">
        <h1>Bienvenue sur votre espace Client </h1>
        <h2>Renseignez une valeur pour chaque champs </h2>
      </div>
      <div>
        <form>
          <div className="p-8">
            <input
              className="inputroman text-black w-36 h-10 rounded border-transparent p-5 m-2"
              type="number"
              min="0"
              placeholder="X"
              onChange={({ target: { value } }) => setX(value)}
            ></input>
            <input
              className="inputroman text-black w-36 h-10 ring-0 rounded p-5 m-2"
              type="number"
              min="0"
              placeholder="Y"
              onChange={({ target: { value } }) => setY(value)}
            ></input>
          </div>
        </form>
        <div className="p-10">
          <button
            className={buttonstyle}
            type="submit"
            disabled={buttonoption}
          >
            Visualiser
          </button>
        </div>
        <div className="mx-16">
          <Chart
            width={"250px"}
            height={"250px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Value", "Numbers"],
              ["X", dataX],
              ["Y", dataY],
            ]}
            options={{
              legend: "none",
              // Just add this option
              pieHole: 0.5,
              slices: {
                0: { color: "#FFC953" },
                1: { color: "grey" },
              },
            }}
            rootProps={{ "data-testid": "3" }}
          />
        </div>
      </div>
    </>
  );
}
export default Body;
