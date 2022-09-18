import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faTruck,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../Assets/paypal.png";
import img2 from "../Assets/Visa.png";
import img3 from "../Assets/MonsterCard.png";
import img4 from "../Assets/MonsterCard.png";
import img5 from "../Assets/discover.png";
import img6 from "../Assets/ideal.png";
import img7 from "../Assets/Dhl.png";
import img8 from "../Assets/dpd.png";
import img9 from "../Assets/Inpost.png";
import img10 from "../Assets/Fed.jpeg";
import img11 from "../Assets/black.jpeg";
import img12 from "../Assets/white.jpeg";
import axios from "axios";

const EcoBanner = () => {
  const [s, sets] = useState(false);
  const [d, setd] = useState({
    text: "",
    password: "",
  });

  const change = (e) => {
    const { value, name } = e.target;
    setd({ ...d, [name]: value });
  };

  // using fake post api for login button/////
  const header = {
    "Content-Type": "application/json",
    Authorization: "Bearer ",
  };

  const add = async () => {
    const data = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      d,
      { header: header }
    );
    return data;
  };

  return (
    <div className="Eco_banner lg:p-10 p-5 mt-6  space-y-20  ">
      <div className="banner_name flex justify-between items-center  w-full ">
        <h1 className="text-3xl">Shipping and Payment</h1>
        <div className="banner_icon flex items-center justify-between w-48 pr-10 text-xl ">
          <div className="banner_icon_1 border border-green-500  px-3 py-2 rounded-full ">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          <hr className=" border border-gray-300"></hr>

          <div className="bg-green-500 p-3 rounded-full">
            <FontAwesomeIcon
              icon={faTruck}
              className="text-white flex justify-center"
            />
          </div>
        </div>
      </div>

      {/* main bannner */}
      <div className="main_banner  mt-16 flex  flex-col lg:flex-row  gap-10  ">
        {/* log in functionality */}
        {!s ? (
          <div className="form  w-full lg:w-1/2 space-y-8">
            <div className="Form_button space-x-5 flex justify-between lg:justify-start ">
              <button
                className="bg-green-300 text-center rounded-full w-32 p-4 text-white"
                onClick={() => sets(!s)}
              >
                LOG IN
              </button>
              <button className="text-center border border-gray-300 rounded-full w-32 p-4 text-black">
                {" "}
                SIGN UP
              </button>
            </div>
            <div className="form_heading ">
              <h4>Shipping Information</h4>
            </div>
            <div className="form_input space-y-6">
              <div className="input lg:space-x-4 space-x-0 space-y-6">
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded-full w-full lg:w-2/5"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded-full lg:w-2/5 w-full"
                  placeholder="Address"
                  name="text"
                />
              </div>

              <div className="input  lg:space-x-4 space-y-6">
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded-full lg:w-2/5 w-full"
                  placeholder="First name"
                />
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded-full lg:w-2/5 w-full"
                  placeholder="city"
                />
              </div>

              <div className="input  lg:space-x-4 space-y-6">
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded-full lg:w-2/5 w-full"
                  placeholder="Last name"
                />
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded-full lg:w-2/5 w-full"
                  placeholder="Postal code/ZIP"
                />
              </div>

              <div className="input  lg:space-x-4 space-y-6">
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded-full lg:w-2/5 w-full"
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  className="border border-gray-300 p-4 rounded-full lg:w-2/5 w-full"
                  placeholder="Polandzz"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="login border border-gray-500 w-full lg:w-1/3 flex flex-col justify-center items-center space-y-7 p-5">
            <div className="email space-x-5">
              <labal className="text-lg">Email:</labal>
              <input
                type="text"
                placeholder="email"
                className="border border-gray-300 p-3 rounded-full"
                onChange={change}
                value={d.text}
                name="text"
              />
            </div>
            <div className="passseord space-x-5">
              <labal className="text-lg">Password:</labal>
              <input
                type="password"
                placeholder="password"
                className="border border-gray-300  p-3 rounded-full"
                onChange={change}
                value={d.password}
                name="password"
              />
            </div>
            <button
              className="bg-green-500 text-white p-2 w-40  rounded-full"
              onClick={add}
            >
              Log in
            </button>
          </div>
        )}

        {/* payment method */}
        <div className="payment w-full lg:w-1/3 space-y-11">
          <div className="payment_logo">
            <h4>Payment Method</h4>
          </div>
          <div className="payment_image_logo space-y-7  flex flex-col ">
            <div className="payment_first_logo flex  space-x-5  lg:justify-start justify-between w-full">
              <div className="paypal border border-gray-300 p-3 rounded-full  w-32 h-12 flex justify-center  items-center">
                <img src={img1} alt="" className="w-16 " />
              </div>

              <div className="paypal border border-gray-300 p-3 rounded-full w-32 h-12 flex justify-center  items-center">
                <img src={img2} alt="" className="w-16 " />
              </div>
              <div className="paypal border border-gray-300 p-3 rounded-full w-32 h-12 flex justify-center  items-center">
                <img src={img3} alt="" className="w-10 " />
              </div>
            </div>

            <div className="payment_Second_logo flex space-x-5  lg:justify-start justify-between w-full">
              <div className="paypal border border-gray-300 p-3 rounded-full w-32 h-12 flex justify-center  items-center">
                <img src={img4} alt="" className="w-10 " />
              </div>

              <div className="paypal border border-gray-300 p-3 rounded-full w-32 h-12 text-center flex justify-center  items-center">
                <img src={img5} alt="" className="w-16 " />
              </div>
              <div className="paypal border border-gray-300 p-3 rounded-full w-32 h-12 text-center flex justify-center  items-center">
                <img src={img6} alt="" className="w-8 " />
              </div>
            </div>
          </div>

          <div className=" payment_image_logo_2  space-y-5">
            <span>Delivery Method</span>
            <div className="pament_logo_1 flex space-x-12  lg:justify-start justify-between w-full">
              <div className="paypal border border-gray-300 p-3 rounded-full w-48 h-12 text-center flex justify-center  items-center space-x-3">
                <img src={img7} alt="" className="w-8 " />
                <span>$20.00</span>
              </div>

              <div className="paypal border border-gray-300 p-3 rounded-full w-48 h-12 text-center flex justify-center  items-center space-x-3">
                <img src={img8} alt="" className="w-16 " />
                <span>$12.00</span>
              </div>
            </div>

            <div className="pament_logo_2 flex space-x-12 lg:justify-start justify-between w-full">
              <div className="paypal border border-gray-300 p-3 rounded-full w-48 h-12 text-center flex justify-center  items-center space-x-3">
                <img src={img9} alt="" className="w-16 " />
                <span>$15.00</span>
              </div>

              <div className="paypal border border-gray-300 p-3 rounded-full w-48 h-12 text-center flex justify-center  items-center space-x-3">
                <img src={img10} alt="" className="w-10" />
                <span>$10.00</span>
              </div>
            </div>
          </div>
        </div>
        {/* {cart} */}
        <div className="cart lg:w-1/4 w-full  space-y-8  ">
          <span>Your Cart</span>
          <div className="cart_first   flex justify-between items-center ">
            <div className="cartimage_name flex space-x-6 ">
              <div className="img  w-24 h-24 rounded-full  border border-gray-300  flex justify-center items-center">
                <img src={img11} alt="" className="w-16 h-20" />
              </div>
              <span className="w-28"> T-shirt summer Vibes</span>
            </div>

            <span>$89.99</span>
          </div>
          <div className="cart_first  flex justify-between items-center  mt-8">
            <div className="cartimage_name flex space-x-6 ">
              <div className="img  w-24 h-24 rounded-full  border border-gray-300  flex justify-center items-center">
                <img src={img12} alt="" className="w-16 h-20" />
              </div>
              <span className="w-28"> T-shirt summer Vibes</span>
            </div>

            <span>$89.99</span>
          </div>

          <div className=" flex lg:justify-center justify-start">
            <div className="totalbutton  flex justify-between  lg:w-96 w-full py-3 px-6 rounded-full border border-gray-100 bg-gray-100">
              <span>Total Cost </span>
              <span>$159.7</span>
            </div>
          </div>

          <div className="cart_last  space-x-7">
            <FontAwesomeIcon icon={faTruck} />
            <span className="w-16">
              {" "}
              your are $30.00 away from free shopping
            </span>
          </div>
        </div>

        {/*  */}
      </div>

      <div className="buttons flex justify-between items-center">
        <div className="buttons  space-x-8 ">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </div>

        <div className="second_buttons flex justify-between items-center lg:space-x-7 flex-col lg:flex-row space-y-6  lg:space-y-0">
          <div className=" text-black border border-black w-52 p-3  flex justify-center rounded-full items-center">
            continue shopping
          </div>
          <div className=" text-white border border-greeen-500 w-52 p-3 bg-green-500  flex justify-center rounded-full items-center">
            Proceed payment
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoBanner;
