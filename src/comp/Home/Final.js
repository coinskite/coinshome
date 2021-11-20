import Group from '../../img/blog/report.png';
import { ReactComponent as Arrow } from '../../svg/arrows/download.svg';

function Final() {
  return (
    <div className="df pad-main-1-3 home-final theme-bg">
      <img src={Group} alt="Group" />

      <h1 className="flex1 center home-final-h1">Explore the future of Blockchain</h1>
      <p></p>
      <p>
        <button className="df br5 theme-bg">
          Download the report
          <Arrow />
        </button>
      </p>
    </div>
  )
}

export default Final