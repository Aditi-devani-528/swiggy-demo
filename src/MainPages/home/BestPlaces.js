import React, { useState } from "react";

function BestPlaces() {
  const [showMore, setShowMore] = useState(false);

  const itemsShow = () => {
    setShowMore(!showMore);
  };

 
  return (
    <div>
      <div className="mainBestPlaces pb-80">
        <div className="container">
          <div className="bestPlacesHedar">
            <p className="color-black1 fw-bold fs-3">
              Best Places to Eat Across Cities
            </p>
          </div>
          <div className="mainBestPlace mt-4">
            <div className="row g-3">
              <div className="col-4">
                <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                  Best Restaurants in Bangalore
                </div>
              </div>
              <div className="col-4">
                <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                  Best Restaurants in Pune
                </div>
              </div>
              <div className="col-4">
                <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                  Best Restaurants in Mumbai
                </div>
              </div>
              <div className="col-4">
                <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                  Best Restaurants in Delhi
                </div>
              </div>
              <div className="col-4">
                <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                  Best Restaurants in Hyderabad
                </div>
              </div>
              <div className="col-4">
                <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                  Best Restaurants in Kolkata
                </div>
              </div>
              <div className="col-4">
                <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                  Best Restaurants in Chennai
                </div>
              </div>
              <div className="col-4">
                <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                  Best Restaurants in Chandigarh
                </div>
              </div>
              <div className="col-4">
                <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                  Best Restaurants in Ahmedabad
                </div>
              </div>
              <div className="col-4">
                <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                  Best Restaurants in Jaipur
                </div>
              </div>
              <div className="col-4">
                <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                  Best Restaurants in Nagpur
                </div>
              </div>
              <div className="col-4">
                <button className="show" onClick={itemsShow}>
                  <div className="text-center p-16 color-black2 fw-medium rounded-3 border" id="aditi">
                  {showMore ? "Best Restaurants in Bhubaneswar" : "Show more"}
                    <i className={`fa-solid ${showMore ? " ": "fa-chevron-down"} ms-3`}></i>
                  </div>
                </button>
              </div>
              {showMore && (
                <>
                  <div className="col-4 dnone">
                    <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                      Best Restaurants in Kochi
                    </div>
                  </div>
                  <div className="col-4 dnone">
                    <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                      Best Restaurants in Surat
                    </div>
                  </div>
                  <div className="col-4 dnone">
                    <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                      Best Restaurants in Dehradun  
                    </div>
                  </div>
                  <div className="col-4 dnone">
                    <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                      Best Restaurants in Ludhiana
                    </div>
                  </div>
                  <div className="col-4 dnone">
                    <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                      Best Restaurants in Pathna
                    </div>
                  </div>
                  <div className="col-4 dnone">
                    <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                    Best Restaurants in Mangaluru
                    </div>
                  </div>
                  <div className="col-4 dnone">
                    <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                    Best Restaurants in Bhopal
                    </div>
                  </div>
                  <div className="col-4 dnone">
                    <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                    Best Restaurants in Gurgaon
                    </div>
                  </div>
                  <div className="col-4 dnone">
                    <div className="text-center p-16 color-black2 fw-medium rounded-3 border">
                    Best Restaurants in Coimbatore
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestPlaces;
