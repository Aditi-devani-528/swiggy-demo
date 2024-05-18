import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import "../../css/style.css";
import "../../css/all.css";
import Star from "../../img/asset 53.svg";
import axios from "axios";

function FoodDelivery() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/all-product")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="mainRestro">
        <div className="container">
          <div className="mainRestors">
            <div className="sliderHedar">
              <p className="color-black fw-bolder fs-4" style={{fontFamily : "Proxima Nova"}}>
                Restaurants with online food delivery in Surat
              </p>
              <div className="pt-3">
                <Stack direction="row" spacing={1}>
                  <Chip
                    label="Filter"
                    variant="outlined"
                    onClick={handleClick}
                    FilterAltOffIcon={<FilterAltOffIcon />}
                  />
                  <Chip
                    label="Short By"
                    variant="outlined"
                    onClick={handleClick}
                  />
                  <Chip
                    label="Fast Delivery"
                    variant="outlined"
                    onClick={handleClick}
                  />
                  <Chip
                    label="New on swiggy"
                    variant="outlined"
                    onClick={handleClick}
                  />
                  <Chip
                    label="Ratings 4.0+ "
                    variant="outlined"
                    onClick={handleClick}
                  />
                  <Chip
                    label="Pure Veg "
                    variant="outlined"
                    onClick={handleClick}
                  />
                  <Chip
                    label="Ratings 4.0+ "
                    variant="outlined"
                    onClick={handleClick}
                  />
                  <Chip
                    label="offers"
                    variant="outlined"
                    onClick={handleClick}
                  />
                  <Chip
                    label="Rs. 300-Rs. 600"
                    variant="outlined"
                    onClick={handleClick}
                  />
                  <Chip
                    label="Less than Rs.300"
                    variant="outlined"
                    onClick={handleClick}
                  />
                </Stack>
              </div>
            </div>
            <div className="RestroBody">
              <div className="foodDeliveryCards">
                {product.map((item, index) => {
                  return (
                    <div className="deliveryCard">
                      <div className="deliveryCardTop position-relative">
                        <img src={`http://localhost:8000/${item.productImg}`}  alt="" />
                        <div className="imgContent align-content-end position-absolute bottom-0 end-0 start-0 ps-2 pe-1">
                          <div className="imgp fw-bolder fs-4 text-white">
                            {item.offers}
                          </div>
                        </div>
                      </div>
                      <div className="deliveryCardBottom mt-1">
                        <p className="fs-18 color-black1 fw-semibold elips" style={{fontFamily : "Proxima Nova"}}>
                          {item.restaurantName}
                        </p>
                        <div className="d-flex align-items-center ">
                          <img src={Star} alt="" />
                          <div className="d-flex text-center align-items-center color-black1 fw-semibold ms-1">
                            <span>{item.rating}</span>
                            <span className="ms-1">{item.minutes}</span>
                          </div>
                        </div>
                        <p className="color-grayop fs-16">{item.subtitle}</p>
                        <p className="color-grayop">{item.area}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDelivery;
