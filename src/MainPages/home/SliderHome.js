import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../css/style.css";
import "../../css/all.css";
import N1 from "../../img/asset 0.jpeg";
import N2 from "../../img/asset 1.jpeg";
import N3 from "../../img/asset 2.jpeg";
import N4 from "../../img/asset 3.jpeg";
import N5 from "../../img/asset 4.jpeg";
import N6 from "../../img/asset 5.jpeg";
import N7 from "../../img/asset 6.jpeg";
import N8 from "../../img/asset 7.jpeg";
import N9 from "../../img/asset 8.jpeg";
import N10 from "../../img/asset 9.jpeg";
import N11 from "../../img/asset 10.jpeg";
import N12 from "../../img/asset 11.jpeg";
import N13 from "../../img/asset 12.jpeg";
import N14 from "../../img/asset 13.jpeg";
import N15 from "../../img/asset 14.jpeg";
import N16 from "../../img/asset 15.jpeg";
import N17 from "../../img/asset 16.jpeg";
import N18 from "../../img/asset 17.jpeg";
import N19 from "../../img/asset 18.jpeg";
function SliderHome() {
  return (
    <div>
      <div className="mainSlider pt-2">
        <div className="container">
          <div className="mainSlider">
            <div className="sliderHedar">
              <p className="color-black fw-bolder fs-4">what's on your mind?</p>
            </div>
            <div className="sliderBody mt-3 mb-5">
              <Carousel>
                <Carousel.Item interval={6000}>
                  <div className="d-flex justify-content-between">
                    <img
                      src={N1}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N2}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N3}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N4}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N5}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N6}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N7}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                  <div className="d-flex justify-content-between">
                    <img
                      src={N8}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N9}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N10}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N11}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N12}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N13}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N14}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                  <div className="d-flex justify-content-between">
                    <img
                      src={N15}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N16}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N17}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N18}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N19}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N1}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                    <img
                      src={N2}
                      alt=""
                      style={{ height: "200px", width: "155px" }}
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <hr style={{border:" 1px solid rgb(211 211 219)"}}/>
        </div>
      </div>
    </div>
  );
}

export default SliderHome;
