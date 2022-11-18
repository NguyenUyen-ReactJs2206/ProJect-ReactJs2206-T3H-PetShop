import React from "react";
import "../css/pageaboutus.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="row">
        <div className="blog">
          <div className="title-box">
            <h3>SPRING FEVER</h3>
            <hr />
            <div className="intro">
              Yllamco laboris nisi ut aliquip ex ea commodo.
            </div>
          </div>
          <div className="info">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </span>
          </div>
          <div className="footer">
            <div className="icon-holder">
              <span>
                <i className="fa fa-comment-o"></i>
                <span>12</span>
                <space></space>
                <i className="fa fa-calendar"></i>
                <span>03.12.2015</span>
              </span>
            </div>
          </div>

          <div className="color-overlay"></div>
        </div>
      </div>
    </div>
  );
}
