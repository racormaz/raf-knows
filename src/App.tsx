import { Element, scrollSpy } from 'react-scroll'
// import Test from './components/Test';
import * as SectionComponents from './components/sections';
import Nav from './components/Nav';
import "./App.css"
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    scrollSpy.update();
  }, [])

  const sections = [
    {
      label: "About Me",
      target: "about-me",
      component: SectionComponents.AboutMe,
      revealProps: {
        right: true
      },
      className: "bg-yellow-300"
    },
    {
      label: "Experience",
      target: "experience",
      component: SectionComponents.Experience,
      revealProps: {
        left: true
      },
      className: "bg-blue-300"
    },
    {
      label: "Interests",
      target: "interests",
      component: SectionComponents.Interests,
      revealProps: {
        right: true
      },
      className: "bg-pink-400"
    }
  ]

  function renderSectionComponent(section: (typeof sections[0])) {
    const { component: Component } = section

    if (Component) {
      return <Component />
    }
  }

  return (
    <div id="main-container">
      <div id="nav">
        <Nav sections={sections} />
      </div>
      <div id="content" className="md:py-0">
        {sections.map((section, index) => {
          return (
            <div key={index}>
              <Element name={section.target} className={`${section.className} px-6 md:px-0 min-h-screen flex flex-col justify-center items-center relative overflow-hidden`}>
                {renderSectionComponent(section)}
              </Element>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
