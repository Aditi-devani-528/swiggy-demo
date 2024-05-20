import React, { useState } from "react";

function BestCuisines() {
  const [showMore, setShowMore] = useState(false);

  const itemsShow = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div>
        <div className="mainBestPlaces pb-80">
          <div className="container">
            <div className="bestPlacesHedar">
              <p className="color-black1 fw-bold fs-3">Best Cuisines Near Me</p>
            </div>
            <div className="mainBestPlace mt-4">
              <div className="row g-3">
                <div className="col-4">
                  <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                    Chinese Restaurant Near Me
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                    South Indian Restaurant Near Me
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                    Indian Restaurant Near Me
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                    Kerala Restaurant Near Me
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                    Korean Restaurant Near Me
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                    North Indian Restaurant Near Me
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                    Seafood Restaurant Near Me
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                    Bengali Restaurant Near Me
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                    Punjabi Restaurant Near Me
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                    Italian Restaurant Near Me
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                    Andhra Restaurant Near Me
                  </div>
                </div>
                <div className="col-4">
                  <button className="show" onClick={itemsShow}>
                    <div
                      className="text-center p-16 color-black2 fw-medium rounded-3 border"
                      id="aditi"
                    >
                      {showMore ? "Biryani Restaurant Near Me" : "Show more"}
                      <i
                        className={`fa-solid ${
                          showMore ? " " : "fa-chevron-down"
                        } ms-3`}
                      ></i>
                    </div>
                  </button>
                </div>
                {showMore && (
                  <>
                    <div className="col-4 dnone">
                      <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                        Japanese Restaurant Near Me
                      </div>
                    </div>
                    <div className="col-4 dnone">
                      <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                        Arabian Restaurant Near Me
                      </div>
                    </div>
                    <div className="col-4 dnone">
                      <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                        Fast Food Restaurant Near Me
                      </div>
                    </div>
                    <div className="col-4 dnone">
                      <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                        Jain Restaurant Near Me
                      </div>
                    </div>
                    <div className="col-4 dnone">
                      <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                        Gujarati Restaurant Near Me
                      </div>
                    </div>
                    <div className="col-4 dnone">
                      <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                        Thai Restaurant Near Me
                      </div>
                    </div>
                    <div className="col-4 dnone">
                      <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                        Pizzas Restaurant Near Me
                      </div>
                    </div>
                    <div className="col-4 dnone">
                      <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                        Asian Restaurant Near Me
                      </div>
                    </div>
                    <div className="col-4 dnone">
                      <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                        Cafe Restaurant Near Me
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestCuisines;
