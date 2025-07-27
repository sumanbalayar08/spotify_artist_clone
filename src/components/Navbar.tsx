import { AiFillSpotify } from "react-icons/ai";
import { GoHome, GoBell } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useSearch } from "../context/SearchContext";
import { FaFirefoxBrowser } from "react-icons/fa6";

const Navbar = () => {
  const { search, setSearch } = useSearch();

  return (
    <header className="w-full flex py-2 px-4 justify-between items-center">
      <div className="items-center ml-5">
        <AiFillSpotify size={40} />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <div className="rounded-full p-3 bg-zinc-800 hover:scale-105 cursor-pointer transition-transform">
            <GoHome size={30} className="text-gray-400 hover:text-white transition duration-200 ease-in-out" />
          </div>
        </div>
        <div className="group relative w-[30rem] gap-4 focus-within:ring-2 focus-within:ring-white rounded-full">
          <FiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-white transition-colors"
            size={25}
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for artists..."
            className="rounded-full pl-12 pr-4 py-4 w-full focus:outline-none bg-zinc-800 text-white placeholder:text-gray-400"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {search && search.length > 0 && (
              <MdClose size={30} className="text-gray-400 hover:text-white cursor-pointer" onClick={() => setSearch("")} />
            )}
            <div className="h-8 w-px bg-white" />
            <span className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">
              <FaFirefoxBrowser size={20} />
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-8">
        <GoBell
          size={20}
          className="text-gray-300 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer"
        />
        <FaUserFriends size={20} className="text-gray-300 hover:text-white hover:scale-110 transition duration-200 ease-in-out cursor-pointer"
        />
        <div className="p-2 bg-gray-800 rounded-full hover:scale-105 cursor-pointer transition-transform">
          <p className="w-8 h-8 flex items-center justify-center font-semibold rounded-full bg-pink-500 text-sm">
            U
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
