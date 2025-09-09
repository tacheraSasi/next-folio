import { motion } from 'framer-motion';
import { Calendar, Music, Clock, Hash } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AudioPlayer from '@/components/AudioPlayer';
import { Beat } from '@/data/music';

interface BeatCardProps {
  beat: Beat;
  index: number;
}

export default function BeatCard({ beat, index }: BeatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="bg-neutral-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-neutral-800/70 transition-all duration-300">
        <CardHeader className="space-y-2">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg text-white">{beat.title}</CardTitle>
            <Badge variant="secondary" className="ml-2 bg-green-400/20 text-green-400 border-green-400/30">
              {beat.genre}
            </Badge>
          </div>
          {beat.description && (
            <p className="text-sm text-gray-300">{beat.description}</p>
          )}
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-gray-200">{beat.bpm} BPM</span>
            </div>
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4 text-gray-400" />
              <span className="text-gray-200">{beat.key}</span>
            </div>
            <div className="flex items-center gap-2">
              <Hash className="w-4 h-4 text-gray-400" />
              <span className="text-gray-200">{beat.mood}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-gray-200">
                {new Date(beat.dateProduced).toLocaleDateString()}
              </span>
            </div>
          </div>

          <AudioPlayer audioUrl={beat.audioUrl} title={beat.title} />
        </CardContent>
      </Card>
    </motion.div>
  );
}