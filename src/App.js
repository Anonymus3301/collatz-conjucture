import "./App.css";
import { Line } from "react-chartjs-2";
import React, { useState } from "react";
import "chartjs-plugin-zoom";
import { Button } from "@material-ui/core";

function App() {
  var p = 7;
  const [num, setNum] = useState(1);
  const [inputValue, setInputValue] = useState("");
  var datal = [];
  var label = [];
  datal.push(p);
  label.push(".");
  const [data, setData] = useState({
    labels: label,
    datasets: [
      {
        label: "Collatz Conjecture",
        data: datal,
        borderColor: ["purple"],
        borderWidth: 1.5,
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    pan: {
      enabled: true,
      mode: "x",
    },
    zoom: {
      enabled: true,
      drag: true,
      mode: "xy",
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <div className="App">
      <div>
        <input
          placeholder="Enter a numbuer"
          value={inputValue}
          onChange={(e) => {
            setNum(e.target.value);
            setInputValue(e.target.value);
          }}
        ></input>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setInputValue("");
            p = num;
            var o = 0;
            var datal = [];
            var label = [];
            datal.push(p);
            label.push(0);
            console.log(o);
            while (p > 1) {
              if (p % 2 === 1) {
                p = 3 * p + 1;
              } else {
                p = p / 2;
              }
              datal.push(p);
              label.push(++o);
              console.log(p);
            }

            setData({
              labels: label,
              datasets: [
                {
                  label: "Collatz Conjecture",
                  data: datal,
                  borderColor: ["purple"],
                  borderWidth: 1.5,
                },
              ],
            });
          }}
        >
          GO
        </Button>
      </div>
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default App;
