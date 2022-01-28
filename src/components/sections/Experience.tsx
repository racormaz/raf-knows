import { ReactComponent as Composition2 } from "../../assets/illustrations/composition2.svg"
import { FaVuejs } from "react-icons/fa";
import { DiDjango, DiDotnet } from "react-icons/di";
import { SiMicrosoftazure, SiFigma } from "react-icons/si";
import BaseSection from "./BaseSection";
import { useMemo, useState } from "react";

const stacks = [
  {
    icon: FaVuejs,
    name: "Vue.js",
    content: <div>
      <ul>
        <li>Developed and maintained multiple web applications using Vue.js with Typescript support.</li>
        <li>Documented guidelines for best practices when working with our teams' Vue.js ecosystem</li>
        <li>Built complex centralized stores using Vuex as the state management library.</li>
        <li>Developed and maintained a UI component library containing 15+  reusable components, using Vue.js + TailwindCSS + Jest, to be used throughout multiple micro front-ends</li>
      </ul>
    </div>
  },
  {
    icon: DiDjango,
    name: "Django",
    content: <div>
      <ul>
        <li>Created an advanced REST API with Python, Django REST Framework and Docker using Test Driven Development</li>
        <li>Managed the deployment of a Django API on a Windows IIS server</li>
      </ul>
    </div>
  },
  {
    icon: SiMicrosoftazure,
    name: "Azure",
    content: <div>
      <ul>
        <li>Acquired a Microsoft Certified: Azure Developer Associate certificate</li>
        <li>Integrated web apps with various Azure cloud services such as Azure Storage and Azure AD</li>
        <li>Implemented a Proof of Concept for real-time communication between frontend and backend using the Azure SignalR service</li>
      </ul>
    </div>
  },
  {
    icon: SiFigma,
    name: "Figma",
    content: <div>
      <ul>
        <li>Implemented Figma designs provided by the UX team</li>
        <li>Collaborated with UX team to facilitate the handover of Figma designs</li>
        <li>Participated in the UX design process, and used Figma to design a solution based on user interviews</li>
      </ul>
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
            These are some of the frameworks and tools I've worked with (though not limited to these, of course) over the past 3 years as a Full Stack Software Developer.
            <br />
            Browse through these for more details:</p>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 mb-8">
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
          <div className={`rounded bg-gray-100 p-4 text-base leading-5 h-96 overflow-y-auto md:h-80 shadow-lg`}>
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
