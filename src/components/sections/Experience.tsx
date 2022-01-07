import { ReactComponent as Composition2 } from "../../assets/illustrations/composition2.svg"
import { FaVuejs } from "react-icons/fa";
import { DiDjango, DiNodejs, DiDotnet } from "react-icons/di";
import { SiMicrosoftazure, SiFigma } from "react-icons/si";
import BaseSection from "./BaseSection";
import { useMemo, useState } from "react";

const stacks = [
  {
    icon: FaVuejs,
    name: "Vue.js",
    content: <div>
      <ul>
        <li>Developed and maintained multiple <strong>Web Applications</strong> using <strong>Vue.js</strong> with <strong>Typescript</strong> support.</li>
        <li>Built complex centralized stores using <strong>Vuex</strong> as the state management library.</li>
        <li>Built and maintained a <strong>UI Component Library</strong> for use throughout different in house applications.</li>
      </ul>
    </div>
  },
  {
    icon: DiDjango,
    name: "Django",
    content: null
  },
  {
    icon: DiNodejs,
    name: "Node.js",
    content: null
  },
  {
    icon: DiDotnet,
    name: ".Net",
    content: null
  },
  {
    icon: SiMicrosoftazure,
    name: "Azure",
    content: null
  },
  {
    icon: SiFigma,
    name: "Figma",
    content: <div>
      Hello
    </div>
  },
]

const Experience: React.FC = () => {
  const [activeStack, setActiveStack] = useState<string | null>(stacks[0].name)

  const activeStackData = useMemo(() => stacks.find(s => s.name === activeStack), [activeStack])

  function renderComponent(stack: (typeof stacks[0])) {
    const { icon: Component } = stack

    if (Component) {
      return <Component className="w-full h-10" />
    }
  }

  return (
    <BaseSection
    >
      {{
        left: <Composition2 className="h-auto w-full overflow-visible" />,
        right: <article className="section-content">
          <h1>This is my stack</h1>
          <p>
            These are some of the frameworks I've worked with (though not limited to these, of course) over the past <strong>3 years</strong> as a <strong>Full Stack Software Developer</strong>.
            <br />
            Browse through these for more details:</p>
          <div className="grid grid-cols-3 gap-2 md:grid-cols-6 mb-8">
            {
              stacks.map((stack) =>
                <div
                  key={stack.name}
                  onClick={() => setActiveStack(stack.name)}
                  className={`${activeStack === stack.name ? 'scale-110 text-gray-900' : ''} text-gray-500  cursor-pointer transform hover:scale-105 transition ease-in-out duration-200`}>
                  {renderComponent(stack)}
                  <div className={` text-center text-xs font-medium text-opacity-50`}>{stack.name}</div>
                </div>
              )
            }
          </div>
          <div className={`rounded bg-gray-100 p-4 text-sm md:h-56 min-h-56 shadow-lg`}>
            {activeStackData ?
              <div>
                <span className="font-medium text-lg mb-2">{activeStackData.name}</span>
                {activeStackData.content}
              </div> :
              <div className="text-lg text-gray-500">Select a stack to view more details...</div>}
          </div>
        </article>
      }}
    </BaseSection>
  );
}

export default Experience;
