import { ReactComponent as Composition } from "../../assets/illustrations/composition.svg"
import BaseSection from "./BaseSection";

import SpotifyPlayer from "../spotifyPlayer/SpotifyPlayer";

const Experience: React.FC = () => {
  return (
    <BaseSection
    >
      {{
        left: <Composition className="h-auto w-full overflow-visible" />,
        right: <article className="section-content">
          <h1>Some stuff I'm into</h1>
          <div className="flex md:flex-row flex-col">
            <p className="md:w-1/3">Music is one of my biggest interest, and here's playlist of some of my all time favorites</p>
            <SpotifyPlayer />
          </div>
        </article>
      }}
    </BaseSection >
  );
}

export default Experience;
