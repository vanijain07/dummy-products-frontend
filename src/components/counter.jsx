import React, { Component } from "react";

const Counter = ({ data }) => {
  return (
    <div className="row">
      {data.map((data) => (
        <div key={data.id} className="card col-md-3 m-3" style={{ width: 288 }}>
          <img
            src={data.images[0]}
            className="card-img-top"
            alt="product img"
          ></img>
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
            <span
              className="badge text-bg-secondary m-2"
              style={{ fontSize: 20 }}
            >
              Rs. {data.price}
            </span>
            <span className="badge text-bg-light" style={{ fontSize: 16 }}>
              {data.discountPercentage}% OFF
            </span>
            <p>Brand: {data.brand}</p>
            <p>Rating: {data.rating}</p>
            <p>Stock: {data.stock} left</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
