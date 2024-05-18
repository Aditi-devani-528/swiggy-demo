import axios from "axios";
import React, { useState } from "react";

function AddProduct() {
  const [formData, setFormData] = useState({
    offers: "",
    restaurantName: "",
    rating: "",
    minutes: "",
    subtitle: "",
    area: "",
  });

  const [productImg , setProductImg] = useState()


  const handleUpload = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", formData.productImg);
    try {
      const response = await axios.post("http://localhost:8000/upload", data);
      console.log("Image uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    
  const handleImageChange = (e) => {
    setProductImg( e.target.files[0] );
  };


  function addProduct(){
    const payload = new FormData();
    payload.append("productImg" , productImg)
    payload.append("offers" , formData.offers)
    payload.append("restaurantName" ,formData.restaurantName)
    payload.append("rating" , formData.rating)
    payload.append("minutes" , formData.minutes)
    payload.append("subtitle" , formData.subtitle)
    payload.append("area" , formData.area)
    axios.post("http://localhost:8000/add-product", payload ).then((res) => console.log("done")).catch(err => console.log(err))
  }
  return (
    <div className="container">
      <form>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            productImg
          </label>
          <input
            type="file"
            name="productImg"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            offers
          </label>
          <input
            type="text"
            name="offers"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formData.offers}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Restro name
          </label>
          <input
            type="text"
            name="restaurantName"
            className="form-control"
            id="exampleInputPassword1"
            value={formData.restaurantName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Rating
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="rating"
            id="exampleInputPassword1"
            value={formData.rating}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            minites
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={formData.minutes}
            onChange={handleChange}
            name="minutes"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Subtitle
          </label>
          <input
            type="text"
            value={formData.subtitle}
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
            name="subtitle"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            aera
          </label>
          <input
            value={formData.area}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
            name="area"
          />
        </div> 
        <button type="submit" onClick={addProduct} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
