import enterprise from '../../img/offer/enterprises.png';
import start from '../../img/offer/startup.png';
import tick from '../../img/offer/tick.png';

function TabVal({ active, title, vals = [] }) {
  return (
    <div className={`dfc gap1 offer-right ${active === title ? "active" : ""}`}>
      <div className="df jcc">
        <img
          src={title === "StartUps" ? start : enterprise}
          alt={title}
        />
        <h3 className="tab-heade-h3 caps flex1">Blockchain For {title}</h3>
      </div>

      <div className="to-br dfc gap1 flex1">
        {
          vals.map(val => (
            <div key={val} className="df align-start">
              <img src={tick} alt="tick" className="tick" />
              <p className="tab-info-p flex1">{val}</p>
            </div>
          ))
        }
      </div>

      <p className="center">
        <button className="br5 theme-sec">Explore the possibilities</button>
      </p>
    </div>
  )
}

export default TabVal