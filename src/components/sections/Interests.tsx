import BaseSection from "./BaseSection";
import SpotifyPlayer from "../spotifyPlayer/SpotifyPlayer";

const Experience: React.FC = () => {
  return (
    <BaseSection>
      {{
        left: <div className="relative w-full h-full">
          <div className="absolute z-0 h-full w-full bg-red-600" style={{ zIndex: -1, transform: "translate(-40%) rotate(45deg)", }} />
          <div className="absolute z-0 h-96 rounded-full w-96 bg-purple-400" style={{ zIndex: -1, transform: "translate(30%, -50%)", }} />
          <div className="absolute z-0 h-96 rounded-full w-96 bg-green-600" style={{ zIndex: -1, transform: "translate(75%, 60%)", }} />
          <SpotifyPlayer />
        </div>,
        right: <article className="section-content">
          <h1>Some stuff I'm into</h1>
          <div className="rounded bg-gray-100 p-4 shadow-lg">
            <p>
              Music is one of my biggest interest, so here's playlist (slideshow really) of some of my all time favorite albums.
              <br />
              Some other stuff that I'm interested in are:
            </p>
            <ul>
              <li>Basketball</li>
              <li>Soccer</li>
              <li>Video Games</li>
              <li>Photography</li>
              <li>Cooking</li>
            </ul>
          </div>
        </article>
      }}
    </BaseSection >
  );
}

export default Experience;
