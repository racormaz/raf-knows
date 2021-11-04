import { Element, scrollSpy } from 'react-scroll'
// import Test from './components/Test';
import * as SectionComponents from './components/sections';
import Nav from './components/Nav';
import "./App.css"
import { useEffect } from 'react';
import { Fade } from 'react-reveal';

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
      }
    },
    {
      label: "Experience",
      target: "experience",
      component: SectionComponents.AboutMe,
      revealProps: {
        left: true
      }
    },
    {
      label: "Interests",
      target: "interests",
      component: SectionComponents.AboutMe,
      revealProps: {
        right: true
      }
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
      <div id="content" className="py-16 lg:py-0">
        {sections.map((section, index) => {
          return (
            <Fade {...section.revealProps} opposite key={index}>
              <Element name={section.target} className="lg:h-screen py-16 lg:pb-0 flex justify-center items-center">
                {renderSectionComponent(section)}
              </Element>
            </Fade>
          )
        })}
      </div>
    </div>
  );
}

export default App;
