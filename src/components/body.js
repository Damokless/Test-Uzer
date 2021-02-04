import React, { useState } from "react";
import Chart from "react-google-charts";
import "../assets/styles/Components.css";

function Body() {
  const [hide, setHide] = useState(false)
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);
  let buttonstyle = ""
  let buttonoption = ""
  let styledisable = "cursor-not-allowed buttonHeavy50 w-36 h-10 rounded"
  let styleenable = "buttonHeavy100 w-36 h-10 rounded"
  let buttondisable = true
  let buttonenable = false
  
  if (!x || !y) {
    buttonstyle = styledisable
    buttonoption = buttondisable
  } else {
    buttonstyle = styleenable
    buttonoption = buttonenable
    setHide(true)
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
              id="xInput"
              name="x"
              type="number"
              min="0"
              placeholder="X"
              onChange={({ target: { value } }) => setX(value)}
            ></input>
            <input
              className="inputroman text-black w-36 h-10 ring-0 rounded p-5 m-2"
              id="yInput"
              name="y"
              type="number"
              min="0"
              placeholder="Y"
              onChange={({ target: { value } }) => setY(value)}
            ></input>
            <button
              className={buttonstyle}
              type="submit"
              id="submitButton"
              disabled= {buttonoption}
            >
              Visualiser
            </button>
          </div>
        </form>
        <Chart
          id="donutChart"
          className=""
          width={"250px"}
          height={"250px"}
          chartType="PieChart"
          loader={<div className="p-10">Loading Chart</div>}
          data={[
            ["Value", "Numbers"],
            ["X", x ],
            ["Y", y ],
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
          rootProps={{ "data-testid": "6" }}
        />
      </div>
    </>
  );
}
export default Body;
