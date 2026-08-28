import { useState } from "react";
import { Play } from "./Icons";

export default function VideoPanel({
  src,
  youtubeId,
  poster,
  posterAlt = "",
  title = "Video",
  className = "",
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative isolate overflow-hidden bg-ink ${className}`}>
      {playing ? (
        src ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
          />
        ) : (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          {poster && (
            <img
              src={poster}
              alt={posterAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}

          <span className="absolute inset-0 bg-ink/25 transition-colors duration-200 group-hover:bg-ink/35" />

          <span className="absolute top-1/2 left-1/2 flex h-[64px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center border-2 border-white text-white transition-transform duration-200 group-hover:scale-105 md:h-[80px] md:w-[112px]">
            <Play size={40} className="ml-1" />
          </span>
        </button>
      )}
    </div>
  );
}
