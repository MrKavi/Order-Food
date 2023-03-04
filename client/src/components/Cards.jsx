import React from "react";

export const Cards = () => {
  return (
    <div className="card mt-3 mx-auto" style={{ width: "18rem" }}>
      <img
        src="https://heartstrokeprod.azureedge.net/-/media/images/articles/food-guide-plate.ashx?rev=3e5a0dc07a0c4a96b4a84113d4eb1e47"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text ..</p>
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
            <option value="Half">Half</option>
            <option value="Full">Full</option>
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
