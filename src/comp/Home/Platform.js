import blockchain from '../../img/platform/blockchain.png';
import oracle from '../../img/platform/oracle.png';
import imge from '../../img/platform/google.png';
import aws from '../../img/platform/aws.png';
import IBM from '../../img/platform/ibm.png';

function Platform() {
  return (
    <div className="pad-main-1-3 theme-sec">
      <h1 className="caps plat-h1 center black-clr">WE LEVERAGE RELIABLE PLATFORMS</h1>

      <div className="plotforms-list max-w">
        <div className="dfc hp-cont center">
          <div className="df jcc"><img src={oracle} alt="oracle" /></div>
          <div className="fs-13">Orcale <br /> Autonomous <br /> Blockchain Cloud <br /> Service</div>
        </div>

        <div className="dfc hp-cont center">
          <div className="df jcc"><img src={IBM} alt="IBM" /></div>
          <div className="fs-13">IBM <br /> Blockchain <br />Platform</div>
        </div>

        <div className="dfc hp-cont center">
          <div className="df jcc"><img src={blockchain} alt="blockchain" /></div>
          <div className="fs-13">Azure<br /> Blockchain <br />Workbench</div>
        </div>

        <div className="dfc hp-cont center">
          <div className="df jcc"><img src={aws} alt="amazon" /></div>
          <div className="fs-13">Amazon <br />Managed<br /> Blockchain</div>
        </div>

        <div className="dfc hp-cont center">
          <div className="df jcc"><img src={imge} alt="imge" /></div>
          <div className="fs-13">Google<br /> Cloud<br /> Platform</div>
        </div>
      </div>
    </div>
  )
}

export default Platform