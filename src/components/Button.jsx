import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

function Button({ func, link}) {
  return (
    <li className="register">
      <NavLink to={link} onClick={func}>
        Register
      </NavLink>
    </li>
  );
}

Button.propTypes = {
  func: PropTypes.func,
  link: PropTypes.string,
  // margin: PropTypes.bool,
};

export default Button;
