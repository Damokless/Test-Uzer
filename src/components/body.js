import React from "react";
import Chart from "react-google-charts";
import "../assets/styles/Components.css";

function Body() {
  let x = ""
  let y = ""

  function handleChange1(i) {
    if (i.target.value === null || i.target.value === "") {
      document.querySelector("button").classList.remove("buttonHeavy100");
      document.querySelector("button").classList.add("buttonHeavy50");
      document.querySelector("button").classList.add("cursor-not-allowed");
      document.getElementById("submitButton").disabled = true;
    } else {
      document.querySelector("button").classList.remove("buttonHeavy50");
      document.querySelector("button").classList.add("buttonHeavy100");
      document.querySelector("button").classList.remove("cursor-not-allowed");
      document.getElementById("submitButton").disabled = false;
    }
  }

  function handleChange2(j) {
    if (j.target.value == null || j.target.value === "") {
      document.querySelector("button").classList.remove("buttonHeavy100");
      document.querySelector("button").classList.add("buttonHeavy50");
      document.querySelector("button").classList.add("cursor-not-allowed");
      document.getElementById("submitButton").disabled = true;
    } else {
      document.querySelector("button").classList.remove("buttonHeavy50");
      document.querySelector("button").classList.add("buttonHeavy100");
      document.querySelector("button").classList.remove("cursor-not-allowed");
      document.getElementById("submitButton").disabled = false;
    }
  }

  function submitData() {
     x = document.getElementById("xInput").value
     y = document.getElementsById("yInput").value
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
              onChange={handleChange1}
            ></input>
            <input
              className="inputroman text-black w-36 h-10 ring-0 rounded p-5 m-2"
              id="yInput"
              name="y"
              type="number"
              min="0"
              placeholder="Y"
              onChange={handleChange2}
            ></input>
            <button
              className="cursor-not-allowed buttonHeavy50 w-36 h-10 rounded"
              type="submit"
              id="submitButton"
              disabled="disabled"
              onClick={submitData}
            >
              Visualiser
            </button>
          </div>
        </form>
        <Chart id="donutChart"className="p-10"
          width={"250px"}
          height={"250px"}
          chartType="PieChart"
          loader={<div className="p-10">Loading Chart</div>}
          data={[
            ["Value", "Numbers"],
            ["X", {x}],
            ["Y", {y}],
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
          rootProps={{ "data-testid": "6" }}/>
      </div>
    </>
  );
}
export default Body;
