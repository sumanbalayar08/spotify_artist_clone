import { motion } from "framer-motion";
import type { Artist } from "../types/artist";
import avatarImg from "../assets/img1.jpg";

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="flex flex-col items-center p-2 cursor-pointer w-full"
>
      <img
        src={avatarImg}
        alt={artist.name}
        className="object-cover w-64 rounded-full mb-3 border-2 border-zinc-700"
      />
      <h3 className="text-white font-semibold truncate max-w-[80%] text-center">{artist.name}</h3>
      <p className="text-sm text-gray-400 truncate max-w-[80%] text-center">
        {artist.genre || "Unknown Genre"}
      </p>
    </motion.div>
  );
}
