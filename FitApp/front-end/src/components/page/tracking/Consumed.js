import React, { Component } from "react";
import "../../../style/style.css";
import backbtn from "../../../png-elements/back-btn.png";
import { Link } from "react-router-dom";

class Consumed extends Component {
  render() {
    return (
      <div>
        <div className="mini-nav">
          <Link to="/layout/tracking">
            <img alt="back" src={backbtn} className="back-btn" />
          </Link>
          <div className="title">calories consumed</div>
        </div>
        <div>
          <form className="food-search">
            <input type="text" placeholder="SEARCH FOR FOOD" />
          </form>
          <div className="food-search-result">
            {" "}
            {/*food search result*/}
            <div className="food-name">
              <div className="food-name-case" />
              <h2>Eggnog</h2>
              <div className="food-name-case" />
            </div>
            <div className="quantity-serve-add">
              <div className="quantity att-container">
                <p className="food-att">Quantity</p>
                <form>
                  <input type="number" className="square-input" />
                </form>
              </div>
              <div className="serve att-container">
                <p className="food-att">Serving Size</p>
                <select>
                  <option value="100 gr">100 gr</option>
                  <option value="1 cup">1 cup</option>
                  <option value="1 fl oz">1 fl oz</option>
                </select>
              </div>
              <button className="add-btn">add</button>
            </div>
            <div className="att-line">
              <div className="att-wrap">
                <p className="food-att-light">Kcal</p>
                <div className="att-num">
                  <p>88</p>
                </div>
              </div>
              <div className="att-wrap">
                <p className="food-att-light">Fat</p>
                <div className="att-num">
                  <p>4</p>
                </div>
              </div>
              <div className="att-wrap">
                <p className="food-att-light">Protein</p>
                <div className="att-num">
                  <p>4</p>
                </div>
              </div>
            </div>
            <div className="att-line">
              <div className="att-wrap">
                <p className="food-att-light">Carbs</p>
                <div className="att-num">
                  <p>8</p>
                </div>
              </div>
              <div className="att-wrap">
                <p className="food-att-light">Fiber</p>
                <div className="att-num">
                  <p>0</p>
                </div>
              </div>
              <div className="att-wrap">
                <p className="food-att-light">Sugar</p>
                <div className="att-num">
                  <p>8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Consumed;
