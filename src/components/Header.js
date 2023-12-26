import "../style/Header.css";
import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../assets/blueto.png";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileHamOpen, setIsMobileHamOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleToggleMobileMenu = () => {
    setIsMobileHamOpen(!isMobileHamOpen);
  };

  return (
    <div className='l'>
      <div className='navbar'>
        <div className='nav1'>
          <img src={logo} alt='Logo' className='logo' />
          <IconButton onClick={handleToggleMobileMenu}>
            <MenuIcon id='mobile-hamburger' />
          </IconButton>
        </div>
        <div className={`nav2${isMobileHamOpen ? "-mobile" : ""}`}>
          <span
            className='nav2-btn'
            a
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Company
            {isHovered ? (
              <KeyboardArrowDownIcon className='down-arrow' />
            ) : (
              <KeyboardArrowUpIcon />
            )}
          </span>

          <span className='nav2-btn'>Products</span>
          <span className='nav2-btn'>Services</span>
          <span className='nav2-btn'>Contact</span>
        </div>
      </div>

      {/*  */}
      {isHovered && (
        <div
          className='overlay-container'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* <div className='overlay-content'> */}
          <div className='content-left'>
            Learn a little more about us,<br></br> our values, and our team
          </div>
          <div className='content-mid'>
            <span>
              <p className='content-mid--title'>Our Story </p>
              <p>
                Empowering brands to realize their potential with data,
                insights, and technology
              </p>
            </span>
            <span>
              <p className='content-mid--title'>
                Our Values and Corporate Responsibility
              </p>
              <p>
                We don't just talk the talk; we live by our core values Careers
                Join the team! Browse our open positions
              </p>
            </span>

            <span>
              <p className='content-mid--title'>Careers</p>
              <p>Join the team! Browse our open positions</p>
            </span>
            <span>
              <p className='content-mid--title'>Our Leadership</p>
              <p>Meet our leadership team</p>
            </span>
          </div>
          <div className='content-right'>
            <p className='content-mid--title'>Secure Data Architecture </p>
            <p>
              Our promise of data security and privacy. We keep your data safe
              from publishers, competitors and bad actors
            </p>
          </div>
          {/* </div> */}
        </div>
      )}
    </div>
  );
}
