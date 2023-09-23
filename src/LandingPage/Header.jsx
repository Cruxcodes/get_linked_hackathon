import chain from '../assets/chain.png';
import explosion from "../assets/explosion.png";
import Button from '../components/Button';

function Header() {
  return (
    <div className="container header">
      <div className="top">
        <p>
          Igniting a Revolution in{" "}
          <span className="revolution"> HR Innovation </span>
        </p>
      </div>
      <main className="header__main main">
        <div className="main__left">
          <h2>getlinked Tech</h2>
          <div className="image">
            <h2 className="image__text">
              Hackathon <span>1.0</span>
            </h2>
            <img src={chain} alt="" />
            <img src={explosion} alt="" />
          </div>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Button link={'/register'}/>
        </div>
      </main>
    </div>
  );
}

export default Header;
