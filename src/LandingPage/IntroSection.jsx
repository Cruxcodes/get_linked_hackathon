import { home } from "./data/intro_section";
import PropTypes from 'prop-types'
export function IntroSection({header1, header2, info, image,reverse}) {
  
  return (
    <div style={{borderTop : "1px solid gray"}}>
      <div className="container intro">
        <div className="intro_image">
          <img src={image} alt="" />
        </div>
        <div className="intro_info">
          <h3>{header1}</h3>
          <h3>{header2}</h3>
          <p>
            {info}
          </p>
        </div>
      </div>
    </div>
  );

}

IntroSection.propTypes = {
  header1 : PropTypes.string,
  header2 : PropTypes.string,
  reverse : PropTypes.bool,
  info: PropTypes.string,
  image: PropTypes.node
};
