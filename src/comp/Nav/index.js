import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../svg/arrows/white.svg';
import { ReactComponent as Lines } from '../../svg/lines.svg';
import logoBlk from '../../img/logo/black.png';
import logoWht from '../../img/logo/white.png';

let list = ["Services", "Solutions", "Company", "Resourses", "Partners"]

function Title({ title }) {
  return (
    <div className="df cp">
      <p className="flex1">{title}</p>
      <Arrow className="navArrowSvg rotateZ90" />
    </div>
  )
}

function Nav() {
  const observerRef = useRef(null)
  const wrapperRef = useRef(null)
  const navigate = useNavigate()
  const hamRef = useRef()

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    }
    const observer = new IntersectionObserver(([entries]) => {
      if (entries.isIntersecting) {
        wrapperRef.current.classList.remove("change")
      } else {
        wrapperRef.current.classList.add("change")
      }
    }, options)

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => observer.disconnect()
  }, [observerRef])

  const onClickfn = () => {
    hamRef.current.classList.toggle("open")
  }

  return (
    <>
      <div ref={observerRef}></div>

      <nav className="df gap1" ref={wrapperRef}>
        <div className="nav-logo">
          <Link to="/">
            <img src={logoBlk} alt="logo" className="logo-black" />
            <img src={logoWht} alt="logo" className="logo-white" />
          </Link>
        </div>

        <div className="df flex1 gap1 links" ref={hamRef}>
          {
            list.map(title => (
              <Title title={title} key={title} />
            ))
          }
          <Link to="/" className="">Blog</Link>
          <button className="nav-btn br5 p-8-16" onClick={() => navigate("/contact")}>Contact</button>
        </div>

        <div id="hamburger" onClick={onClickfn}>
          <Lines className="hamburger-svg" />
        </div>
      </nav>
    </>
  )
}

export default Nav
