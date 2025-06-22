import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Jordan from "../../assets/jordan.png";
import Nike from "../../assets/nike-logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-first">
          <img src={Jordan} width="20" height="20" />
        </div>
        <div className="header-back">
          <ul className="list-header">
            <li className="no-dropdown">Find a store</li>
            <li className="dropdown no-dropdown">
              Help
              <ul className="dropdown-list">
                <li>Help</li>
                <li>Order</li>
                <li>Cart</li>
                <li>Term</li>
              </ul>
            </li>
            <li className="no-dropdown">Join us</li>
            <li className="no-dropdown">Sign in</li>
          </ul>
        </div>
      </div>
      <div className="header-second">
        <div className="header-banner">
          <img src={Nike} alt="nike" width="70" height="50" />
        </div>
        <div className="header-choice">
          <ul className="header-list-choice">
            <li className="dropdown">
              <span>New & Featured</span>
              <div className="dropdown-menu">
                <div className="dropdown-wrapper">
                  <div className="dropdown-column">
                    <h4>Featured</h4>
                    <ul>
                      <li>New & Upcoming Drops</li>
                      <li>New Arrivals</li>
                      <li>Bestsellers</li>
                      <li>Member Exclusive</li>
                      <li>Customise with Nike By You</li>
                      <li>What's Trending</li>
                      <li>Jordan</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4>Trending</h4>
                    <ul>
                      <li>Summer Essentials</li>
                      <li>Air Max Dn8</li>
                      <li>What's Trending</li>
                      <li>Nike 24.7</li>
                      <li>Colours of the Season: Pastel</li>
                      <li>Retro Running</li>
                      <li>Running Shoe Finder</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4>Shop Icons</h4>
                    <ul>
                      <li>Lifestyle</li>
                      <li>Air Force 1</li>
                      <li>Air Jordan 1</li>
                      <li>Air Max</li>
                      <li>Dunk</li>
                      <li>Cortez</li>
                      <li>Blazer</li>
                      <li>Pegasus</li>
                      <li>Vomero</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4>Shop By Sport</h4>
                    <ul>
                      <li>Running</li>
                      <li>Basketball</li>
                      <li>Football</li>
                      <li>Golf</li>
                      <li>Tennis</li>
                      <li>Gym and Training</li>
                      <li>Yoga</li>
                      <li>Skateboarding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span>Men</span>
              <div className="dropdown-menu">
                <div className="dropdown-wrapper">
                  <div className="dropdown-column">
                    <h4>Featured</h4>
                    <ul>
                      <li>New Arrivals</li>
                      <li>Bestsellers</li>
                      <li>Shop All Sale</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4>Shoes</h4>
                    <ul>
                      <li>All Shoes</li>
                      <li>Lifestyle</li>
                      <li>Jordan</li>
                      <li>Running</li>
                      <li>Football</li>
                      <li>Basketball</li>
                      <li>Gym and Training</li>
                      <li>Skateboarding</li>
                      <li>Sandals and Slides</li>
                      <li>Nike By You</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4>Clothing</h4>
                    <ul>
                      <li>All Clothing</li>
                      <li>Tops and T-Shirts</li>
                      <li>Shorts</li>
                      <li>Pants and Leggings</li>
                      <li>Hoodies and Sweatshirts</li>
                      <li>Jackets and Gilets</li>
                      <li>Jerseys and Kits</li>
                      <li>Jordan</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4>Shop By Sport</h4>
                    <ul>
                      <li>Running</li>
                      <li>Basketball</li>
                      <li>Football</li>
                      <li>Golf</li>
                      <li>Tennis</li>
                      <li>Gym and Training</li>
                      <li>Yoga</li>
                      <li>Skateboarding</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4>Accessories and Equipment</h4>
                    <ul>
                      <li>All Accessories and Equipment</li>
                      <li>Bags and Backpacks</li>
                      <li>Socks</li>
                      <li>Hats and Headwear</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span>Woman</span>
              <div className="dropdown-menu">
                <div className="dropdown-wrapper">
                  <div className="dropdown-column">
                    <h4>Featured</h4>
                    <ul>
                      <li>New & Upcoming Drops</li>
                      <li>New Arrivals</li>
                      <li>Bestsellers</li>
                      <li>Member Exclusive</li>
                      <li>Customise with Nike By You</li>
                      <li>What's Trending</li>
                      <li>Jordan</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4>Trending</h4>
                    <ul>
                      <li>Summer Essentials</li>
                      <li>Air Max Dn8</li>
                      <li>What's Trending</li>
                      <li>Nike 24.7</li>
                      <li>Colours of the Season: Pastel</li>
                      <li>Retro Running</li>
                      <li>Running Shoe Finder</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4>Shop Icons</h4>
                    <ul>
                      <li>Lifestyle</li>
                      <li>Air Force 1</li>
                      <li>Air Jordan 1</li>
                      <li>Air Max</li>
                      <li>Dunk</li>
                      <li>Cortez</li>
                      <li>Blazer</li>
                      <li>Pegasus</li>
                      <li>Vomero</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4>Shop By Sport</h4>
                    <ul>
                      <li>Running</li>
                      <li>Basketball</li>
                      <li>Football</li>
                      <li>Golf</li>
                      <li>Tennis</li>
                      <li>Gym and Training</li>
                      <li>Yoga</li>
                      <li>Skateboarding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <span>Kids</span>
              <div className="dropdown-menu">
                <div className="dropdown-wrapper">
                  <div className="dropdown-column">
                    <h4>Featured</h4>
                    <ul>
                      <li>New & Upcoming Drops</li>
                      <li>New Arrivals</li>
                      <li>Bestsellers</li>
                      <li>Member Exclusive</li>
                      <li>Customise with Nike By You</li>
                      <li>What's Trending</li>
                      <li>Jordan</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4>Trending</h4>
                    <ul>
                      <li>Summer Essentials</li>
                      <li>Air Max Dn8</li>
                      <li>What's Trending</li>
                      <li>Nike 24.7</li>
                      <li>Colours of the Season: Pastel</li>
                      <li>Retro Running</li>
                      <li>Running Shoe Finder</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4>Shop Icons</h4>
                    <ul>
                      <li>Lifestyle</li>
                      <li>Air Force 1</li>
                      <li>Air Jordan 1</li>
                      <li>Air Max</li>
                      <li>Dunk</li>
                      <li>Cortez</li>
                      <li>Blazer</li>
                      <li>Pegasus</li>
                      <li>Vomero</li>
                    </ul>
                  </div>
                  <div className="dropdown-column">
                    <h4>Shop By Sport</h4>
                    <ul>
                      <li>Running</li>
                      <li>Basketball</li>
                      <li>Football</li>
                      <li>Golf</li>
                      <li>Tennis</li>
                      <li>Gym and Training</li>
                      <li>Yoga</li>
                      <li>Skateboarding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="header-right">
          <div className="header-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="header-icons">
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <FontAwesomeIcon icon={faCreditCard} className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
