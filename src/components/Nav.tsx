import { connect, ConnectedProps } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../store/navigation';
import { Link } from 'react-scroll';
import { FaHamburger } from "react-icons/fa"

import GitHub from "../assets/logos/GitHub.png"
import LinkedIn from "../assets/logos/LinkedIn.png"
import { useState } from 'react';

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>;

type NavProps = {
  sections: any[]
}

type AllProps = NavProps & PropsFromRedux;

function Nav({ sections }: AllProps) {

  const [showNav, setShowNav] = useState(false)

  function toggleNav() {
    setShowNav(!showNav);
  }

  const navItems = sections.map(({ target, label }, index) => (
    <Link key={index}
      onClick={() => setShowNav(false)}
      className="lg:w-44 w-40 text-center px-4 py-2 transform hover:translate-y-1 hover:scale-105 cursor-pointer transition duration-500 ease-in-out"
      activeClass="bg-blue-400 shadow-lg border-t-2 border-l-8 border-b-8 border-r-2 rounded border-gray-800 transform scale-105 translate-y-1 text-gray-900 transition duration-500 ease-in-out" to={target} offset={0} hashSpy={true} spy={true} smooth={true} duration={800} containerId="content">
      {label}
    </Link>
  ))

  return (
    <div className="grid gap-3 relative py-4 lg:py-4">
      {/* Nav Items */}
      <div className="grid grid-cols-6">
        <div className="my-auto ml-8 col-span-full lg:col-span-1 flex space-x-6">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/racormaz">
            <img className="h-6" src={GitHub} alt="GitHub Logo" />
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rafael-cortes-m/">
            <img className="h-6" src={LinkedIn} alt="LinkedIn Logo" />
          </a>
        </div>
        <div className="hidden col-span-4 mx-auto m-2 lg:flex flex-row space-x-6 text-gray-500 font-medium text-xl">
          {navItems}
        </div>
      </div>
      {/* Bottom Gradient */}
      <div className="absolute z-10 w-full top-full h-20 lg:h-20 bg-gradient-to-b from-gray-100" />

      {/* Hamburger Button */}
      <div onClick={toggleNav} className="z-50 border-b-4 border-r-4 border-blue-500 shadow-xl lg:hidden h-14 w-14 rounded-full bg-blue-200 fixed bottom-6 right-6">
        {/* Menu */}
        {showNav &&
          <div className="relative h-0 transition duration-500 ease-in-out">
            <div className="absolute bottom-2 right-6 bg-gray-100 px-4 rounded py-2 shadow-lg text-gray-500 font-medium text-lg">
              <div className="flex flex-col space-y-4">
                {navItems}
              </div>
            </div>
          </div>
        }
        <FaHamburger className="h-full mx-auto text-3xl text-pink-500" />
      </div>
    </div>
  )
}

export default connector(Nav)
