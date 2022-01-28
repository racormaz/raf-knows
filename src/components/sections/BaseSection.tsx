import { SectionProps } from "./interfaces";
import { Fade } from 'react-reveal';

const BaseSection: React.FC<SectionProps> = ({ children: { left, right, }, leftClass, rightClass }) => {
  const areaClass = "flex items-center justify-center"

  return (
    <Fade right big opposite>
      <div className="flex flex-col my-16 gap-16 xl:gap-0 md:flex-row w-full">
        <div className={`${areaClass} ${leftClass ? leftClass : ''} order-last md:order-none w-full md:w-1/3`}>
          {left}
        </div>
        <div className={`${areaClass} ${rightClass ? rightClass : ''} w-full md:w-2/3`}>
          {right}
        </div>
      </div>
    </Fade>
  );
}

export default BaseSection;
