import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Music } from 'lucide-react';
import BeatCard from '@/components/BeatCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { mockBeats } from '@/data/music';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select';

export default function MusicCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('all');
  const [moodFilter, setMoodFilter] = useState('all');

  const filteredBeats = mockBeats.filter((beat) => {
    const matchesSearch = beat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         beat.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         beat.mood.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = genreFilter === 'all' || beat.genre === genreFilter;
    const matchesMood = moodFilter === 'all' || beat.mood === moodFilter;
    
    return matchesSearch && matchesGenre && matchesMood;
  });

  const genres = Array.from(new Set(mockBeats.map(beat => beat.genre)));
  const moods = Array.from(new Set(mockBeats.map(beat => beat.mood)));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Music className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              My Music Catalog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my collection of original beats spanning multiple genres and moods. 
              Each track is crafted with passion and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-6 pb-8">
        <div className="container mx-auto">
          <motion.div
            className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search beats by title, genre, or mood..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-4">
                <Select value={genreFilter} onValueChange={setGenreFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Genres</SelectItem>
                    {genres.map(genre => (
                      <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={moodFilter} onValueChange={setMoodFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Mood" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Moods</SelectItem>
                    {moods.map(mood => (
                      <SelectItem key={mood} value={mood}>{mood}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setGenreFilter('all');
                    setMoodFilter('all');
                  }}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          {filteredBeats.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBeats.map((beat, index) => (
                <BeatCard key={beat.id} beat={beat} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Music className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">No beats found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}