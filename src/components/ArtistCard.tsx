import { motion } from "framer-motion";
import type { Artist } from "../types/artist";
import avatarImg from "../assets/img1.jpg";

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <img
        src={avatarImg}
        alt={artist.name}
        className="object-cover w-64 rounded-full mb-3"
      />
      <h3 className="text-white font-semibold truncate">{artist.name}</h3>
      <p className="text-sm text-gray-400 truncate">{artist.genre || "Unknown Genre"}</p>
    </motion.div>
  );
}
