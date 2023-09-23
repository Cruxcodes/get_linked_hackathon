import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Button from "./Button";

function Navbar() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
      if (screenSize > 800) {
        setShowNav(false);
      }
    });
    return window.removeEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  }, [screenSize]);

  const hideMobileMenu = () => {
    setShowNav(false);
  };
  return (
    <div className="navigation">
      <nav>
        <div className="container navbar">
          <div className="navbar__logo">
            <NavLink to="/" className="logo">
              <span className="get">get</span>
              <span className="link">linked</span>
            </NavLink>
          </div>
          {screenSize > 800 ? (
            <div className="navbar__links">
              <ul>
                <li>
                  <NavLink to="/timeline">Timeline</NavLink>
                </li>
                <li>
                  <NavLink to="/overview">Overview</NavLink>
                </li>
                <li>
                  <NavLink to="/faqs">FAQs</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="register">
                  <NavLink to="/register">Register</NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <div
              className={`navbar__mobile ${
                showNav ? "animate__mobile" : "reset__mobile"
              }`}
              onClick={() => {
                setShowNav(!showNav);
              }}
            >
              <div className="first"></div>
              <div className="second"></div>
              <div className="third"></div>
            </div>
          )}
        </div>
      </nav>
      {showNav && screenSize < 800 && (
        <MobileNav hideMobileMenu={hideMobileMenu} showNav={showNav} />
      )}
      {/* <div>{props.children}</div> */}
    </div>
  );
}
// Navbar.propTypes = {
//   children: PropTypes.node, // Define the children prop type
// };

function MobileNav({ hideMobileMenu, showNav }) {
  return (
    <div className={`mobile ${showNav ? "" : "hidden"}`}>
      <div className="navbar__links">
        <ul>
          <li>
            <NavLink to="/timeline" onClick={hideMobileMenu}>
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/overview" onClick={hideMobileMenu}>
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/faqs" onClick={hideMobileMenu}>
              FAQs
            </NavLink>
          </li>
          <li >
            <NavLink to="/contact" onClick={hideMobileMenu}>
              Contact
            </NavLink>
          </li>
          <Button func={hideMobileMenu} margin={true} link={'/register'}/>
        </ul>
      </div>
    </div>
  );
}

MobileNav.propTypes = {
  hideMobileMenu: PropTypes.func,
  showNav: PropTypes.bool,
};

export default Navbar;
