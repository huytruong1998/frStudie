import React, { Component } from "react";
import "../../style/style.css";
import thumb from "../../png-elements/thumb-demo.png";
import { getCurrentGuide } from "../../actions/guideActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

class Guidance extends Component {
  componentDidMount() {
    this.props.getCurrentGuide();
  }
  render() {
    const { guide, loading } = this.props.guide;
    let guideContent;

    if (guide === null || loading) {
      guideContent = <Spinner />;
    } else {
      guideContent = guide.map(guide => (
        <div
          className="col-sm-12 col-md-12 col-lg-12 col-xl-12 sport-guide"
          key={guide._id}
        >
          <img alt="thumb" src={guide.imgurl} />
          <div className="sport-guide-content">
            <p className="sport-name">{guide.name}</p>
            <div className="mins">
              <p className="min-text">{guide.guidetext}</p>
            </div>
          </div>
        </div>
      ));
    }
    return (
      <div className="container-fluid">
        <div className="row">{guideContent}</div>
      </div>
    );
  }
}

Guidance.propTypes = {
  guide: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  guide: state.guide
});

export default connect(
  mapStateToProps,
  { getCurrentGuide }
)(withRouter(Guidance));
