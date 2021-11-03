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
      component: SectionComponents.AboutMe
    },
    {
      label: "Experience",
      target: "experience",
      component: null
    },
    {
      label: "Interests",
      target: "interests",
      component: null
    }
  ]

  function renderSectionComponent(section: (typeof sections[0])) {
    const { component: Component } = section

    if (Component) {
      return <Component {...section} />
    }
  }

  return (
    <div id="main-container">
      <div id="nav">
        <Nav sections={sections} />
      </div>
      <div id="content" className="pb-16">
        {sections.map((section, index) => {
          return (
            <Element name={section.target} key={index} className="h-screen py-4">
              <h1>{section.label}</h1>
              {renderSectionComponent(section)}
            </Element>
          )
        })}
      </div>
    </div>
  );
}

export default App;
