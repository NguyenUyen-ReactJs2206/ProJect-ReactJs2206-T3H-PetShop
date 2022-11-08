import { Carousel } from "react-bootstrap";
import React from "react";
import ".././css/banner.css";

export default function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block slide_baner-image"
          src="https://onfire-bg.com/cach-nhan-biet-cho-alaska-thuan-chung/imager_1_12887_700.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block slide_baner-image"
          src="https://meocun.com/wp-content/uploads/meocunpetshop-banner-1b-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block slide_baner-image"
          src="https://blogyeuchomeo.com/wp-content/uploads/2017/10/banner-website-1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
