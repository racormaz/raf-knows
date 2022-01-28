import { connect, ConnectedProps } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../store/navigation';
import { Link } from 'react-scroll';
import { FaHamburger } from "react-icons/fa"
import { Fade } from 'react-reveal';

import GitHub from "../assets/logos/GitHub.png"
import LinkedIn from "../assets/logos/LinkedIn.png"
import RCM from "../assets/logos/RCM.png"

import { useState } from 'react';

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>;

type NavProps = {
  sections: any[]
}

type AllProps = NavProps & PropsFromRedux;

const Nav: React.FC<AllProps> = ({ sections }) => {

  const [showNav, setShowNav] = useState(false)

  function toggleNav() {
    setShowNav(!showNav);
  }

  const navItems = sections.map(({ target, label }, index) => (
    <Link key={index}
      onClick={() => setShowNav(false)}
      ignoreCancelEvents
      className="md:w-44 w-40 text-center px-4 py-2 transform hover:translate-y-1 hover:scale-105 cursor-pointer transition duration-500 ease-in-out"
      activeClass="bg-blue-400 shadow-lg border-t-2 border-l-8 border-b-8 border-r-2 rounded border-gray-800 transform scale-105 text-gray-900 transition duration-500 ease-in-out" to={target} offset={0} hashSpy={true} spy={true} smooth={true} duration={800} containerId="content">
      {label}
    </Link>
  ))

  return (
    <div className="w-full shadow-2xl bg-gray-100">
      <div className="grid gap-3 relative py-4 md:py-4">
        {/* Nav Items */}
        <div className="grid grid-cols-12">
          <div className="my-auto ml-8 col-span-full md:col-span-3 flex space-x-6 place-items-center">
            <img className="h-8" src={RCM} alt="RCM Logo" />

            <div className="border-l-2 h-6 md:h-10 border-gray-500 rounded"></div>

            <a target="_blank" rel="noopener noreferrer" href="https://github.com/racormaz">
              <img className="h-6" src={GitHub} alt="GitHub Logo" />
            </a>

            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rafael-cortes-m/">
              <img className="h-6" src={LinkedIn} alt="LinkedIn Logo" />
            </a>
          </div>
          <div className="hidden col-span-6 mx-auto m-2 md:flex flex-row space-x-6 text-gray-500 font-medium text-xl">
            {navItems}
          </div>
        </div>

        {/* Hamburger Button */}
        <div className="fixed bottom-6 right-6 z-50 h-14 w-14">
          {/* Menu */}
          <div className="relative h-0 transition duration-500 ease-in-out">
            <Fade opposite when={showNav}>
              {showNav &&
                <div className="absolute bottom-2 right-8 bg-gray-100 px-4 rounded py-2 shadow-lg text-gray-500 font-medium text-lg">
                  <div className="flex flex-col space-y-4">
                    {navItems}
                  </div>
                </div>
              }
            </Fade>
          </div>
          <button onClick={toggleNav} className="transition duration-200 ease-in-out h-14 w-14 transform active:translate-y-1 active:bg-blue-100 border-b-4 border-r-4 border-blue-500 shadow-xl md:hidden rounded-full bg-blue-200 fixed bottom-6 right-6">
            <FaHamburger className="h-full mx-auto text-3xl text-pink-500" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default connector(Nav)
