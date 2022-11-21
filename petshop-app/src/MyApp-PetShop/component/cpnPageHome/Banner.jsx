import { Carousel } from "react-bootstrap";
import React from "react";
import "../.././css/home.css";
import banner1 from "../../image/banner_slide1.png";
import banner2 from "../../image/banner_slide2.png";
import banner3 from "../../image/banner_slide3.png";

export default function Banner() {
  return (
    <div>
      {" "}
      <Carousel className="banner_slide">
        <Carousel.Item interval={3000}>
          <img
            className="d-block slide_baner-image"
            src={banner1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block slide_baner-image"
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block slide_baner-image"
            src={banner3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
