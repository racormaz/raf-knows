import { ReactComponent as Composition2 } from "../../assets/illustrations/composition2.svg"
import BaseSection from "./BaseSection";

const Experience: React.FC = () => {
  return (
    <BaseSection
    >
      {{
        left: <Composition2 className="h-auto w-full overflow-visible" />,
        right: <article className="section-content">
          <h1>Some stuff I'm into</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic bread with cheese to their
            children, with the food earning such an iconic status in our culture that kids will often dress
            up as warm, cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
            springing up around the country.
          </p>
        </article>
      }}
    </BaseSection>
  );
}

export default Experience;
