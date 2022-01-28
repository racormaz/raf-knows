import { Link } from 'react-scroll';

import GitHub from "../assets/logos/GitHub.png"
import LinkedIn from "../assets/logos/LinkedIn.png"
import RCM from "../assets/logos/RCM.png"

const Nav: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className} flex space-x-6 place-items-center`}>
      <Link
        ignoreCancelEvents
        to="about-me" offset={0} hashSpy={true} spy={true} smooth={true} duration={800} containerId="content">
        <img className="h-8 cursor-pointer" onClick={() => window.scrollTo(0, 0)} src={RCM} alt="RCM Logo" />

      </Link>
      <div className="border-l-2 h-6 md:h-10 border-gray-500 rounded"></div>

      <a target="_blank" rel="noopener noreferrer" href="https://github.com/racormaz">
        <img className="h-6" src={GitHub} alt="GitHub Logo" />
      </a>

      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rafael-cortes-m/">
        <img className="h-6" src={LinkedIn} alt="LinkedIn Logo" />
      </a>
    </div>
  )
}

export default Nav
