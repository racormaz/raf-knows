import * as Covers from "../../assets/images/covers";
import "./style.css";

import { AiFillPlayCircle, AiFillPauseCircle, AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { ChangeEvent, useState } from "react";
import React from "react";

function useInterval(callback: Function, delay: number | undefined) {
  const intervalRef = React.useRef<number>();
  const callbackRef = React.useRef(callback);

  // Remember the latest callback:
  //
  // Without this, if you change the callback, when setInterval ticks again, it
  // will still call your old callback.
  //
  // If you add `callback` to useEffect's deps, it will work fine but the
  // interval will be reset.

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the interval:

  React.useEffect(() => {
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(() => callbackRef.current(), delay);

      // Clear interval if the components is unmounted or the delay changes:
      return () => window.clearInterval(intervalRef.current);
    }
  }, [delay]);

  // Returns a ref to the interval ID in case you want to clear it manually:
  return intervalRef;
}

const SpotifyPlayer: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [sliding, setSliding] = useState(false);
  const [progress, setProgress] = useState(0);

  const baseIconClass = "h-full cursor-pointer text-gray-400 hover:text-gray-100"
  const TRACK_TIME = 10;
  const tracks = [
    {
      cover: Covers.AM,
      artist: "Arctic Monkeys",
      album: "AM"
    },
    {
      cover: Covers.NWTS,
      artist: "Drake",
      album: "Nothing Was The Same"
    },
    {
      cover: Covers.AF,
      artist: "James Blake",
      album: "Assume Form"
    },
    {
      cover: Covers.EITR,
      artist: "Mick Jenkins",
      album: "Elephant In The Room"
    },
    {
      cover: Covers.KL,
      artist: "The Weeknd",
      album: "Kiss Land"
    },
  ]

  const [currentTrack, setCurrentTrack] = useState(0);

  function sliderChange(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e
    setSliding(true)
    setProgress(parseInt(target.value))
  }

  useInterval(() => {
    if (playing && !sliding) {
      if (progress < TRACK_TIME) {
        setProgress((progress) => progress + 1);
      } else {
        forwardSkip()
      }
    }
  }, 1000)

  function play() {
    setPlaying(true)
  }

  function pause() {
    setPlaying(false)
  }

  function forwardSkip() {
    setProgress(0)
    if (currentTrack < tracks.length - 1) {
      setCurrentTrack(currentTrack + 1)
    } else {
      setCurrentTrack(0)
    }
  }

  function backwardSkip() {
    setProgress(0)
    if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1)
    } else {
      setCurrentTrack(tracks.length - 1)
    }
  }

  function slideSide(index: number) {
    if (currentTrack === tracks.length - 1 && index === 0) {
      return "right"
    }
    if (currentTrack === 0 && index === tracks.length - 1) {
      return "left"
    }
    if (currentTrack + 1 === index) {
      return "right"
    }
    if (currentTrack - 1 === index) {
      return "left"
    }
    return ""
  }

  return (
    <div className="shadow-2xl z-50 ml-auto mt-0 md:mt-20 xl:w-96 w-full rounded-xl select-none overflow-hidden" style={{ backgroundColor: "#191414" }}>
      <div className="flex h-full p-8 gap-4 flex-col items-center">
        {/* Album Art */}
        <div>
          {
            tracks.map((track, index) =>
              <div key={index}
                className={
                  `flex flex-col slide 
                  ${slideSide(index)} 
                  ${currentTrack === index ? "active" : ""}`
                }>
                {
                  currentTrack === index && (
                    <>
                      <div className="h-64 w-64 mb-2">
                        <img src={track.cover} alt={`${track.album} - ${track.artist}`} className="object-cover rounded-sm h-full w-full" style={{ margin: 0 }} />
                      </div>
                      <span className="text-gray-100 text-sm font-medium">{track.album}</span>
                      <span className="text-gray-500 text-xs">{track.artist}</span>
                    </>
                  )
                }
              </div>
            )
          }
        </div>

        {/* Track */}
        <div className="w-full text-white">
          <input onChange={sliderChange} onMouseDown={() => setSliding(true)} onMouseUp={() => setSliding(false)} value={progress} className="spotify-slider" type="range" min="0" max={TRACK_TIME} />

          <div className="flex justify-between">
            <span className="text-xs text-gray-500">{new Date(progress * 1000).toISOString().substr(15, 4)}</span>
            <span className="text-xs text-gray-500">{new Date(TRACK_TIME * 1000).toISOString().substr(15, 4)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex w-32 items-center justify-between">
          <AiFillStepBackward onClick={backwardSkip} className={`${baseIconClass} w-6`} />
          {
            playing
              ? <AiFillPauseCircle onClick={pause} className={`${baseIconClass} w-10`} />
              : <AiFillPlayCircle onClick={play} className={`${baseIconClass} w-10`} />
          }
          <AiFillStepForward onClick={forwardSkip} className={`${baseIconClass} w-6`} />
        </div>
      </div>
    </div>
  );
}

export default SpotifyPlayer;
