import { useState } from 'react';
import { startupPoints, enterprisePoints } from './constants';
import TabVal from './TabVal';

function Offer() {
  const [active, setActive] = useState("StartUps")

  const clk = val => setActive(val)

  return (
    <div className="pad-main-1-3">
      <h1 className="offer-h1 center">We turn great ideas into successful products</h1>
      <p className="offer-p center">we support our partners during the whole development lifecycle</p>

      <div className="max-w home-offer">
        <TabVal
          title="StartUps"
          active={active}
          vals={startupPoints}
        />

        <TabVal
          title="Enterprises"
          active={active}
          vals={enterprisePoints}
        />
      </div>

      <div className="df jcc tab-ind gap1">
        <div
          className={`tab-indicator cp ${active === "StartUps" ? "active" : ""}`}
          onClick={() => clk("StartUps")}
        ></div>
        <div
          className={`tab-indicator cp ${active === "Enterprises" ? "active" : ""}`}
          onClick={() => clk("Enterprises")}
        ></div>
      </div>
    </div>
  )
}

export default Offer