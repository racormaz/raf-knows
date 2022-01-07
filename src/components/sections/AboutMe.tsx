import { ReactComponent as Composition } from "../../assets/illustrations/composition.svg"
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
            I am a <strong>Full Stack Software Developer</strong>, with a focus on <strong>Front End Web Development</strong> and on delivering a great <strong>User Experience</strong>.
          </p>
        </article>
      }}
    </BaseSection>
  );
}

export default AboutMe;
