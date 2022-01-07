import { SectionProps } from "./interfaces";
import { Fade } from 'react-reveal';

const BaseSection: React.FC<SectionProps> = ({ children: { left, right } }) => {
  const areaClass = "flex items-center justify-center"

  return (
    <Fade right big opposite>
      <div className="flex flex-col space-y-16 sm:flex-row">
        <div className={`${areaClass} w-full lg:w-1/3`}>
          {left}
        </div>
        <div className={`${areaClass} w-full lg:w-2/3`}>
          {right}
        </div>
      </div>
    </Fade>
  );
}

export default BaseSection;
