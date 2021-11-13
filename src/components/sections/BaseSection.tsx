import { SectionProps } from "./interfaces";

const BaseSection: React.FC<SectionProps> = ({ children: { left, right } }) => {
  const areaClass = "w-full md:w-1/2 flex items-center justify-center"

  return (
    <div className="flex flex-col space-y-16 sm:flex-row md:max-h-96">
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
