import { home } from "./data/intro_section";
import PropTypes from 'prop-types'
export function IntroSection({header1, header2, info, img}) {
  return (
    <div>
      <div className="container intro">
        <div className="intro_image">
          <img src={home.idea} alt="" />
        </div>
        <div className="intro_info">
          <h3>Text and test</h3>
          <h3>Text</h3>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </div>
  );



}

IntroSection.propTypes = {
  header1 : PropTypes.string,
  header2 : PropTypes.string,
  info: PropTypes.string,
  img: PropTypes.node
};
