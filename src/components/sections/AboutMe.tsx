import { ReactComponent as Composition } from "../../assets/illustrations/composition.svg"
import Resume from "../../assets/documents/RafaelCortesMazzillo.Resume.pdf"
import BaseSection from "./BaseSection";

const AboutMe: React.FC = () => {
  return (
    <BaseSection
    >
      {{
        left: <Composition className="h-auto w-full overflow-visible" />,
        right: <article className="section-content">
          <h1>Hi! My name is Rafael Cortes Mazzillo</h1>
          <p className="text-xl">
            I am a <strong>Full Stack Software Developer</strong>, with a focus on <strong>Front End Web Development</strong> and on delivering a great <strong>User Experience</strong>
          </p>
          <div className="text-center mt-12">
            <a href={Resume} target="_blank" rel="noopener noreferrer" download>
              <button className="font-medium px-4 py-2 bg-blue-400 shadow-lg border-t-2 border-l-8 border-b-8 border-r-2 rounded border-gray-800 transform scale-105 text-gray-900 hover:translate-y-1 hover:scale-105 cursor-pointer transition duration-500 ease-in-out">
                Download Resume
              </button>
            </a>
          </div>
        </article>
      }}
    </BaseSection>
  );
}

export default AboutMe;
