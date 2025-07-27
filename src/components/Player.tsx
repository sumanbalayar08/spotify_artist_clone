import { assets } from "../assets/assets";

const Player = () => {
  const track = {
    image: assets.img1,
    name: "Blinding Lights",
    desc: "The Weeknd",
  };

  const playStatus = false;
  const time = {
    currentTime: { minute: "1", second: "15" },
    totalTime: { minute: "3", second: "45" },
  };

  const play = () => { };
  const pause = () => { };
  const next = () => { };
  const previous = () => { };
  const seekSong = () => { };

  return (
    <footer className="w-full bg-zinc-900 py-3 px-4 text-white flex flex-wrap items-center justify-between gap-y-4 shadow-inner">
      <div className="flex items-center gap-3 min-w-[10rem] max-w-[33%]">
        <img className="w-12 h-12 rounded shadow-md" src={track.image} alt="current-track" />
        <div className="text-sm">
          <p className="font-medium truncate">{track.name}</p>
          <p className="text-gray-400 text-xs">{track.desc}</p>
        </div>
      </div>

      <div className="flex flex-col items-center w-full max-w-xl mx-auto">
        <div className="flex items-center gap-4 mb-2">
          <img src={assets.shuffle_icon} className="w-4 hover:opacity-80 cursor-pointer" />
          <img src={assets.prev_icon} className="w-4 hover:opacity-80 cursor-pointer" onClick={previous} />
          {playStatus ? (
            <img src={assets.pause_icon} className="w-8 hover:scale-110 transition-transform cursor-pointer" onClick={pause} />
          ) : (
            <img src={assets.play_icon} className="w-8 hover:scale-110 transition-transform cursor-pointer" onClick={play} />
          )}
          <img src={assets.next_icon} className="w-4 hover:opacity-80 cursor-pointer" onClick={next} />
          <img src={assets.loop_icon} className="w-4 hover:opacity-80 cursor-pointer" />
        </div>

        <div className="flex items-center gap-2 w-full px-4">
          <span className="text-xs text-gray-400">{time.currentTime.minute}:{time.currentTime.second}</span>
          <div onClick={seekSong} className="relative flex-grow h-1 bg-gray-600 rounded cursor-pointer">
            <div className="absolute top-0 left-0 h-1 bg-green-500 rounded" style={{ width: "40%" }} />
          </div>
          <span className="text-xs text-gray-400">{time.totalTime.minute}:{time.totalTime.second}</span>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-3 min-w-[10rem] justify-end opacity-80">
        {[assets.plays_icon, assets.mic_icon, assets.queue_icon, assets.speaker_icon, assets.volume_icon].map((icon, i) => (
          <img key={i} src={icon} className="w-4 cursor-pointer" />
        ))}
        <div className="w-20 h-1 bg-gray-400 rounded" />
        <img src={assets.mini_player_icon} className="w-4 cursor-pointer" />
        <img src={assets.zoom_icon} className="w-4 cursor-pointer" />
      </div>
    </footer>

  );
};

export default Player;