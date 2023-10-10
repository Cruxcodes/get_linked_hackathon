import * as landing from "../LandingPage/index";
import { home } from "../LandingPage/data/intro_section";
function LandingPage() {
  return (
    <div>
      <landing.Header />
      {home.map((element, index) => {
       return  <landing.IntroSection key={index} {...element} />;
      })}
    </div>
  );
}

export default LandingPage;
