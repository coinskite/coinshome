import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../svg/arrows/white.svg';
import coinskite from '../../img/logo/green-white.png';
import linkedin from '../../img/footer/linkedin.png';
import insta from '../../img/footer/insta.png';
import twit from '../../img/footer/twit.png';
import fb from '../../img/footer/fb.png';

function Footer() {
  const [active, setActive] = useState("")

  const onClk = val => {
    if (val === active) {
      setActive("")
    } else {
      setActive(val)
    }
  }

  const gotoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <footer className="black-bg">
        <div className="dfc gap1">
          <div>
            <img src={coinskite} alt="coinskite" id="footer-logo" />
            <p className="footer-first-p hide-600">Delivering Blockchain solutions to drive business outcomes for startups and enterprieses</p>
          </div>

          <div className="dfc hide-600 foot-get-in">
            <strong>Get In Touch</strong>
            <p>+91-9361384251</p>
            <p>info@coinskite.com</p>
          </div>

          <div className="df footer-social-img hide-600">
            <img src={linkedin} alt="linkedin" />
            <img src={insta} alt="insta" />
            <img src={fb} alt="fb" />
            <img src={twit} alt="twiter" />
          </div>
        </div>

        <div className="row-footer">
          <div>
            <ul className={active === "Company" ? "active" : ""}>
              <li onClick={() => onClk("Company")}>
                <strong>
                  Company
                  <Arrow className="head-arr" />
                </strong>
              </li>
              <li className="need"> <Link to="/" onClick={gotoTop}>About Coinskite</Link> </li>
              <li className="need"> <Link to="/career" onClick={gotoTop}>Careers</Link> </li>
              <li className="need"> <Link to="/contact" onClick={gotoTop}>Contact</Link> </li>
              <li className="need"> <Link to="/" onClick={gotoTop}>Insights</Link> </li>
              <li className="need"> <Link to="/" onClick={gotoTop}>Work</Link> </li>
            </ul>
          </div>

          <div className="dfc">
            <div>
              <ul className={active === "Services" ? "active" : ""}>
                <li onClick={() => onClk("Services")}>
                  <strong>
                    Services
                    <Arrow className="head-arr" />
                  </strong>
                </li>
                <li className="need"> <Link to="/" onClick={gotoTop}>Blockchain Consultancy</Link> </li>
                <li className="need"> <Link to="/" onClick={gotoTop}>Blockchain Development</Link> </li>
                <li className="need"> <Link to="/" onClick={gotoTop}>Smart Contract Development</Link> </li>
                <li className="need"> <Link to="/" onClick={gotoTop}>Smart Contract Audit</Link> </li>
                <li className="need"> <Link to="/" onClick={gotoTop}>Decentralized Finance</Link> </li>
                <li className="need"> <Link to="/" onClick={gotoTop}>NFT</Link> </li>
              </ul>
            </div>

            <div>
              <ul className={active === "Customers" ? "active" : ""}>
                <li onClick={() => onClk("Customers")}>
                  <strong>
                    Customers
                    <Arrow className="head-arr" />
                  </strong>
                </li>
                <li className="need"> <Link to="/" onClick={gotoTop}>Startup</Link> </li>
                <li className="need"> <Link to="/" onClick={gotoTop}>Enterprise</Link> </li>
              </ul>
            </div>
          </div>

          <div>
            <ul className={active === "Industries" ? "active" : ""}>
              <li onClick={() => onClk("Industries")}>
                <strong>
                  Industries
                  <Arrow className="head-arr" />
                </strong>
              </li>
              <li className="need"> <Link to="/" onClick={gotoTop}>Finance</Link> </li>
              <li className="need"> <Link to="/" onClick={gotoTop}>Healthcare</Link> </li>
              <li className="need"> <Link to="/" onClick={gotoTop}>Insurance</Link> </li>
              <li className="need"> <Link to="/" onClick={gotoTop}>Media</Link> </li>
              <li className="need"> <Link to="/" onClick={gotoTop}>Real Estate</Link> </li>
              <li className="need"> <Link to="/" onClick={gotoTop}>Sports</Link> </li>
              <li className="need"> <Link to="/" onClick={gotoTop}>Supplychain</Link> </li>
              <li className="need"> <Link to="/" onClick={gotoTop}>Government</Link> </li>
              <li className="need"> <Link to="/" onClick={gotoTop}>Law</Link> </li>
              <li className="need"> <Link to="/" onClick={gotoTop}>Digital Identity</Link> </li>
              <li className="need"> <Link to="/" onClick={gotoTop}>Social Media</Link> </li>
              <li className="need"> <Link to="/" onClick={gotoTop}>Logistics</Link> </li>
            </ul>
          </div>

          <div className="dfc">
            <div>
              <ul className={active === "Solutions" ? "active" : ""}>
                <li onClick={() => onClk("Solutions")}>
                  <strong>
                    Partners
                    <Arrow className="head-arr" />
                  </strong>
                </li>
                <li className="need"> <Link to="/" onClick={gotoTop}>Financial Advisors</Link></li>
                <li className="need"> <Link to="/" onClick={gotoTop}>Partner portal</Link></li>
                <li className="need"> <Link to="/" onClick={gotoTop}>Become a Partner</Link></li>
                <li className="need"> <Link to="/" onClick={gotoTop}>Partner Terms and Conditions</Link></li>
              </ul>
            </div>

            <div>
              <ul className={active === "Resources" ? "active" : ""}>
                <li onClick={() => onClk("Resources")}>
                  <strong>
                    Resources
                    <Arrow className="head-arr" />
                  </strong>
                </li>
                <li className="need"> <Link to="/" onClick={gotoTop}>Resource Center</Link> </li>
                <li className="need"> <Link to="/guide" onClick={gotoTop}>Guide</Link> </li>
                <li className="need"> <Link to="/webinar" onClick={gotoTop}>Webinars</Link> </li>
                <li className="need"> <Link to="/" onClick={gotoTop}>Podcast</Link> </li>
                <li className="need"> <Link to="/" onClick={gotoTop}>help & Support</Link> </li>
                <li className="need"> <Link to="/" onClick={gotoTop}>API & Docs</Link> </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-600-div black-bg">
        <div className="for-hr"></div>
        <div className="dfc footer-get-in2">
          <strong>Get In Touch</strong>
          <p className="fs-14">+91-9361384251</p>
          <p className="fs-14">info@coinskite.com</p>
        </div>

        <div className="df footer-social-img">
          <img src={linkedin} alt="linkedin" />
          <img src={insta} alt="insta" />
          <img src={fb} alt="fb" />
          <img src={twit} alt="twiter" />
        </div>
      </div>

      <div className="center p-16 black-bg last-txt">
        @2021 Coinskite.All Rights Reserved
      </div>
    </>
  )
}

export default Footer