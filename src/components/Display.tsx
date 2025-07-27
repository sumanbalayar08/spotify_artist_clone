import { useCallback, useEffect, useRef, useState } from 'react';
import type { Artist } from '../types/artist';
import { fetchArtists } from '../lib/fetchArtists';
import ArtistCard from './ArtistCard';
import SkeletonCard from './SkeletonCard';
import { motion } from 'framer-motion';
import { useSearch } from '../context/SearchContext';
import { useDebounce } from '../hooks/useDebounce';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Display() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { search } = useSearch();
  const debouncedSearch = useDebounce(search, 400);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setArtists([]);
    setPage(0);
    setHasMore(true);
  }, [debouncedSearch]);

  const loadArtists = useCallback(async () => {
    setLoading(true);
    try {
      const newArtists = await fetchArtists({ page, search: debouncedSearch });
      if (newArtists.length === 0) {
        setHasMore(false);
      } else {
        setArtists(prev => {
          const existing = new Set(prev.map(a => a.id));
          return [
            ...prev,
            ...newArtists.filter(a => !existing.has(a.id)),
          ];
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [page, debouncedSearch]);

  useEffect(() => {
    loadArtists();
  }, [loadArtists]);

  useEffect(() => {
    if (!observerRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !loading) {
          setPage(p => p + 1);
        }
      },
      { rootMargin: '200px' }
    );
    obs.observe(observerRef.current);
    return () => obs.disconnect();
  }, [hasMore, loading]);

  return (
    <main className="w-full h-full bg-zinc-800 rounded-lg">
      <div className="h-full overflow-y-auto">
        {artists.length === 0 && loading ? (
          <div className="flex flex-wrap gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : artists.length === 0 && !loading ? (
          <div className="flex items-center justify-center h-full text-white font-bold text-lg">
            No artists found.
          </div>
        ) : (
          <>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {artists.map((a) => (
                <ArtistCard key={a.id} artist={a} />
              ))}
            </motion.div>

            {loading && page > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <SkeletonCard key={`loading-${i}`} />
                ))}
              </div>
            )}

            {hasMore && <div ref={observerRef} className="h-1" />}
          </>
        )}
      </div>
    </main>
  );

}
