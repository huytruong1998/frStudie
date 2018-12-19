import React, { Component } from "react";
import "../../../style/style.css";
import backbtn from "../../../png-elements/back-btn.png";
import { Link } from "react-router-dom";
class EditProfile extends Component {
  render() {
    return (
      <div>
        <div className="mini-nav">
          <Link to="/layout/setting">
            <img alt="back" src={backbtn} className="back-btn" />
          </Link>
          <div className="title">edit profile</div>
        </div>
        <div className="edit-profile-div">
          <form className="edit-input">
            <input type="text" placeholder="EMAIL" />
          </form>
          <div className="save-profile-line">
            <button className="save-btn">save</button>
          </div>
        </div>
        <div className="edit-profile-div">
          <form className="edit-input">
            <input type="password" placeholder="CURRENT PASSWORD" />
            <input type="password" placeholder="NEW PASSWORD" />
            <input type="password" placeholder="CONFIRM NEW PASSWORD" />
          </form>
          <div className="save-profile-line">
            <button className="save-btn">save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
