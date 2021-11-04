import { SectionProps } from "./interfaces";

const BaseSection: React.FC<SectionProps> = ({ children: { left, right } }) => {
  const areaClass = "w-full lg:w-1/2 flex items-center justify-center"

  return (
    <div className="flex flex-col sm:flex-row lg:max-h-96">
      <div className={areaClass}>
        {left}
      </div>
      <div className={areaClass}>
        {right}
      </div>
    </div>
  );
}

export default BaseSection;
