import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="nav_bar  flex justify-between items-center w-full h-20  shadow-md p-2 lg:p-5">
      <div className="nav_logo">
        <h4 className="text-2xl ">
          <span className="text-orange-500  text-2xl">E-</span> Shop{" "}
        </h4>
      </div>

      <ul className="nav_list flex  space-x-5 lg:space-x-20">
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>

      <div className="nav_icons  flex space-x-7 text-xl">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faCartShopping} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default Nav;
