import React from "react";

export const Cards = (props) => {
  let options = props.options;
  let priceOption = Object.keys(options);

  return (
    <div className="card mt-3 mx-auto" style={{ width: "18rem" }}>
      <img
        src={props.foodImg}
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.foodName}</h5>
        <p className="card-text">Enjoy your {props.foodName} </p>
        <div
          className="container w-100"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <select className="m-2 bg-success rounded" style={{ color: "white" }}>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 bg-success rounded" style={{ color: "white" }}>
            {priceOption.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <div>
            Total Price : <span>124$</span>
          </div>
        </div>
        <div
          className="container w-100"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button href="#" className="btn btn-primary w-100">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
