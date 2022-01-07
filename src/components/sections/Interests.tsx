import { ReactComponent as Composition } from "../../assets/illustrations/composition.svg"
import BaseSection from "./BaseSection";

import SpotifyPlayer from "../spotifyPlayer/SpotifyPlayer";

const Experience: React.FC = () => {
  return (
    <BaseSection
      leftClass="order-last md:order-none"
    >
      {{
        left: <div className="relative w-full h-full">
          <div className="absolute z-0 h-full w-full bg-red-600" style={{ zIndex: -1, transform: "translate(-40%) rotate(45deg)", }} />
          <div className="absolute z-0 h-96 rounded-full w-96 bg-purple-400" style={{ zIndex: -1, transform: "translate(30%, -50%)", }} />
          <div className="absolute z-0 h-96 rounded-full w-96 bg-green-600" style={{ zIndex: -1, transform: "translate(75%, 60%)", }} />
          <SpotifyPlayer />
        </div>,
        right: <article className="section-content">
          <h1>Some stuff I'm into</h1>
          <div className="flex md:flex-row flex-col">
            <p className="md:w-1/3">Music is one of my biggest interest, and here's playlist of some of my all time favorites</p>

          </div>
        </article>
      }}
    </BaseSection >
  );
}

export default Experience;
