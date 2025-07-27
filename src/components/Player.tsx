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
    <footer className="w-full bg-black py-2 px-4 text-white flex items-center justify-between z-10">
      <div className="flex items-center gap-4 w-[30%]">
        <img className="w-14 h-14 rounded" src={track.image} alt="current-track" />
        <div className="text-sm">
          <p className="font-semibold truncate">{track.name}</p>
          <p className="text-gray-400 text-xs">{track.desc}</p>
        </div>
      </div>

      <div className="flex flex-col items-center w-[40%]">
        <div className="flex items-center gap-5 mb-2">
          <img src={assets.shuffle_icon} className="w-4 hover:opacity-80 cursor-pointer" />
          <img src={assets.prev_icon} className="w-4 hover:opacity-80 cursor-pointer" onClick={previous} />
          {playStatus ? (
            <img src={assets.pause_icon} className="w-8 hover:scale-110 cursor-pointer" onClick={pause} />
          ) : (
            <img src={assets.play_icon} className="w-8 hover:scale-110 cursor-pointer" onClick={play} />
          )}
          <img src={assets.next_icon} className="w-4 hover:opacity-80 cursor-pointer" onClick={next} />
          <img src={assets.loop_icon} className="w-4 hover:opacity-80 cursor-pointer" />
        </div>

        <div className="flex items-center gap-3 w-full max-w-[500px]">
          <span className="text-xs text-gray-400">{time.currentTime.minute}:{time.currentTime.second}</span>
          <div onClick={seekSong} className="relative w-full h-1 bg-gray-600 rounded cursor-pointer">
            <div className="absolute top-0 left-0 h-1 bg-green-500 rounded" style={{ width: "40%" }}></div>
          </div>
          <span className="text-xs text-gray-400">{time.totalTime.minute}:{time.totalTime.second}</span>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-3 w-[30%] justify-end opacity-80">
        <img src={assets.plays_icon} className="w-4 cursor-pointer" />
        <img src={assets.mic_icon} className="w-4 cursor-pointer" />
        <img src={assets.queue_icon} className="w-4 cursor-pointer" />
        <img src={assets.speaker_icon} className="w-4 cursor-pointer" />
        <img src={assets.volume_icon} className="w-4 cursor-pointer" />
        <div className="w-20 h-1 bg-gray-400 rounded"></div>
        <img src={assets.mini_player_icon} className="w-4 cursor-pointer" />
        <img src={assets.zoom_icon} className="w-4 cursor-pointer" />
      </div>
    </footer>
  );
};

export default Player;