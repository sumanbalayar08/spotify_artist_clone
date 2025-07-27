import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineHeart,
} from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import { MdLibraryMusic } from "react-icons/md";
import { useSidebar } from "../context/SidebarContext";
import { GoSidebarCollapse, GoPlus } from "react-icons/go";
import { FaMusic } from "react-icons/fa";
import classNames from "classnames";

const demoPlaylists = [
  "Top Hits 2025",
  "Coding Vibes",
  "Focus Flow",
  "Chillout Lounge",
  "Workout Beats",
  "Evening Jazz",
  "Nepali Classics",
  "Indie Pop",
  "Lo-fi Dreams",
  "Focus Flow",
  "Chillout Lounge",
  "Workout Beats",
  "Evening Jazz",
  "Nepali Classics",
  "Indie Pop",
  "Lo-fi Dreams",
];

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
};

const SidebarItem = ({ icon, label, isOpen }: SidebarItemProps) => (
  <div
    className={classNames(
      "flex px-4 py-3 rounded-md hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer group w-full",
      {
        "items-center gap-3": isOpen,
        "justify-center": !isOpen,
      }
    )}
    aria-label={label}
  >
    <span
      className={classNames(
        "text-xl text-gray-400 group-hover:text-white",
        {
          "mx-auto": !isOpen,
        }
      )}
    >
      {icon}
    </span>
    {isOpen && (
      <span className="text-sm text-gray-300 group-hover:text-white">
        {label}
      </span>
    )}
  </div>
);


const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <aside
      className={classNames(
        "bg-zinc-800 text-white flex flex-col h-full rounded-lg overflow-hidden transition-all duration-300 ease-in-out",
        {
          "w-80": isOpen,
          "w-20": !isOpen,
        }
      )}
    >
      <div className={classNames("flex w-full px-4 py-3 items-center", isOpen ? "justify-between" : "justify-center flex-col gap-2")}>
        {isOpen && <p className="font-bold text-md">Your Library</p>}
        <div className={classNames("flex items-center", isOpen ? "gap-2" : "flex-col-reverse gap-3")}>
          <div className="rounded-full p-2 bg-zinc-700 hover:scale-105 cursor-pointer transition-transform">
            <GoPlus size={22} className="text-gray-200 hover:text-white" title="Add" />
          </div>
          <GoSidebarCollapse
            size={26}
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white cursor-pointer transition-transform hover:rotate-180 hidden md:block"
            title="Toggle Sidebar"
          />
        </div>
      </div>

      <nav className={`flex flex-col gap-1 items-center`}>
        <SidebarItem icon={<AiFillHome />} label="Home" isOpen={isOpen} />
        <SidebarItem icon={<AiOutlineSearch />} label="Search" isOpen={isOpen} />
        <SidebarItem icon={<MdLibraryMusic />} label="Your Library" isOpen={isOpen} />
        <SidebarItem icon={<FiPlusSquare />} label="Create Playlist" isOpen={isOpen} />
        <SidebarItem icon={<AiOutlineHeart />} label="Liked Songs" isOpen={isOpen} />
      </nav>

      <hr className="my-4 border-white mx-4" />

      <div className="flex-1 overflow-y-auto px-3 pb-4 w-full scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <ul className={classNames("space-y-2 text-sm", isOpen ? "text-left" : "text-center")}>
          {demoPlaylists.map((playlist, idx) => (
            <li
              key={idx}
              className="hover:text-white cursor-pointer transition-colors"
              title={playlist}
            >
              <div className={classNames("flex items-center gap-3", isOpen ? "justify-start" : "justify-center")}>
                <div className="bg-white/10 text-white p-2 rounded-md">
                  <FaMusic size={16} />
                </div>
                {isOpen && (
                  <p
                    className={classNames(
                      "truncate transition-all duration-300",
                      isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                    )}
                  >
                    {playlist}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
