import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../css/style.css";
import "../../css/all.css";
import R1 from "../../img/asset 20.jpeg";
import Star from "../../img/asset 53.svg";
import { Swiper, SwiperSlide } from "swiper/react";
function TopRestro() {
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  return (
    <div>
      <div>
        <div className="mainSlider pt-2">
          <div className="container">
            <div className="mainSlider">
              <div className="sliderHedar">
                <p className="color-black fw-bolder fs-4">
                  what's on your mind?
                </p>
              </div>
              <div className="sliderBody mt-3 mb-5 ">
                <div className="restroCards row">
                  <div className="restroCard col">
                    <div className="restroCardTop position-relative">
                      <img src={R1} alt="" />
                      <div className="imgContent align-content-end position-absolute bottom-0 end-0 start-0 ps-2 pe-1">
                        <div className="imgp fw-bolder fs-4 text-white">
                          50% OFF UPTO ₹100{" "}
                        </div>
                      </div>
                    </div>
                    <div className="restroCardBottom">
                      <p className="fs-18 color-black1 fw-semibold">
                        Pastas By Pizza Hut
                      </p>
                      <div className="d-flex align-items-center ">
                        <img src={Star} alt="" />
                        <div className="d-flex text-center align-items-center color-black1 fw-semibold ms-1">
                          <span>3.9 .</span>
                          <span className="ms-1">30-35 mins</span>
                        </div>
                      </div>
                      <p className="color-grayop">Pizzaz</p>
                      <p className="color-grayop">Nana Varacha</p>
                    </div>
                  </div>
                  <div className="restroCard col">
                    <div className="restroCardTop position-relative">
                      <img src={R1} alt="" />
                      <div className="imgContent align-content-end position-absolute bottom-0 end-0 start-0 ps-2 pe-1">
                        <div className="imgp fw-bolder fs-4 text-white">
                          50% OFF UPTO ₹100{" "}
                        </div>
                      </div>
                    </div>
                    <div className="restroCardBottom">
                      <p className="fs-18 color-black1 fw-semibold">
                        Pastas By Pizza Hut
                      </p>
                      <div className="d-flex align-items-center ">
                        <img src={Star} alt="" />
                        <div className="d-flex text-center align-items-center color-black1 fw-semibold ms-1">
                          <span>3.9 .</span>
                          <span className="ms-1">30-35 mins</span>
                        </div>
                      </div>
                      <p className="color-grayop">Pizzaz</p>
                      <p className="color-grayop">Nana Varacha</p>
                    </div>
                  </div>
                  <div className="restroCard col">
                    <div className="restroCardTop position-relative">
                      <img src={R1} alt="" />
                      <div className="imgContent align-content-end position-absolute bottom-0 end-0 start-0 ps-2 pe-1">
                        <div className="imgp fw-bolder fs-4 text-white">
                          50% OFF UPTO ₹100{" "}
                        </div>
                      </div>
                    </div>
                    <div className="restroCardBottom">
                      <p className="fs-18 color-black1 fw-semibold">
                        Pastas By Pizza Hut
                      </p>
                      <div className="d-flex align-items-center ">
                        <img src={Star} alt="" />
                        <div className="d-flex text-center align-items-center color-black1 fw-semibold ms-1">
                          <span>3.9 .</span>
                          <span className="ms-1">30-35 mins</span>
                        </div>
                      </div>
                      <p className="color-grayop">Pizzaz</p>
                      <p className="color-grayop">Nana Varacha</p>
                    </div>
                  </div>
                  <div className="restroCard col">
                    <div className="restroCardTop position-relative">
                      <img src={R1} alt="" />
                      <div className="imgContent align-content-end position-absolute bottom-0 end-0 start-0 ps-2 pe-1">
                        <div className="imgp fw-bolder fs-4 text-white">
                          50% OFF UPTO ₹100{" "}
                        </div>
                      </div>
                    </div>
                    <div className="restroCardBottom">
                      <p className="fs-18 color-black1 fw-semibold">
                        Pastas By Pizza Hut
                      </p>
                      <div className="d-flex align-items-center ">
                        <img src={Star} alt="" />
                        <div className="d-flex text-center align-items-center color-black1 fw-semibold ms-1">
                          <span>3.9 .</span>
                          <span className="ms-1">30-35 mins</span>
                        </div>
                      </div>
                      <p className="color-grayop">Pizzaz</p>
                      <p className="color-grayop">Nana Varacha</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ border: " 1px solid rgb(211 211 219)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopRestro;
